const baseEmailTemplate = ({ name, bodyContent }) => `
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Examinator Platform</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          padding: 20px;
          color: #212529;
          margin: 0;
          line-height: 1.6;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          border: 1px solid #e9ecef;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ea339b;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #ea339b;
          margin-bottom: 10px;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          margin: 20px 0;
          color: #fff !important;
          background-color: #ea339b;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
        }
        .button:hover {
          background-color: #c5187a;
        }
        p {
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          font-size: 14px;
          color: #6c757d;
        }
        .contact-info {
          margin-top: 20px;
          font-size: 12px;
          color: #6c757d;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">Examinator Platform</div>
          <div style="color: #6c757d; font-size: 14px;">Professional Examination System</div>
        </div>

        <p>Hi there ${name === "" ? "" : name},</p>
        ${bodyContent}

        <div class="footer">
          <p>Best regards,<br><strong>The Examinator Team</strong></p>
          <div class="contact-info">
            <p>This is an automated message from Examinator Platform.<br>
            If you have any questions, please contact our support team.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

const ConfirmMail = ({ receiver, name, confirmationToken }) => {
  const subject = "Confirm Your Examinator Account";
  const confirmationLink = `${process.env.VITE_BASE_URL}/api/auth/confirm?token=${confirmationToken}`;
  const bodyContent = `
      <p>Thank you for registering with Examinator. Please confirm your account by clicking the button below:</p>
      <a class="button" href="${confirmationLink}">Confirm Your Account</a>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const ResetPasswordMail = ({ receiver, name, resetToken }) => {
  const subject = "Reset Your Examinator Password";
  const resetLink = `${process.env.VITE_BASE_URL}/api/auth/reset?token=${resetToken}`;
  const bodyContent = `
      <p>You have requested to reset your password. Please click the button below to continue:</p>
      <a class="button" href="${resetLink}">Reset Your Password</a>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const LoginMail = ({ receiver, name }) => {
  const subject = "Successful Login to Your Examinator Account";
  const bodyContent = `
      <p>We noticed a successful login to your Examinator account.</p>
      <p><strong>If this was you</strong>, no action is needed.</p>
      <p><strong>If you did not initiate this login</strong>, please reply to this email or contact support immediately.</p>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const RegisterMail = ({ receiver, name }) => {
  const subject = "Welcome to Examinator!";
  const bodyContent = `
      <p>Thank you for registering with Examinator. We're excited to have you on board!</p>
      <p>Explore your dashboard to create or take exams easily.</p>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const ExamLinkMail = ({ receiver, name, examName, link }) => {
  const subject = `You’ve been invited to take "${examName}"`;
  const bodyContent = `
      <p>You have been invited to take the exam "<strong>${examName}</strong>".</p>
      <a class="button" href="${link}">Take the Exam</a>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const ExamResultsMail = ({ receiver, name, examName, link }) => {
  const subject = `Your ${examName} Exam Results - Examinator Platform`;
  const bodyContent = `
      <p>Congratulations on completing the exam "<strong>${examName}</strong>"!</p>
      <p>Your exam results are now available for review. Click the button below to view your detailed results, including your score and answer breakdown.</p>
      <a class="button" href="${link}">View Your Results</a>
      <p style="margin-top: 20px; font-size: 14px; color: #666;">
        <strong>Note:</strong> This link will allow you to access your results anytime.
        Please save this email for your records.
      </p>
      <p style="font-size: 14px; color: #666;">
        If you have any questions about your results, please contact your examiner or our support team.
      </p>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

const ExamSubmissionMail = ({ receiver, name, examName }) => {
  const subject = "Exam Submission Confirmation";
  const bodyContent = `
      <p>Your submission for the exam "<strong>${examName}</strong>" has been received. Thank you for participating!</p>
    `;

  return {
    receiver: receiver,
    subject,
    html: baseEmailTemplate({ name, bodyContent }),
  };
};

export {
  ConfirmMail,
  ResetPasswordMail,
  LoginMail,
  RegisterMail,
  ExamLinkMail,
  ExamResultsMail,
  ExamSubmissionMail,
};
