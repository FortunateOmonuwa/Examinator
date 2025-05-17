import { database } from "../../imports/UtilityImports.js";
import { Exam, Question, Option } from "../../imports/ModelImports.js";
import Response from "../../utilities/Response.js";
import { checkExaminerId } from "../User/User.Service.js";

const CreateExam = async ({ examinerId, exam = {} }) => {
  const {
    title,
    description,
    subject,
    stipulatedTime,
    enforceTimeLimit = false,
    questions,
  } = exam;

  const checkId = await checkExaminerId(examinerId);
  if (!checkId) {
    return Response.Unsuccessful({
      message: "Profile does not exist",
    });
  }

  if (
    !title ||
    !description ||
    !Array.isArray(questions) ||
    questions.length === 0
  ) {
    return Response.Unsuccessful({
      message: "Missing required fields",
      resultCode: 400,
    });
  }
  for (const q of questions) {
    if (!q.text || !Array.isArray(q.options) || q.options.length === 0) {
      return Response.Unsuccessful({
        message: "Invalid question data",
        resultCode: 400,
      });
    }

    for (const opt of q.options) {
      if (!opt.text || typeof opt.isCorrect !== "boolean") {
        return Response.Unsuccessful({
          message: "Invalid option data",
          resultCode: 400,
        });
      }
    }
  }

  try {
    const newExam = await database.Exam.create({
      data: {
        title,
        description,
        subject,
        link: "",
        creatorId: examinerId,
        stipulatedTime,
        enforceTimeLimit,
        questions: {
          create: questions.map((q) => ({
            text: q.text,
            required: q.required ?? false,
            options: {
              create: q.options.map((opt) => ({
                text: opt.text,
                isCorrect: opt.isCorrect,
              })),
            },
          })),
        },
      },
    });

    return Response.Successful({
      message: "Exam created successfully",
      body: newExam,
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const DeleteExam = async (examId) => {
  if (!examId) {
    return Response.Unsuccessful({
      message: "Exam ID is required",
      resultCode: 400,
    });
  }

  try {
    const deletedExam = await database.Exam.delete({
      where: {
        id: examId,
      },
    });

    return Response.Successful({
      message: "Exam deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting exam:", error);

    if (error.code === "P2025") {
      return Response.Unsuccessful({
        message: "Exam not found",
        resultCode: 404,
      });
    }

    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const GetExamByID = async (examId) => {
  try {
    const exam = await database.Exam.findUnique({
      where: {
        id: examId,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    if (exam) {
      return Response.Successful({
        message: "Exam retrieved successfully",
        body: exam,
      });
    }

    return Response.Unsuccessful({
      message: "Failed to retrieve exam",
    });
  } catch (error) {
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};
export { CreateExam, DeleteExam, GetExamByID };
