import { Student } from '../../imports/ModelImports.js';
import {
  CreateHash,
  Response,
  database,
  nameRegex,
  emailRegex,
  passwordRegex,
} from '../../imports/UtilityImports.js';

const RegisterStudent = ({ firstname, lastname, email, password }) => {
  const newStudent = new Student({
    name: `${firstname} ${lastname}`,
    email: email,
    password: CreateHash(password),
  });

  return newStudent;
};
export { RegisterStudent };
