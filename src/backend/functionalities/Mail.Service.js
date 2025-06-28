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
import client from "../utilities/Redis.config.js";
import { GenerateOTP, database } from "../imports/UtilityImports.js";

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
      message: "Registeration mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message:
        "An internal server error occurred while sending the registeration mail",
      resultCode: 500,
    });
  }
};

const ResendVerificationMail = async ({ email }) => {
  try {
    console.log(`Attempting to resend verification mail to ${email}`);
    const user = await database.UserProfile.findUnique({
      where: { email: email.toUpperCase() },
      include: {
        examiner: true,
        student: true,
      },
    });
    if (!user) {
      return Response.Unsuccessful({
        message: "User not found",
        resultCode: 404,
      });
    }

    //console.log("User receiving resent verfication mail:", user);
    const cancellationToken = await GenerateOTP();
    await client.set(`Verify:${user.id}`, cancellationToken, "EX", 600, "NX");
    let userDetail = {
      id: user.id,
      receiver: user.email,
      name: user.examiner?.name ?? user.student?.name,
    };
    await client.set(`${user.id}`, JSON.stringify(userDetail), "EX", 600, "NX");

    const mail = ConfirmMail({
      id: user.id,
      receiver: user.email,
      name: user.examiner?.name ?? user.student?.name,
      confirmationToken: cancellationToken,
    });
    const { receiver, subject, html } = mail;
    await sendMail({ receiver, subject, body: html });
    console.log("Verification mail sent successfully");
    return Response.Successful({
      message: "Verification mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
      error: error,
    });
  }
};

const SendConfirmationMail = async ({ id, receiver, name }) => {
  // console.log("sending confirmation mail");
  // console.log("id:", id);
  // console.log("receiver:", receiver);
  // console.log("name:", name);
  try {
    const confirmationToken = await GenerateOTP();
    let user;
    if (id || receiver || name) {
      // console.log("setting cache on redis");
      await client.set(`Verify:${id}`, confirmationToken, "EX", 600, "NX");

      // console.log("cache set for token");
      user = {
        id,
        receiver,
        name,
      };
      await client.set(`${id}`, JSON.stringify(user), "EX", 600, "NX");
    }
    console.log("User to send confirmation mail to:", user);
    if (id === null || receiver === null || name === null) {
      const cachedResult = await client.get(id);
      console.log("CachedResult:", cachedResult);
      if (!cachedResult) {
        return Response.Unsuccessful({
          message: "Error retrieving user details to send verification mail",
          resultCode: 404,
        });
      }
      user = JSON.parse(cachedResult);
    }
    console.log("User from cache:", user);

    const mail = ConfirmMail({
      id: user.id,
      receiver: user.receiver,
      name: user.name,
      confirmationToken: confirmationToken,
    });
    //console.log("Mail:", mail);
    let { receiver: mailReceiver, subject, html } = mail;

    let mailReceipient = mailReceiver.toLowerCase();

    const mailRes = await sendMail({
      receiver: mailReceipient,
      subject,
      body: html,
    });
    console.log(mailRes);

    return Response.Successful({
      message: "Verification mail sent successfully",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
      error: error,
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
  ResendVerificationMail,
  SendConfirmationMail,
  SendResetPasswordMail,
  SendExamSubmissionMail,
  SendExamResultsMail,
  SendExamLinkMail,
};
