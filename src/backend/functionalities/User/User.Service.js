import { database } from '../../imports/UtilityImports.js';
const checkIfUserExists = async (email) => {
  try {
    const user = await database.UserProfile.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error querying database:', error);
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
    console.error('Error querying database:', error);
    throw error;
  }
};
export { checkIfUserExists, checkExaminerId };
