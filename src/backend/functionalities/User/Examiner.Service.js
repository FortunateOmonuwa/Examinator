import { Examiner } from "../../imports/ModelImports.js";
import { checkIfUserExists } from "./User.Service.js";
import {
  CreateHash,
  Response,
  database,
  nameRegex,
  emailRegex,
  passwordRegex,
} from "../../imports/UtilityImports.js";
import { response } from "express";

const RegisterExaminer = async ({ firstname, lastname, email, password }) => {
  const checkUserProfile = await checkIfUserExists(email);
  if (checkUserProfile) {
    return Response.Unsuccessful({
      message: `Profile with email: ${email} already exists`,
    });
  }
  const newExaminer = new Examiner({
    name: `${firstname} ${lastname}`,
    email: email,
    password: CreateHash(password),
  });

  try {
    const newProfileQuery = await database.UserProfile.create({
      data: {
        email: newExaminer.email,
        passwordHash: newExaminer.password,
        role: newExaminer.role,
      },
    });

    if (!newProfileQuery) {
      return Response.Unsuccessful({
        message: "An error occurred while trying to create your profile",
      });
    }

    const newExaminerQuery = await database.Examiner.create({
      data: {
        name: newExaminer.name,
        profileId: newProfileQuery.id,
      },
    });

    if (newExaminerQuery) {
      return Response.Successful({
        message: `Profile created successfully`,
        body: newExaminerQuery,
      });
    }

    return Response.Unsuccessful({
      message: "An error occurred while trying to create your profile",
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
export { RegisterExaminer, GetExaminerDetails };
