import {
  RegisterExaminerAsync,
  GetExaminerAsync,
  DeleteExaminerAsync,
} from "../../imports/Controllerimports.js";
import { express } from "../../imports/PackageImports.js";
import {
  AuthenticateToken,
  AuthorizeRole,
} from "../../middleware/AuthMiddleware.js";
const router = express.Router();

router.post("/", RegisterExaminerAsync);
router.get(
  "/:id",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  GetExaminerAsync
);
router.delete(
  "/:id",
  AuthenticateToken,
  AuthorizeRole("EXAMINER", "ADMIN"),
  DeleteExaminerAsync
);
export { router as ExaminerRouter };
