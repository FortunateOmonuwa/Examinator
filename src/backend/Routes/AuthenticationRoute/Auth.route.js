import { express } from "../../imports/PackageImports.js";
import {
  LoginAsync,
  RefreshAccessTokenAsync,
  ConfirmUserAsync,
  LogoutAsync,
} from "../../controllers/AuthController/Auth.Controller.js";

const router = express.Router();

router.use("/login", LoginAsync);
router.use("/refresh", RefreshAccessTokenAsync);
router.use("/confirm", ConfirmUserAsync);
router.use("/logout", LogoutAsync);

export { router as AuthRouter };
