import { database, baseUrl } from "../../imports/UtilityImports.js";
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
    attemptLimit = 1,
    isPublic = false,
    level = "BEGINNER",
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
        attemptLimit,
        isPublic,
        level,
        questions: {
          create: questions.map((q) => ({
            text: q.text,
            required: q.required ?? false,
            type: q.type.toUpperCase(),
            expectedAnswer: q.expectedAnswer,
            score: q.score ?? 1,
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

    const examLink = `${baseUrl}/exam/${newExam.id}`;

    const updatedExam = await database.Exam.update({
      where: { id: newExam.id },
      data: { link: examLink },
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
    // console.error("Error deleting exam:", error);

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

const GetPublicExams = async (subject = null) => {
  try {
    const whereClause = {
      isPublic: true,
    };

    if (subject && subject.trim()) {
      whereClause.OR = [
        {
          subject: {
            contains: subject,
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: subject,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: subject,
            mode: "insensitive",
          },
        },
        {
          level: {
            contains: subject,
            mode: "insensitive",
          },
        },
      ];
    }

    const exams = await database.Exam.findMany({
      where: whereClause,
      include: {
        questions: {
          include: {
            options: true,
          },
        },
        creator: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        dateCreated: "desc",
      },
    });

    if (exams) {
      return Response.Successful({
        message: "Public exams retrieved successfully",
        body: exams,
      });
    }

    return Response.Unsuccessful({
      message: "Failed to retrieve public exams",
    });
  } catch (error) {
    // console.log("Error in GetPublicExams:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const CheckExamAttempts = async (examId, email) => {
  try {
    const exam = await database.Exam.findUnique({
      where: { id: examId },
      select: { attemptLimit: true, title: true },
    });

    if (!exam) {
      return Response.Unsuccessful({
        message: "Exam not found",
        resultCode: 404,
      });
    }

    const attemptCount = await database.ExamAttempt.count({
      where: {
        examId: examId,
        responderEmal: email,
      },
    });

    const canAttempt = attemptCount < exam.attemptLimit;

    return Response.Successful({
      message: "Exam attempt check completed",
      body: {
        canAttempt,
        attemptCount,
        attemptLimit: exam.attemptLimit,
        examTitle: exam.title,
      },
    });
  } catch (error) {
    // console.log("Error in CheckExamAttempts:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const UpdateExam = async (examId, examData) => {
  const {
    title,
    description,
    subject,
    stipulatedTime,
    enforceTimeLimit = false,
    isPublic = false,
    questions,
  } = examData;

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

  try {
    const existingExam = await database.Exam.findUnique({
      where: { id: examId },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    if (!existingExam) {
      return Response.Unsuccessful({
        message: "Exam not found",
        resultCode: 404,
      });
    }

    await database.Question.deleteMany({
      where: { examId: examId },
    });

    const updatedExam = await database.Exam.update({
      where: { id: examId },
      data: {
        title,
        description,
        subject,
        stipulatedTime,
        enforceTimeLimit,
        isPublic,
        questions: {
          create: questions.map((q) => ({
            text: q.text,
            required: q.required ?? false,
            type: q.type?.toUpperCase() || "SINGLECHOICE",
            expectedAnswer: q.expectedAnswer,
            score: q.score ?? 1,
            options: {
              create: q.options.map((opt) => ({
                text: opt.text,
                isCorrect: opt.isCorrect,
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    return Response.Successful({
      message: "Exam updated successfully",
      body: updatedExam,
    });
  } catch (error) {
    // console.error("Error updating exam:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const ToggleExamPublicStatus = async (examId, examinerId) => {
  try {
    const exam = await database.Exam.findUnique({
      where: { id: examId },
      select: { id: true, isPublic: true, creatorId: true, title: true },
    });

    if (!exam) {
      return Response.Unsuccessful({
        message: "Exam not found",
        resultCode: 404,
      });
    }

    if (exam.creatorId !== examinerId) {
      return Response.Unsuccessful({
        message: "You don't have permission to modify this exam",
        resultCode: 403,
      });
    }

    const updatedExam = await database.Exam.update({
      where: { id: examId },
      data: { isPublic: !exam.isPublic },
      select: { id: true, isPublic: true, title: true },
    });

    return Response.Successful({
      message: `Exam "${exam.title}" is now ${updatedExam.isPublic ? "public" : "private"}`,
      body: updatedExam,
    });
  } catch (error) {
    // console.log("Error in ToggleExamPublicStatus:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

export {
  CreateExam,
  DeleteExam,
  GetExamByID,
  GetAllExams,
  GetPublicExams,
  CheckExamAttempts,
  UpdateExam,
  ToggleExamPublicStatus,
};
