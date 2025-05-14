import { Examiner } from '../../imports/ModelImports.js';
import { checkIfUserExists } from './User.Service.js';
import {
  CreateHash,
  Response,
  database,
  nameRegex,
  emailRegex,
  passwordRegex,
} from '../../imports/UtilityImports.js';

const RegisterExaminer = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !lastname || !email || !password) {
    return Response.Unsuccessful({
      message: 'Missing required fields',
      resultCode: 400,
    });
  }

  if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
    return Response.Unsuccessful({
      message: 'Invalid name format',
      resultCode: 400,
    });
  }

  if (!emailRegex.test(email)) {
    return Response.Unsuccessful({
      message: 'Invalid email format',
      resultCode: 400,
    });
  }

  if (!passwordRegex.test(password)) {
    return Response.Unsuccessful({
      message:
        'Invalid password format. Password must be at least 7 characters and contain at least one special character.',
      resultCode: 400,
    });
  }

  const checkUserProfile = await checkIfUserExists(email);
  if (checkUserProfile) {
    return Response.Unsuccessful({
      message: `Profile with email: ${email} already exists`,
      resultCode: 400,
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
        message: 'An error occurred while trying to create your profile',
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
      message: 'An error occurred while trying to create your profile',
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: 'An internal server error occurred',
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
        error: 'Not found',
      });
    }

    return Response.Successful({
      body: examiner,
    });
  } catch (e) {
    return Response.Unsuccessful({
      message: 'An internal server error occurred',
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const DeleteExaminer = async (examinerId) => {
  try {
    const deletedExaminer = await database.Examiner.delete({
      where: {
        id: examinerId,
      },
    });

    if (deletedExaminer) {
      await database.UserProfile.delete({
        where: {
          id: deletedExaminer.profileId,
        },
      });
      return Response.Successful({
        message: 'Examiner deleted successfully',
        body: null,
      });
    }

    return Response.Unsuccessful({
      message: 'Failed to delete examiner',
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: 'An internal server error occurred',
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

export { RegisterExaminer, GetExaminerDetails, DeleteExaminer };
