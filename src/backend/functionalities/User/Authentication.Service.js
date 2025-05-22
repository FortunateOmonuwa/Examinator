import {
  CreateHash,
  CompareHash,
  database,
  Generate64BaeHexString,
} from "../../imports/UtilityImports.js";
import Response from "../../utilities/Response.js";
import jwt from "jsonwebtoken";
const Login = async ({ email, password }) => {
  if (!email || !password) {
    return Response.Unsuccessful({
      message: "Missing required fields",
      resultCode: 400,
    });
  }

  try {
    const user = await database.UserProfile.findUnique({
      where: {
        email: email,
      },
      include: {
        examiner: true,
        student: true,
        authManager: true,
      },
    });

    if (!user) {
      return Response.Unsuccessful({
        message: "email or password does not exist",
        resultCode: 401,
      });
    }
    const isAccountLocked =
      user.authManager?.isLocked &&
      user.authManager?.lockedUntil > new Date(Date.now());
    const hasTooManyAttempts = user.authManager?.loginAttempts >= 5;

    if (isAccountLocked || hasTooManyAttempts) {
      await database.authManager.update({
        where: { id: user.authManager.id },
        data: {
          isLocked: true,
          isLoggedIn: false,
          lockedUntil: new Date(Date.now() + 1 * 60 * 60 * 1000),
          refreshToken: null,
          refreshTokenExpiresAt: null,
          loginAttempts: { increment: 1 },
        },
      });

      return Response.Unsuccessful({
        message: `Your account has been locked due to too many login attempts. Try again in 1 hour.`,
        resultCode: 403,
        body: {
          lockedUntil: user.authManager.lockedUntil,
          loginAttempts: user.authManager.loginAttempts,
          lastLoginAt: user.authManager.lastLoginAt,
          loginSuccessful: false,
        },
      });
    }

    const isPasswordCorrect = await CompareHash(password, user.passwordHash);
    if (!isPasswordCorrect) {
      if (user.authManager) {
        await database.authManager.update({
          where: { id: user.authManager.id },
          data: {
            loginAttempts: { increment: 1 },
          },
        });
      }

      return Response.Unsuccessful({
        message: "email or password does not exist",
        resultCode: 401,
        body: {
          loginAttempts: user.authManager?.loginAttempts,
          loginSuccessful: false,
        },
      });
    }

    let id = user.id;
    let user_Id = user.examiner?.id ?? user.student?.id;
    const token = await GenerateJWT(user_Id, user.role);
    const refreshToken = await Generate64BaeHexString();
    const hashedRefreshToken = CreateHash(refreshToken);

    await database.authManager.upsert({
      where: {
        userId: id,
      },
      update: {
        refreshToken: hashedRefreshToken,
        refreshTokenExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        isLoggedIn: true,
        lastLoginAt: new Date(Date.now()),
        isLocked: false,
        lockedUntil: null,
        loginAttempts: 0,
      },
      create: {
        userId: id,
        refreshToken: hashedRefreshToken,
        refreshTokenExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        isLoggedIn: true,
        lastLoginAt: new Date(Date.now()),
        isLocked: false,
        lockedUntil: null,
        loginAttempts: 0,
      },
    });

    return Response.Successful({
      message: "Login successful",
      body: {
        user: user,
        accessToken: token,
        refreshToken: refreshToken,
        userId: user_Id,
      },
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
      body: {
        loginSuccessful: false,
      },
    });
  } finally {
    await database.$disconnect();
  }
};

const GenerateJWT = async (userId, role) => {
  const user = {
    userId,
    role,
  };
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  return token;
};

const RefreshAccessToken = async ({ refreshToken }) => {
  const hashedRefreshToken = CreateHash(refreshToken);
  const authRecord = await prisma.authManager.findFirst({
    where: {
      refreshToken: hashedRefreshToken,
      isLoggedIn: true,
    },
    include: {
      user: true,
    },
  });

  if (!authRecord) {
    return Response.Unsuccessful({
      message: "Invalid or expired refresh token",
      resultCode: 403,
    });
  }

  if (authRecord.refreshTokenExpiresAt < new Date(Date.now())) {
    await prisma.authManager.update({
      where: { id: authRecord.id },
      data: {
        isLoggedIn: false,
        refreshToken: null,
        refreshTokenExpiresAt: null,
        loginAttempts: 0,
      },
    });
    return Response.Unsuccessful({
      message: "Invalid or expired refresh token",
      resultCode: 403,
    });
  }

  const newAccessToken = await GenerateJWT(
    authRecord.userId,
    authRecord.user.role
  );

  return Response.Successful({
    message: "New access token issued",
    body: {
      accessToken: newAccessToken,
    },
  });
};

export { Login, RefreshAccessToken };
