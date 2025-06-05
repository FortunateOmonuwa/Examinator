import { database } from "../../imports/UtilityImports.js";
import Response from "../../utilities/Response.js";

const CreateExamAttempt = async (examAttemptData) => {
  const {
    examId,
    responderEmail,
    responderName,
    startTime,
    submittedAt,
    answers,
    totalScore,
  } = examAttemptData;

  if (!examId || !responderEmail || !answers || !Array.isArray(answers)) {
    return Response.Unsuccessful({
      message:
        "Missing required fields: examId, responderEmail, and answers are required",
      resultCode: 400,
    });
  }

  try {
    const exam = await database.Exam.findUnique({
      where: { id: examId },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    if (!exam) {
      return Response.Unsuccessful({
        message: "Exam not found",
        resultCode: 404,
      });
    }

    const examAttempt = await database.ExamAttempt.create({
      data: {
        examId,
        responderEmal: responderEmail, // i know this is a typo ...but i'm leaving it to match the existing database
        responderName,
        startTime: startTime ? new Date(startTime) : null,
        submittedAt: submittedAt ? new Date(submittedAt) : new Date(),
        totalScore,
        answers: {
          create: answers.map((answer) => {
            const answerData = {
              questionId: answer.questionId,
              textAnswer: [],
              options: { connect: [] },
            };

            if (answer.questionType === "SINGLECHOICE") {
              if (answer.answer !== undefined && answer.answer !== null) {
                const question = exam.questions.find(
                  (q) => q.id === answer.questionId
                );
                if (question && question.options[Number(answer.answer)]) {
                  answerData.options.connect.push({
                    id: question.options[Number(answer.answer)].id,
                  });
                }
              }
            } else if (answer.questionType === "MULTICHOICE") {
              if (Array.isArray(answer.answer)) {
                const question = exam.questions.find(
                  (q) => q.id === answer.questionId
                );
                if (question) {
                  answer.answer.forEach((optionIndex) => {
                    if (question.options[Number(optionIndex)]) {
                      answerData.options.connect.push({
                        id: question.options[Number(optionIndex)].id,
                      });
                    }
                  });
                }
              }
            } else if (answer.questionType === "TEXT") {
              if (answer.answer) {
                answerData.textAnswer = [answer.answer.toString()];
              }
            }

            return answerData;
          }),
        },
      },
      include: {
        answers: {
          include: {
            options: true,
            question: true,
          },
        },
        exam: {
          select: {
            title: true,
            description: true,
          },
        },
      },
    });

    return Response.Successful({
      message: "Exam attempt saved successfully",
      body: examAttempt,
    });
  } catch (error) {
    console.error("Error creating exam attempt:", error);
    return Response.Unsuccessful({
      message: "An internal server error occurred while saving exam attempt",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const GetExamAttempts = async (examId) => {
  try {
    const examAttempts = await database.ExamAttempt.findMany({
      where: {
        examId,
      },
      include: {
        answers: {
          include: {
            options: true,
            question: true,
          },
        },
      },
      orderBy: {
        submittedAt: "desc",
      },
    });

    return Response.Successful({
      message: "Exam attempts retrieved successfully",
      body: examAttempts,
    });
  } catch (error) {
    console.error("Error retrieving exam attempts:", error);
    return Response.Unsuccessful({
      message:
        "An internal server error occurred while retrieving exam attempts",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const GetExamAttemptById = async (attemptId) => {
  try {
    const examAttempt = await database.ExamAttempt.findUnique({
      where: {
        id: attemptId,
      },
      include: {
        answers: {
          include: {
            options: true,
            question: true,
          },
        },
        exam: {
          include: {
            questions: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });

    if (!examAttempt) {
      return Response.Unsuccessful({
        message: "Exam attempt not found",
        resultCode: 404,
      });
    }

    return Response.Successful({
      message: "Exam attempt retrieved successfully",
      body: examAttempt,
    });
  } catch (error) {
    console.error("Error retrieving exam attempt:", error);
    return Response.Unsuccessful({
      message:
        "An internal server error occurred while retrieving exam attempt",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

const GetAllExaminerAttempts = async (examinerId) => {
  try {
    const examAttempts = await database.ExamAttempt.findMany({
      where: {
        exam: {
          creatorId: examinerId,
        },
      },
      include: {
        exam: {
          select: {
            id: true,
            title: true,
            subject: true,
          },
        },
        answers: {
          include: {
            options: true,
            question: true,
          },
        },
      },
      orderBy: {
        submittedAt: "desc",
      },
    });

    return Response.Successful({
      message: "All examiner attempts retrieved successfully",
      body: examAttempts,
    });
  } catch (error) {
    // console.error("Error retrieving examiner attempts:", error);
    return Response.Unsuccessful({
      message:
        "An internal server error occurred while retrieving examiner attempts",
      resultCode: 500,
    });
  } finally {
    await database.$disconnect();
  }
};

export {
  CreateExamAttempt,
  GetExamAttempts,
  GetExamAttemptById,
  GetAllExaminerAttempts,
};
