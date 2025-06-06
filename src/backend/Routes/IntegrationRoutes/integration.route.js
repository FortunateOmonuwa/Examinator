import { express } from "../../imports/PackageImports.js";
import { CalculateScoreAsync } from "../../imports/Controllerimports.js";

const router = express.Router();

router.post("/calculate-score", CalculateScoreAsync);

export { router as IntegrationRouter };
