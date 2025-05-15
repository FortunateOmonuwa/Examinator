import { CreateExam } from "../../imports/ServicesImports.js";
import Response from "../../utilities/Response.js";

const CreateExamAsync = async (req, res) => {
  const { body } = req;
  const { examinerId } = req.params;
  const { exam } = body;

  try {
    const response = await CreateExam({ examinerId, exam });
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

export { CreateExamAsync };
