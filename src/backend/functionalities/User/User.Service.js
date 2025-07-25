import { database } from "../../imports/UtilityImports.js";
import Response from "../../utilities/Response.js";
import client from "../../utilities/Redis.config.js";
const checkIfUserExists = async (email) => {
  try {
    const user = await database.UserProfile.findUnique({
      where: {
        email: email.toUpperCase(),
      },
    });

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
};

const checkExaminerId = async (examinerId) => {
  try {
    const examiner = await database.Examiner.findUnique({
      where: {
        id: examinerId,
      },
    });

    if (examiner) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
};

const VerifyAccount = async (Id, token) => {
  try {
    console.log("Attempting to Verify account for id:", Id);
    const savedToken = await client.get(`Verify:${Id}`);
    if (savedToken != token) {
      return Response.Unsuccessful({
        message: "Invalid or expired token",
        resultCode: 400,
        error: "Invalid token",
      });
    }
    console.log(savedToken);
    // await client.get(`Verify:${Id}`).then(async (result) => {
    //   if (result !== token || result === null) {
    //     return Response.Unsuccessful({
    //       message: "Invalid or expired token",
    //       resultCode: 400,
    //       error: "Invalid token",
    //     });
    //   }
    // });
    console.log("Token valid");
    let account = await database.UserProfile.findUnique({
      where: {
        id: Id,
      },
    });

    if (!account) {
      return Response.Unsuccessful({
        message: "Account not found",
        resultCode: 404,
        error: "Account not found",
      });
    }

    if (account.isVerified) {
      return Response.Unsuccessful({
        message: "Account already verified... Proceed to login",
        resultCode: 400,
        error: "already-verified",
      });
    }

    await database.UserProfile.update({
      where: {
        id: Id,
      },
      data: {
        isVerified: true,
      },
    });

    await client.del(`Verify:${Id}`);
    await client.del(`${Id}`);
    return Response.Successful({
      message: "Account verified",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
      error: error,
    });
  }
};
export { checkIfUserExists, checkExaminerId, VerifyAccount };
