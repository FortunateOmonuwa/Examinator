import { express } from "../../imports/PackageImports.js";
import {
  SendMailAsync,
  SendConfirmationMailAsync,
  SendResetPasswordMailAsync,
  SendExamResultsMailAsync,
  SendExamLinkMailAsync,
} from "../../controllers/IntegrationControllers/Mailer.controller.js";
import {
  AuthenticateToken,
  AuthorizeRole,
} from "../../middleware/AuthMiddleware.js";
const router = express.Router();

router.post("/send-mail", SendMailAsync);
router.post("/send-confirmation", SendConfirmationMailAsync);
router.post("/send-reset-password", SendResetPasswordMailAsync);
router.post("/send-exam-results", SendExamResultsMailAsync);
router.post(
  "/send-exam-link",

  SendExamLinkMailAsync
);

export { router as MailerRouter };
