import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
  GetAllExamsAsync,
} from "../../imports/Controllerimports.js";
const router = express.Router();

router.post("/:examinerId", CreateExamAsync);
router.get("/:id", GetExamAsync);
router.delete("/:id", DeleteExamAsync);
router.get("/:id/exams", GetAllExamsAsync);
export { router as ExamRouter };
