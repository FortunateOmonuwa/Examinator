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
