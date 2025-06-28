import { api } from "./api";

const SendVerficationToken = async (
  id = null,
  receiver = null,
  name = null
) => {
  try {
    const response = await api.post("/api/mailer/send-verification-mail", {
      id,
      receiver,
      name,
    });
    return response.data.response;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const ResendVerificationMail = async (email) => {
  try {
    const response = await api.post("/api/mailer/resend-verification-mail", {
      email: email,
    });
    return response.data.response;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export { SendVerficationToken, ResendVerificationMail };
