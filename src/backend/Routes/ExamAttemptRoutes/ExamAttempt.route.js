import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAttemptAsync,
  GetExamAttemptsAsync,
  GetExamAttemptByIdAsync,
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

export { router as ExamAttemptRouter };
