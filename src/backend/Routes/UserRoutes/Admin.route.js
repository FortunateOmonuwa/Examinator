import { RegisterAdminAsync } from '../../imports/Controllerimports.js';
import { express } from '../../imports/PackageImports.js';
const router = express.Router();

router.post('/register', RegisterAdminAsync);
export { router as AdminRouter };
