import { RegisterAdminAsync } from "../controllers/UserControllers/Admin.Controller.js";
import {
  RegisterExaminerAsync,
  GetExaminerAsync,
  DeleteExaminerAsync,
} from "../controllers/UserControllers/Examiner.Controller.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
} from "../controllers/ExamController/Exam.Controller.js";

import {
  Login,
  RefreshAccessToken,
  ConfirmUser,
  Logout,
} from "./ServicesImports.js";
export {
  RegisterAdminAsync,
  RegisterExaminerAsync,
  GetExaminerAsync,
  DeleteExaminerAsync,
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
  Login,
  RefreshAccessToken,
  ConfirmUser,
  Logout,
};
