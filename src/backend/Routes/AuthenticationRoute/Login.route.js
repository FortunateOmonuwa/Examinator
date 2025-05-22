import { express } from "../../imports/PackageImports.js";
import {
  LoginAsync,
  RefreshAccessTokenAsync,
} from "../../controllers/AuthController/Auth.Controller.js";

const router = express.Router();

router.use("/login", LoginAsync);
router.use("/refresh", RefreshAccessTokenAsync);

export { router as AuthRouter };
