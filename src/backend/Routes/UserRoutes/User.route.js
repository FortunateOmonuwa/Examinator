import { VerifyAccountAsync } from "../../imports/Controllerimports.js";
import { express } from "../../imports/PackageImports.js";
const router = express.Router();

router.get("/verify", VerifyAccountAsync);

export { router as UserRouter };
