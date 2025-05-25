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
    if (
      !q.text ||
      (q.type !== "text" &&
        q.type !== "singlechoice" &&
        q.type !== "multichoice")
    ) {
      return Response.Unsuccessful({
        message: "Invalid question data",
        resultCode: 400,
      });
    }

    if (q.type === "text") {
      q.options = [];
    }
    if (q.type === "singlechoice" || q.type === "multichoice") {
      if (!Array.isArray(q.options) || q.options.length < 2) {
        return Response.Unsuccessful({
          message: "Each question must have at least two options",
          resultCode: 400,
        });
      }

      let hasCorrectOption = false;
      for (const opt of q.options) {
        if (opt.isCorrect) {
          hasCorrectOption = true;
          break;
        }
      }

      if (!hasCorrectOption) {
        return Response.Unsuccessful({
          message: "Each question must have a correct answer",
          resultCode: 400,
        });
      }
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
            type: q.type.toUpperCase(),
            expectedAnswer: q.expectedAnswer,
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

const GetAllExams = async (examinerId) => {
  try {
    const exams = await database.Exam.findMany({
      where: {
        creatorId: examinerId,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    if (exams) {
      return Response.Successful({
        message: "Exams retrieved successfully",
        body: exams,
      });
    }

    return Response.Unsuccessful({
      message: "Failed to retrieve exams",
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

export { CreateExam, DeleteExam, GetExamByID, GetAllExams };
