import { express } from "../../imports/PackageImports.js";
import {
  CreateExamAsync,
  DeleteExamAsync,
  GetExamAsync,
} from "../../imports/Controllerimports.js";
const router = express.Router();

router.post("/:examinerId", CreateExamAsync);
router.get("/:id", GetExamAsync);
router.delete("/:id", DeleteExamAsync);
export { router as ExamRouter };
