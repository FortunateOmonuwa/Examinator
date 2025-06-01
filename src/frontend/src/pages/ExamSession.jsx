"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Clock, AlertCircle, CheckCircle, Send } from "lucide-react";
import { api, examAttemptService } from "../services/api";
import toast from "react-hot-toast";
import "../styles/exam-session.scss";

const ExamSession = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [examStartTime, setExamStartTime] = useState(null);
  const timerRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (!email) {
      toast.error("Email is required to take the exam");
      navigate("/take-exam");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      navigate("/take-exam");
      return;
    }

    const fetchExam = async () => {
      try {
        const response = await api.get(`/api/exam/${examId}`);
        if (
          response.data.response.isSuccessful &&
          response.data.response.body
        ) {
          const examData = response.data.response.body;
          setExam(examData);
          setExamStartTime(new Date());

          if (examData.enforceTimeLimit && examData.stipulatedTime) {
            setTimeRemaining(examData.stipulatedTime * 60);
          }
        } else {
          toast.error("Exam not found or is not available");
          navigate("/take-exam");
        }
      } catch (error) {
        console.error("Error fetching exam:", error);
        toast.error("Failed to load exam");
        navigate("/take-exam");
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examId, email, navigate]);

  // Timer effect
  useEffect(() => {
    if (timeRemaining !== null && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up - auto submit
            handleSubmitExam(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const calculateScore = (examQuestions, userAnswers) => {
    let correctAnswers = 0;
    const totalQuestions = examQuestions.length;

    examQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];

      if (question.type === "SINGLECHOICE") {
        const correctOptionIndex = question.options.findIndex(
          (opt) => opt.isCorrect
        );
        // Convert userAnswer to number for proper comparison
        const userAnswerNum = Number(userAnswer);
        // console.log(
        //   `Question ${index + 1}: User answer: ${userAnswer} (${typeof userAnswer}), Correct index: ${correctOptionIndex}, Match: ${userAnswerNum === correctOptionIndex}`
        // );

        if (userAnswerNum === correctOptionIndex) {
          correctAnswers++;
        }
      } else if (question.type === "MULTICHOICE") {
        const correctOptionIndices = question.options
          .map((opt, idx) => (opt.isCorrect ? idx : -1))
          .filter((idx) => idx !== -1);

        const userAnswerArray = userAnswer || [];
        const userAnswerNumbers = userAnswerArray.map((ans) => Number(ans));

        if (
          correctOptionIndices.length === userAnswerNumbers.length &&
          correctOptionIndices.every((idx) => userAnswerNumbers.includes(idx))
        ) {
          correctAnswers++;
        }
      } else if (question.type === "TEXT") {
        if (userAnswer && userAnswer.trim()) {
          correctAnswers++;
        }
      }
    });

    return {
      correctAnswers,
      totalQuestions,
      score: Math.round((correctAnswers / totalQuestions) * 100),
    };
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();

      e.returnValue = "Your exam will be automatically submitted.";
    };

    const handlePopState = async () => {
      await handleSubmitExam(true);
      window.location.href = `/exam/result/${examId}`;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleSubmitExam = async (isAutoSubmit = false) => {
    if (isSubmitting) return;

    if (!isAutoSubmit) {
      const unansweredQuestions = exam.questions.filter(
        (_, index) =>
          answers[index] === undefined ||
          answers[index] === null ||
          answers[index] === ""
      );

      if (unansweredQuestions.length > 0) {
        const confirmSubmit = window.confirm(
          `You have ${unansweredQuestions.length} unanswered questions. Are you sure you want to submit?`
        );
        if (!confirmSubmit) return;
      }
    }

    setIsSubmitting(true);

    try {
      // Calculate results
      const results = calculateScore(exam.questions, answers);

      // Prepare exam attempt data for backend
      const examAttemptData = {
        examId: exam.id,
        responderEmail: email,
        responderName: email.split("@")[0],
        startTime: examStartTime,
        submittedAt: new Date(),
        answers: exam.questions.map((question, index) => {
          const userAnswer = answers[index];

          // Format answer based on question type
          if (question.type === "SINGLECHOICE") {
            return {
              questionId: question.id,
              answer: userAnswer ? userAnswer.toString() : "",
              questionType: question.type,
            };
          } else if (question.type === "MULTICHOICE") {
            return {
              questionId: question.id,
              answer: Array.isArray(userAnswer) ? userAnswer : [],
              questionType: question.type,
            };
          } else if (question.type === "TEXT") {
            return {
              questionId: question.id,
              answer: userAnswer || "",
              questionType: question.type,
            };
          }

          return {
            questionId: question.id,
            answer: userAnswer || "",
            questionType: question.type,
          };
        }),
        totalScore: results.score,
      };

      // Submit to backend
      try {
        const response =
          await examAttemptService.submitExamAttempt(examAttemptData);
        if (response.response && response.response.isSuccessful) {
          toast.success("Exam submitted successfully!");
        } else {
          throw new Error(
            response.response?.message || "Failed to submit exam"
          );
        }
      } catch (error) {
        console.error("Error submitting to backend:", error);
        toast.error(
          "Failed to save exam attempt, but results are still available"
        );
      }

      // Store results in localStorage for immediate display
      const examResults = {
        examId: exam.id,
        examTitle: exam.title,
        studentEmail: email,
        submittedAt: new Date().toISOString(),
        answers: answers,
        questions: exam.questions,
        ...results,
      };

      localStorage.setItem("examResults", JSON.stringify(examResults));

      // Navigate to results page
      navigate(`/exam-results/${exam.id}`);
    } catch (error) {
      console.error("Error submitting exam:", error);
      toast.error("Failed to submit exam. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading exam...</p>
        </div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Exam not found
          </h2>
          <button
            onClick={() => navigate("/take-exam")}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Back to Exam Search
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / exam.questions.length) * 100;

  return (
    <div className="exam-session-container min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{exam.title}</h1>
              <p className="text-sm text-gray-600">Student: {email}</p>
            </div>

            {timeRemaining !== null && (
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  timeRemaining < 300
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                <Clock className="h-5 w-5" />
                <span className="font-mono text-lg">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Question {currentQuestionIndex + 1} of {exam.questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
              <h3 className="font-medium text-gray-900 mb-4">Questions</h3>
              <div className="grid grid-cols-5 lg:grid-cols-3 gap-2">
                {exam.questions.map((_, index) => {
                  const isAnswered =
                    answers[index] !== undefined &&
                    answers[index] !== null &&
                    answers[index] !== "";
                  const isCurrent = index === currentQuestionIndex;

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        isCurrent
                          ? "bg-purple-600 text-white"
                          : isAnswered
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <div className="w-3 h-3 bg-green-100 rounded"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <div className="w-3 h-3 bg-gray-100 rounded"></div>
                  <span>Not answered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-3 h-3 bg-purple-600 rounded"></div>
                  <span>Current</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    Question {currentQuestionIndex + 1}
                  </h2>
                  {currentQuestion.required && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>

              {/* Answer Options */}
              <div className="mb-8">
                {currentQuestion.type === "SINGLECHOICE" && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={optionIndex}
                          checked={answers[currentQuestionIndex] == optionIndex}
                          onChange={(e) =>
                            handleAnswerChange(
                              currentQuestionIndex,
                              e.target.value
                            )
                          }
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <span className="ml-3 text-gray-700">
                          {String.fromCharCode(65 + optionIndex)}. {option.text}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "MULTICHOICE" && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={optionIndex}
                          checked={(
                            answers[currentQuestionIndex] || []
                          ).includes(optionIndex.toString())}
                          onChange={(e) => {
                            const currentAnswers =
                              answers[currentQuestionIndex] || [];
                            const value = e.target.value;

                            if (e.target.checked) {
                              handleAnswerChange(currentQuestionIndex, [
                                ...currentAnswers,
                                value,
                              ]);
                            } else {
                              handleAnswerChange(
                                currentQuestionIndex,
                                currentAnswers.filter((ans) => ans !== value)
                              );
                            }
                          }}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-gray-700">
                          {String.fromCharCode(65 + optionIndex)}. {option.text}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "TEXT" && (
                  <textarea
                    value={answers[currentQuestionIndex] || ""}
                    onChange={(e) =>
                      handleAnswerChange(currentQuestionIndex, e.target.value)
                    }
                    placeholder="Type your answer here..."
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex space-x-3">
                  {currentQuestionIndex < exam.questions.length - 1 ? (
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmitExam(false)}
                      disabled={isSubmitting}
                      className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Exam
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button (always visible) */}
            <div className="mt-6 text-center">
              <button
                onClick={() => handleSubmitExam(false)}
                disabled={isSubmitting}
                className="flex items-center justify-center mx-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Submitting Exam...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Exam
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                You can submit your exam at any time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSession;
