import {
  CreateHash,
  CompareHash,
  Generate64BaeHexString,
} from "../utilities/Encrypt.js";
import Response from "../utilities/Response.js";
import { nameRegex, passwordRegex, emailRegex } from "../utilities/Regex.js";
import database from "../utilities/Prisma.js";

import {
  RegisterMail,
  ConfirmMail,
  ResetPasswordMail,
  LoginMail,
  ExamSubmissionMail,
  ExamResultsMail,
} from "../utilities/Mail-Notifications.js";
export {
  CreateHash,
  Response,
  nameRegex,
  passwordRegex,
  emailRegex,
  database,
  CompareHash,
  Generate64BaeHexString,
 
  RegisterMail,
  ConfirmMail,
  ResetPasswordMail,
  LoginMail,
  ExamSubmissionMail,
  ExamResultsMail,
};
