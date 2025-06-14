import { sendMail } from "../../integrations/mailer.service.js";
import Response from "../../utilities/Response.js";
import {
  SendConfirmationMail,
  SendResetPasswordMail,
  SendExamResultsMail,
  SendExamLinkMail,
} from "../../imports/ServicesImports.js";

const SendMailAsync = async (req, res) => {
  const { body: requestBody } = req;
  const { receiver, subject, body, attachments = [] } = requestBody;

  try {
    const response = await sendMail({
      receiver: receiver,
      subject: subject,
      body: body,
      attachments: attachments,
    });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const SendConfirmationMailAsync = async (req, res) => {
  const { body: requestBody } = req;
  const { receiver, name, confirmationToken } = requestBody;

  try {
    const response = await SendConfirmationMail({
      receiver: receiver,
      name: name,
      confirmationToken: confirmationToken,
    });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const SendResetPasswordMailAsync = async (req, res) => {
  const { body: requestBody } = req;
  const { receiver, name, resetToken } = requestBody;

  try {
    const response = await SendResetPasswordMail({
      receiver: receiver,
      name: name,
      resetToken: resetToken,
    });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const SendExamResultsMailAsync = async (req, res) => {
  const { body: requestBody } = req;
  const { receiver, name, examName, link } = requestBody;

  try {
    const response = await SendExamResultsMail({
      receiver: receiver,
      name: name,
      examName: examName,
      link: link,
    });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const SendExamLinkMailAsync = async (req, res) => {
  const { body: requestBody } = req;
  const { receiver, recipients, name, examName, link } = requestBody;

  // Support both 'receiver' and 'recipients' for backward compatibility
  const emailRecipients = recipients || receiver;

  if (!emailRecipients) {
    return res.status(400).json({
      response: Response.Unsuccessful({
        message: "Recipients are required",
        resultCode: 400,
      }),
    });
  }

  if (!name || !examName || !link) {
    return res.status(400).json({
      response: Response.Unsuccessful({
        message: "Name, examName, and link are required",
        resultCode: 400,
      }),
    });
  }

  try {
    const response = await SendExamLinkMail({
      receiver: emailRecipients,
      name: name,
      examName: examName,
      link: link,
    });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful({
        message: "An internal server error occurred",
        resultCode: 500,
      }),
    });
  }
};

export {
  SendMailAsync,
  SendConfirmationMailAsync,
  SendResetPasswordMailAsync,
  SendExamResultsMailAsync,
  SendExamLinkMailAsync,
};
