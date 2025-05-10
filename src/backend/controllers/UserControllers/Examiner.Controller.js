import {
  RegisterExaminer,
  GetExaminerDetails,
} from "../../imports/ServicesImports.js";
import Response from "../../utilities/Response.js";

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
      return res.status(400).json({ response: response });
    }
  } catch (e) {
    return Response.Unsuccessful({
      error: e.message,
      resultCode: 500,
    });
  }
};

const GetExaminerAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await GetExaminerDetails(Number(id));
    if (response.isSuccessful) {
      return res.status(response.resultCode).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return Response.Unsuccessful({
      error: e.message,
      resultCode: 500,
    });
  }
};
export { RegisterExaminerAsync, GetExaminerAsync };
