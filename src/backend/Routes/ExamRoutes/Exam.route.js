import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
  GetPublicExamsAsync,
  CheckExamAttemptsAsync,
  ToggleExamPublicStatusAsync,
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

router.post(
  "/:examinerId",
  AuthenticateToken,
  AuthorizeRole("ADMIN", "EXAMINER"),
  CreateExamAsync
);

// Get public exams (no authentication required)
router.get("/public", GetPublicExamsAsync);

// Check exam attempts for email (no authentication required)
router.get("/check-attempts/:examId", CheckExamAttemptsAsync);

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

// Toggle exam public status
router.patch(
  "/:examId/toggle-public",
  AuthenticateToken,
  AuthorizeRole("EXAMINER"),
  ToggleExamPublicStatusAsync
);

export { router as ExamRouter };
