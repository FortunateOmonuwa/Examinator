import {
  RegisterExaminerAsync,
  GetExaminerAsync,
} from "../../imports/Controllerimports.js";
import { express } from "../../imports/PackageImports.js";
const router = express.Router();

router.post("/register", RegisterExaminerAsync);
router.get("/profile/:id", GetExaminerAsync);
export { router as ExaminerRouter };
