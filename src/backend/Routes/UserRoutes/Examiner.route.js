import {
  RegisterExaminerAsync,
  GetExaminerAsync,
  DeleteExaminerAsync,
} from '../../imports/Controllerimports.js';
import { express } from '../../imports/PackageImports.js';
const router = express.Router();

router.post('/', RegisterExaminerAsync);
router.get('/:id', GetExaminerAsync);
router.delete('/:id', DeleteExaminerAsync);
export { router as ExaminerRouter };
