import { RegisterAdmin } from '../../imports/ServicesImports.js';
import Response from '../../utilities/Response.js';

const RegisterAdminAsync = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  try {
    const response = await RegisterAdmin({ email: email, password: password });
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return Response.Unsuccessful({
      error: e.message,
      resultCode: 500,
    });
  }
};

export { RegisterAdminAsync };
