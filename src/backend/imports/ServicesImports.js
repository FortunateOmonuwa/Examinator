import { RegisterAdmin } from "../functionalities/User/Admin.Service.js";
import {
  RegisterExaminer,
  GetExaminerDetails,
  DeleteExaminer,
} from "../functionalities/User/Examiner.Service.js";
import { RegisterStudent } from "../functionalities/User/Student.Service.js";
import {
  CreateExam,
  DeleteExam,
  GetExamByID,
  GetAllExams,
} from "../functionalities/Exam/Exam.Service.js";
import {
  Login,
  RefreshAccessToken,
  ConfirmUser,
  Logout,
} from "../functionalities/User/Authentication.Service.js";
export {
  RegisterAdmin,
  RegisterExaminer,
  RegisterStudent,
  GetExaminerDetails,
  DeleteExaminer,
  CreateExam,
  DeleteExam,
  GetExamByID,
  GetAllExams,
  Login,
  RefreshAccessToken,
  ConfirmUser,
  Logout,
};
