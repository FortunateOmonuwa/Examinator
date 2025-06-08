import { calculateScore } from "../../imports/IntegrationImports.js";
import Response from "../../utilities/Response.js";

const CalculateScoreAsync = async (req, res) => {
  const { body } = req;
  const { question, answer, maxScore } = body;

  // Input validation
  if (!question || typeof question !== "string") {
    return res.status(400).json({
      response: Response.Unsuccessful({
        message: "Question is required and must be a string",
        resultCode: 400,
      }),
    });
  }

  if (answer === undefined || answer === null) {
    return res.status(400).json({
      response: Response.Unsuccessful({
        message: "Answer is required",
        resultCode: 400,
      }),
    });
  }

  if (!maxScore || typeof maxScore !== "number" || maxScore <= 0) {
    return res.status(400).json({
      response: Response.Unsuccessful({
        message: "MaxScore is required and must be a positive number",
        resultCode: 400,
      }),
    });
  }

  // Handle empty answer case
  if (!answer || (typeof answer === "string" && answer.trim() === "")) {
    return res.status(200).json({
      response: Response.Successful({
        message: "Score calculated successfully",
        body: { score: 0 },
      }),
    });
  }

  try {
    const score = await calculateScore({
      question: question.trim(),
      answer: typeof answer === "string" ? answer.trim() : answer,
      maxScore: maxScore,
    });

    // Ensure score is within valid range
    const validatedScore = Math.max(0, Math.min(score, maxScore));

    return res.status(200).json({
      response: Response.Successful({
        message: "Score calculated successfully",
        body: { score: validatedScore },
      }),
    });
  } catch (error) {
    // console.error("Error calculating score:", error);
    return res.status(500).json({
      response: Response.Unsuccessful({
        message: "Failed to calculate score",
        resultCode: 500,
      }),
    });
  }
};

export { CalculateScoreAsync };
