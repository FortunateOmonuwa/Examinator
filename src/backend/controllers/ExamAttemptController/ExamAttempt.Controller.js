import {
  CreateExamAttempt,
  GetExamAttempts,
  GetExamAttemptById,
} from "../../functionalities/ExamAttempt/ExamAttempt.Service.js";
import Response from "../../utilities/Response.js";

const CreateExamAttemptAsync = async (req, res) => {
  const { body } = req;

  try {
    const response = await CreateExamAttempt(body);

    if (response.isSuccessful) {
      return res.status(201).json({ response: response });
    } else {
      return res.status(response.resultCode || 400).json({ response: response });
    }
  } catch (error) {
    console.error("Error in CreateExamAttemptAsync:", error);
    return res.status(500).json({
      response: Response.Unsuccessful({
        message: "An internal server error occurred",
        resultCode: 500,
      }),
    });
  }
};

const GetExamAttemptsAsync = async (req, res) => {
  const { examId } = req.params;

  try {
    const response = await GetExamAttempts(examId);

    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode || 400).json({ response: response });
    }
  } catch (error) {
    console.error("Error in GetExamAttemptsAsync:", error);
    return res.status(500).json({
      response: Response.Unsuccessful({
        message: "An internal server error occurred",
        resultCode: 500,
      }),
    });
  }
};

const GetExamAttemptByIdAsync = async (req, res) => {
  const { attemptId } = req.params;

  try {
    const response = await GetExamAttemptById(attemptId);

    if (response.isSuccessful) {
      return res.status(200).json({ response: response });
    } else {
      return res.status(response.resultCode || 400).json({ response: response });
    }
  } catch (error) {
    console.error("Error in GetExamAttemptByIdAsync:", error);
    return res.status(500).json({
      response: Response.Unsuccessful({
        message: "An internal server error occurred",
        resultCode: 500,
      }),
    });
  }
};

export { CreateExamAttemptAsync, GetExamAttemptsAsync, GetExamAttemptByIdAsync };
