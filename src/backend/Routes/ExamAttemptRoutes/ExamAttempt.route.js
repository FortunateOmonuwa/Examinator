import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAttemptAsync,
  GetExamAttemptsAsync,
  GetExamAttemptByIdAsync,
  GetAllExaminerAttemptsAsync,
} from "../../controllers/ExamAttemptController/ExamAttempt.Controller.js";
import {
  AuthenticateToken,
  AuthorizeRole,
} from "../../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/submit", CreateExamAttemptAsync);

router.get(
  "/exam/:examId",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetExamAttemptsAsync
);

router.get(
  "/:attemptId",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetExamAttemptByIdAsync
);

// Get all attempts for all exams created by an examiner
router.get(
  "/examiner/:examinerId",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetAllExaminerAttemptsAsync
);

export { router as ExamAttemptRouter };
