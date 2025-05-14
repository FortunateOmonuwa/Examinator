import {
  RegisterExaminer,
  GetExaminerDetails,
  DeleteExaminer,
} from '../../imports/ServicesImports.js';
import Response from '../../utilities/Response.js';

const RegisterExaminerAsync = async (req, res) => {
  const { body } = req;
  const { firstname, lastname, email, password } = body;

  try {
    const response = await RegisterExaminer({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });

    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res
        .status(response.resultCode || 400)
        .json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const GetExaminerAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await GetExaminerDetails(id);
    if (response.isSuccessful) {
      return res.status(response.resultCode).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

const DeleteExaminerAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await DeleteExaminer(id);
    if (response.isSuccessful) {
      return res.status(response.resultCode).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({
      response: Response.Unsuccessful(),
    });
  }
};

export { RegisterExaminerAsync, GetExaminerAsync, DeleteExaminerAsync };
