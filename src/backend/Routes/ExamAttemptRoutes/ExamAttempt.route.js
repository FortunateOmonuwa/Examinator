import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAttemptAsync,
  GetExamAttemptsAsync,
  GetExamAttemptByIdAsync,
} from "../../controllers/ExamAttemptController/ExamAttempt.Controller.js";

const router = express.Router();

// Submit exam attempt (no authentication required for students taking exams)
router.post("/submit", CreateExamAttemptAsync);

// Get all attempts for a specific exam (requires authentication)
router.get("/exam/:examId", GetExamAttemptsAsync);

// Get specific exam attempt by ID (requires authentication)
router.get("/:attemptId", GetExamAttemptByIdAsync);

export { router as ExamAttemptRouter };
