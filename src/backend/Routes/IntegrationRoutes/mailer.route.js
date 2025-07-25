import { express } from "../../imports/PackageImports.js";
import {
  SendMailAsync,
  ResendVerificationMailAsync,
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

//https://examinator-backend-dev.onrender.com/api/mailer/resend-verification-mail
router.post("/send-mail", SendMailAsync);
router.post("/resend-verification-mail", ResendVerificationMailAsync);
router.post("/send-verification-mail", SendConfirmationMailAsync);
router.post("/reset-password", SendResetPasswordMailAsync);
router.post("/send-exam-results", SendExamResultsMailAsync);
router.post(
  "/send-exam-link",

  SendExamLinkMailAsync
);

export { router as MailerRouter };
