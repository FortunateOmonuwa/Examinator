import { express } from '../../imports/PackageImports.js';
import { CreateExamAsync } from '../../imports/Controllerimports.js';
const router = express.Router();

router.post('/:examinerId', CreateExamAsync);
export { router as ExamRouter };
