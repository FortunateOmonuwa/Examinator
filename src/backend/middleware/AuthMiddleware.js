// middlewares/AuthMiddleware.js
import jwt from "jsonwebtoken";
import Response from "../utilities/Response.js";
import { database } from "../imports/UtilityImports.js";

const AuthenticateToken = async (req, res, next) => {
  const token =
    req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json(
      Response.Unsuccessful({
        message: "Unauthorized",
        resultCode: 401,
      })
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("decoded", decoded);
    const user = await database.UserProfile.findUnique({
      where: { id: decoded.profileId },
      include: {
        examiner: true,
        student: true,
        authManager: true,
      },
    });

    if (!user) {
      return res.status(401).json(
        Response.Unsuccessful({
          message: "Unauthorized",
          resultCode: 401,
        })
      );
    }
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json(
      Response.Unsuccessful({
        message: "Unauthorized",
        resultCode: 401,
      })
    );
  }
};
const AuthorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    // console.log("userRole", userRole);

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json(
        Response.Unsuccessful({
          message: "Forbidden - You do not have access to this resource",
          resultCode: 403,
        })
      );
    }
    next();
  };
};

export { AuthenticateToken, AuthorizeRole };
