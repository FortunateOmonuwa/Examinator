import {
  Login,
  RefreshAccessToken,
  ConfirmUser,
  Logout,
} from "../../imports/ServicesImports.js";
import Response from "../../utilities/Response.js";
const LoginAsync = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  try {
    const response = await Login({ email: email, password: password });
    if (response.isSuccessful) {
      const { accessToken, user, refreshToken, userId } = response.body;
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({
        response: Response.Successful({
          message: "Login successful",
          body: {
            id: user.id, // This is the profile Id... i.e. the user's profile id on the UserProfile Table
            role: user.role,
            email: user.email,
            name: user.examiner?.name ?? user.student?.name,
            userId: userId,
          },
        }),
      });
    } else {
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const RefreshAccessTokenAsync = async (req, res) => {
  const { body } = req;
  const { refreshToken } = body;

  try {
    const response = await RefreshAccessToken({ refreshToken: refreshToken });
    if (response.isSuccessful) {
      res.cookie("accessToken", response.body.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ response: response });
    } else {
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const ConfirmUserAsync = async (req, res) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({
        response: { isSuccessful: false, message: "Not authenticated" },
      });
    }
    const response = await ConfirmUser({ token: token });
    if (!response.isSuccessful) {
      return res.status(401).json({
        response: { isSuccessful: false, message: "Invalid token" },
      });
    }
    const user = response.body;
    res.json({
      response: {
        isSuccessful: true,
        message: "User retrieved",
        body: {
          id: user.id,
          role: user.role,
          email: user.email,
          name: user.examiner?.name ?? user.student?.name,
          userId: user.examiner?.id ?? user.student?.id,
          lastLoginAt: user.authManager?.lastLoginAt,
        },
      },
    });
  } catch (err) {
    return res.status(401).json({
      response: { isSuccessful: false, message: "Invalid token" },
    });
  }
};
const LogoutAsync = (req, res) => {
  const { body } = req;
  const { id } = body;
  Logout(id);
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  return res.json({
    response: {
      isSuccessful: true,
      message: "Logged out",
    },
  });
};

export { LoginAsync, RefreshAccessTokenAsync, ConfirmUserAsync, LogoutAsync };
