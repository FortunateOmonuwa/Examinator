import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
} from "../../imports/Controllerimports.js";
import {
  AuthenticateToken,
  AuthorizeRole,
} from "../../middleware/AuthMiddleware.js";
const router = express.Router();

router.post(
  "/:examinerId",
  AuthenticateToken,
  AuthorizeRole("ADMIN", "EXAMINER"),
  CreateExamAsync
);
router.get(
  "/:id",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "STUDENT"),
  GetExamAsync
);
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
