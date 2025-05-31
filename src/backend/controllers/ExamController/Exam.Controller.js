import {
  CreateExam,
  DeleteExam,
  GetExamByID,
  GetAllExams,
} from "../../imports/ServicesImports.js";
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

const DeleteExamAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await DeleteExam(id);
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

const GetExamAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await GetExamByID(id);
    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({ response: Response.Unsuccessful() });
  }
};

const GetAllExamsAsync = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await GetAllExams(id);

    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode).json({ response: response });
    }
  } catch (e) {
    return res.status(500).json({ response: Response.Unsuccessful() });
  }
};

export { CreateExamAsync, DeleteExamAsync, GetExamAsync, GetAllExamsAsync };
