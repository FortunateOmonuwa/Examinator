import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
} from "../../imports/Controllerimports.js";
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

// Exam attempt routes (must come before parameterized routes)
router.post("/submit", CreateExamAttemptAsync);
router.get(
  "/attempts/:examId",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetExamAttemptsAsync
);
router.get(
  "/attempt/:attemptId",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetExamAttemptByIdAsync
);

// Exam management routes
router.post(
  "/:examinerId",
  AuthenticateToken,
  AuthorizeRole("ADMIN", "EXAMINER"),
  CreateExamAsync
);
// Public route for students to access exams (no authentication required)
router.get("/:id", GetExamAsync);
router.delete(
  "/:id",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  DeleteExamAsync
);
router.get(
  "/exams/:id",
  AuthenticateToken,
  AuthorizeRole("EXAMINER"),
  GetAllExamsAsync
);

export { router as ExamRouter };
