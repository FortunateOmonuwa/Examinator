import { Examiner } from "../../imports/ModelImports.js";
import { checkIfUserExists } from "./User.Service.js";
import { SendConfirmationMail } from "../Mail.Service.js";
import {
  CreateHash,
  Response,
  database,
  nameRegex,
  emailRegex,
  passwordRegex,
  GenerateOTP,
} from "../../imports/UtilityImports.js";
import { generateKey } from "crypto";
import client from "../../utilities/Redis.config.js";

const RegisterExaminer = async ({ firstname, lastname, email, password }) => {
  console.log(`Attempting to register examiner ${firstname} ${lastname}`);
  if (!firstname || !lastname || !email || !password) {
    console.log("Missing required fields");
    return Response.Unsuccessful({
      message: "Missing required fields",
      resultCode: 400,
    });
  }

  if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
    console.log("Invalid name format");
    return Response.Unsuccessful({
      message: "Invalid name format",
      resultCode: 400,
    });
  }

  if (!emailRegex(email)) {
    console.log("Invalid email format");
    return Response.Unsuccessful({
      message: "Invalid email format",
      resultCode: 400,
    });
  }

  if (!passwordRegex.test(password)) {
    console.log("Invalid password format");
    return Response.Unsuccessful({
      message:
        "Invalid password format. Password must be at least 7 characters and contain at least one special character.",
      resultCode: 400,
    });
  }

  const upperCaseEmail = email.toUpperCase();
  const checkUserProfile = await checkIfUserExists(upperCaseEmail);
  if (checkUserProfile) {
    console.log("Profile already exists");
    return Response.Unsuccessful({
      message: `Profile with email: ${email} already exists`,
      resultCode: 400,
    });
  }

  const newExaminer = new Examiner({
    name: `${firstname} ${lastname}`.toUpperCase(),
    email: upperCaseEmail,
    password: CreateHash(password),
  });

  try {
    console.log("Adding new examiner details to db:", newExaminer);
    const { newProfileQuery, newExaminerQuery } = await database.$transaction(
      async (tx) => {
        const newProfileQuery = await tx.UserProfile.create({
          data: {
            email: newExaminer.email,
            passwordHash: newExaminer.password,
            role: newExaminer.role,
          },
        });
        console.log("New profile created:", newProfileQuery);
        const newExaminerQuery = await tx.Examiner.create({
          data: {
            name: newExaminer.name,
            profileId: newProfileQuery.id,
          },
        });
        console.log("New examiner created:", newExaminerQuery);
        return { newProfileQuery, newExaminerQuery };
      }
    );

    const confirmEmail = await SendConfirmationMail({
      id: newProfileQuery.id,
      receiver: newExaminer.email,
      name: newExaminer.name,
    });
    if (!confirmEmail.isSuccessful) {
      console.error(confirmEmail.message);
      return Response.Unsuccessful({
        message: `An error occurred while sending a verification mail to ${newExaminer.email}`,
      });
    }

    console.log("Confirmation mail sent:", confirmEmail);
    console.log("Examiner registered successfully");
    return Response.Successful({
      message: `Profile created successfully. Please check your mail to verify your account.`,
      body: newExaminerQuery,
    });
  } catch (error) {
    console.error("Transaction or email process failed:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const GetExaminerDetails = async (examinerId) => {
  try {
    const examiner = await database.Examiner.findUnique({
      where: {
        id: examinerId,
      },
      select: {
        id: true,
        name: true,
        exams: true,
        profile: {
          select: {
            id: true,
            email: true,
            role: true,
            dateCreated: true,
            dateUpdated: true,
          },
        },
      },
    });
    if (examiner === null) {
      return Response.Unsuccessful({
        message: "Profile doesn't exist",
        resultCode: 404,
        error: "Not found",
      });
    }

    return Response.Successful({
      body: examiner,
    });
  } catch (e) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const DeleteExaminer = async (examinerId) => {
  try {
    const examiner = await database.Examiner.delete({
      where: {
        id: examinerId,
      },
    });

    if (examiner) {
      await database.UserProfile.delete({
        where: {
          id: examiner.profileId,
        },
      });
      return Response.Successful({
        message: "Examiner deleted successfully",
        body: null,
      });
    }

    return Response.Unsuccessful({
      message: "Failed to delete examiner",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

export { RegisterExaminer, GetExaminerDetails, DeleteExaminer };
