import { Login, RefreshAccessToken } from "../../imports/ServicesImports.js";
import Response from "../../utilities/Response.js";
const LoginAsync = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  try {
    const response = await Login({ email: email, password: password });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const RefreshAccessTokenAsync = async (req, res) => {
  const { body } = req;
  const { refreshToken } = body;

  try {
    const response = await RefreshAccessToken({ refreshToken: refreshToken });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};


export { LoginAsync, RefreshAccessTokenAsync };
