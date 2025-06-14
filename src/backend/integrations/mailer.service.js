import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import dotenv from "dotenv";
import path from "path";
import Response from "../utilities/Response.js";

//dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);

const sendMail = async ({ receiver, subject, body, attachments }) => {
  try {
    if (!receiver || !subject || !body) {
      throw new Error(
        "Missing required email fields: receiver, subject, or body"
      );
    }
    // console.log("Sending email to:", receiver);
    // console.log("Subject:", subject);
    // console.log("Body:", body);

    const info = await transporter.sendMail({
      from: {
        name: "Examinator",
        from: process.env.SENDGRID_FROM_EMAIL || "noreply.examinator@gmail.com",
      },
      to: receiver,
      subject,
      html: body,
      ...(attachments ? { attachments } : {}),
    });

    //console.log("Transporter response:", info);
    return Response.Successful({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.body || error.message || error
    );
    throw error;
  }
};

export { sendMail };
//export { transporter };
