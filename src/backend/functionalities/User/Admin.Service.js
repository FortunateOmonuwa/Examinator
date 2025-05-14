import { Admin } from '../../imports/ModelImports.js';
import { checkIfUserExists } from './User.Service.js';
import {
  CreateHash,
  Response,
  database,
  nameRegex,
  emailRegex,
  passwordRegex,
} from '../../imports/UtilityImports.js';

const RegisterAdmin = async ({ email, password }) => {
  const checkUserProfile = await checkIfUserExists(email);
  if (checkUserProfile) {
    return Response.Unsuccessful({
      message: `Profile with email: ${email} already exists`,
    });
  }
  const newAdmin = new Admin({
    email: email,
    password: CreateHash(password),
  });

  try {
    const newAdminQuery = await database.UserProfile.create({
      data: newAdmin,
    });

    if (newAdminQuery) {
      return Response.Successful({
        message: 'Admin profile created successfully',
        body: newAdminQuery,
      });
    }

    return Response.Unsuccessful({
      message: 'Failed to create admin profile',
    });
  } catch (error) {
    console.error('An error occurred while creating the admin profile:', error);

    return Response.Unsuccessful({
      message: 'An error occurred',
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

export { RegisterAdmin };
