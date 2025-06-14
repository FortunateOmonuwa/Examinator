import { sendMail } from "../integrations/mailer.service.js";
import Response from "../utilities/Response.js";
import {
  LoginMail,
  RegisterMail,
  ConfirmMail,
  ResetPasswordMail,
  ExamSubmissionMail,
  ExamResultsMail,
  ExamLinkMail,
} from "../utilities/Mail-Notifications.js";

const SendLoginMail = async ({ to, name }) => {
  try {
    const mail = LoginMail({ receiver: to, name });

    const { receiver, subject, html } = mail;
    await sendMail({ receiver, subject, body: html });

    return Response.Successful({
      message: "Login mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred while sending the login mail",
      resultCode: 500,
    });
  }
};

const SendRegisterMail = async ({ to, name }) => {
  try {
    const mail = RegisterMail({ to, name });
    const { receiver, subject, html } = mail;
    await sendMail({ receiver, subject, body: html });

    return Response.Successful({
      message: "Register mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message:
        "An internal server error occurred while sending the registeration mail",
      resultCode: 500,
    });
  }
};

const SendConfirmationMail = async ({ receiver, name, confirmationToken }) => {
  try {
    const mail = ConfirmMail({ receiver, name, confirmationToken });
    const { receiver: mailReceiver, subject, html } = mail;
    await sendMail({
      receiver: mailReceiver,
      subject,
      body: html,
    });

    return Response.Successful({
      message: "Confirm mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  }
};

const SendResetPasswordMail = async ({ receiver, name, resetToken }) => {
  try {
    const mail = ResetPasswordMail({ receiver, name, resetToken });
    const { receiver: mailReceiver, subject, html } = mail;
    await sendMail({ receiver: mailReceiver, subject, body: html });

    return Response.Successful({
      message: "Reset password mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  }
};

const SendExamSubmissionMail = async ({ to, name, examName }) => {
  try {
    const mail = ExamSubmissionMail({ to, name, examName });
    const { receiver, subject, html } = mail;
    const response = await sendMail({ receiver, subject, body: html });

    return Response.Successful({
      message: "Exam submission mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  }
};

const SendExamResultsMail = async ({ receiver, name, examName, link }) => {
  try {
    const mail = ExamResultsMail({ receiver, name, examName, link });
    const { receiver: mailReceiver, subject, html } = mail;
    await sendMail({ receiver: mailReceiver, subject, body: html });

    return Response.Successful({
      message: "Exam results mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  }
};

const SendExamLinkMail = async ({ receiver, name, examName, link }) => {
  try {
    const recipients = Array.isArray(receiver) ? receiver : [receiver];

    if (!recipients || recipients.length === 0) {
      return Response.Unsuccessful({
        message: "Failed to send exam link mail. No recipient provided",
        resultCode: 500,
      });
    }

    for (const recipientEmail of recipients) {
      if (!recipientEmail || typeof recipientEmail !== "string") {
        continue;
      }

      const mail = ExamLinkMail({
        receiver: recipientEmail,
        name,
        examName,
        link,
      });

      const { receiver, subject, html } = mail;
      await sendMail({ receiver, subject, body: html });
    }

    return Response.Successful({
      message: "Exam link mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  }
};

export {
  SendLoginMail,
  SendRegisterMail,
  SendConfirmationMail,
  SendResetPasswordMail,
  SendExamSubmissionMail,
  SendExamResultsMail,
  SendExamLinkMail,
};
