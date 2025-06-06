"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Eye, EyeOff, Home } from "lucide-react";
import "../styles/exam-results.scss";

const ExamResults = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const answersRef = useRef(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("examResults");
    if (storedResults) {
      try {
        const parsedResults = JSON.parse(storedResults);
        if (parsedResults.examId === examId) {
          setResults(parsedResults);
          //console.log("Loaded results:", parsedResults);
        } else {
          navigate("/take-exam");
        }
      } catch (error) {
        // Invalid stored results, clear them
        localStorage.removeItem("examResults");
        navigate("/take-exam");
      }
    } else {
      navigate("/take-exam");
    }
  }, [examId, navigate]);

  // Prevent navigation back to exam session after submission
  useEffect(() => {
    // Disable browser back button completely
    const disableBackButton = () => {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
        toast.error(
          "Navigation blocked. Use the Home button to return to homepage."
        );
      };
    };

    const handleBeforeUnload = () => {
      // Clear exam results when leaving the results page
      localStorage.removeItem("examResults");
    };

    const handleKeyDown = (e) => {
      // Prevent Alt+Left Arrow (back) and other navigation shortcuts
      if (
        (e.altKey && e.key === "ArrowLeft") ||
        (e.key === "Backspace" &&
          !["INPUT", "TEXTAREA"].includes(e.target.tagName))
      ) {
        e.preventDefault();
        toast.error(
          "Navigation blocked. Use the Home button to return to homepage."
        );
      }
    };

    // Disable back button immediately
    disableBackButton();

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("keydown", handleKeyDown);
      // Reset onpopstate when component unmounts
      window.onpopstate = null;
    };
  }, []);

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return "Excellent work!";
    if (score >= 80) return "Great job!";
    if (score >= 70) return "Good effort!";
    if (score >= 60) return "You passed!";
    return "Keep studying!";
  };

  const calculateQuestionScore = (question, questionIndex, userAnswer) => {
    const questionScore = question.score || 1;

    // If we have stored question scores from OpenAI, use them
    if (
      results.questionScores &&
      results.questionScores[questionIndex] !== undefined
    ) {
      const storedScore = results.questionScores[questionIndex];
      // Handle both old format (number) and new format (object with metadata)
      if (typeof storedScore === "object" && storedScore.score !== undefined) {
        return storedScore.score;
      }
      return storedScore;
    }

    if (question.type === "SINGLECHOICE") {
      const correctOptionIndex = question.options.findIndex(
        (opt) => opt.isCorrect
      );
      const userAnswerNum = Number(userAnswer);
      return userAnswerNum === correctOptionIndex ? questionScore : 0;
    } else if (question.type === "MULTICHOICE") {
      const correctOptionIndices = question.options
        .map((opt, idx) => (opt.isCorrect ? idx : -1))
        .filter((idx) => idx !== -1);

      const userAnswerArray = userAnswer || [];
      const userAnswerNumbers = userAnswerArray.map((ans) => Number(ans));

      // For multichoice, calculate partial scoring
      if (questionScore === 1) {
        // Default scoring: all correct or zero
        return correctOptionIndices.length === userAnswerNumbers.length &&
          correctOptionIndices.every((idx) => userAnswerNumbers.includes(idx))
          ? questionScore
          : 0;
      } else {
        // Custom scoring: partial credit based on correct vs wrong selections
        const correctSelections = userAnswerNumbers.filter((idx) =>
          correctOptionIndices.includes(idx)
        ).length;
        const wrongSelections = userAnswerNumbers.filter(
          (idx) => !correctOptionIndices.includes(idx)
        ).length;

        const partialScore = Math.max(0, correctSelections - wrongSelections);
        const maxCorrect = correctOptionIndices.length;

        return partialScore > 0
          ? Math.round((partialScore / maxCorrect) * questionScore)
          : 0;
      }
    } else if (question.type === "TEXT") {
      return userAnswer && userAnswer.trim() ? questionScore : 0;
    }

    return 0;
  };

  const isAnswerCorrect = (question, questionIndex, userAnswer) => {
    const score = calculateQuestionScore(question, questionIndex, userAnswer);
    const questionScore = question.score || 1;
    return score === questionScore;
  };

  const getUserAnswerText = (question, userAnswer) => {
    if (question.type === "TEXT") {
      return userAnswer || "No answer provided";
    } else if (question.type === "SINGLECHOICE") {
      if (userAnswer !== null && userAnswer !== undefined) {
        const answerIndex = Number(userAnswer);
        return question.options[answerIndex]?.text || "No answer selected";
      }
      return "No answer selected";
    } else if (question.type === "MULTICHOICE") {
      if (userAnswer && userAnswer.length > 0) {
        return userAnswer
          .map((idx) => question.options[Number(idx)]?.text)
          .join(", ");
      }
      return "No answers selected";
    }
    return "No answer provided";
  };

  const getCorrectAnswerText = (question) => {
    if (question.type === "TEXT") {
      return "Text answer (AI-graded)";
    } else if (question.type === "SINGLECHOICE") {
      const correctOption = question.options.find((opt) => opt.isCorrect);
      return correctOption?.text || "No correct answer defined";
    } else if (question.type === "MULTICHOICE") {
      const correctOptions = question.options.filter((opt) => opt.isCorrect);
      return correctOptions.map((opt) => opt.text).join(", ");
    }
    return "No correct answer defined";
  };

  // Get dynamic feedback for text questions based on score
  const getTextQuestionFeedback = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) return "Excellent";
    if (percentage >= 80) return "Very good";
    if (percentage >= 70) return "Very good";
    if (percentage >= 40) return "Satisfactory";
    return "Not quite";
  };

  // Get color class for text questions based on score
  const getTextQuestionColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) return "text-green-800"; // Dark green for excellent
    if (percentage >= 70) return "text-green-600"; // Light green for very good
    if (percentage >= 40) return "text-orange-600"; // Orange for satisfactory
    return "text-red-600"; // Red for not quite
  };

  // Get background color class for text questions based on score
  const getTextQuestionBgColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) return "bg-green-100"; // Dark green background
    if (percentage >= 70) return "bg-green-50"; // Light green background
    if (percentage >= 40) return "bg-orange-50"; // Orange background
    return "bg-red-50"; // Red background
  };

  // Get border color class for text questions based on score
  const getTextQuestionBorderColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) return "border-green-200"; // Dark green border
    if (percentage >= 70) return "border-green-200"; // Light green border
    if (percentage >= 40) return "border-orange-200"; // Orange border
    return "border-red-200"; // Red border
  };

  // Check if a question requires manual grading
  const requiresManualGrading = (questionIndex) => {
    if (
      results.questionScores &&
      results.questionScores[questionIndex] !== undefined
    ) {
      const storedScore = results.questionScores[questionIndex];
      return (
        typeof storedScore === "object" &&
        storedScore.requiresManualGrading === true
      );
    }
    return false;
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);

    if (!showAnswers) {
      setTimeout(() => {
        answersRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!results) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Results not found
          </h2>
          <button
            onClick={() => navigate("/take-exam")}
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink  -700"
          >
            Back to Exam Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-results-container">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => {
              localStorage.removeItem("examResults");
              // Reset onpopstate to allow normal navigation
              window.onpopstate = null;
              // Use window.location to ensure clean navigation
              window.location.href = "/";
            }}
            className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-4"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Exam Results
          </h1>
          <h2 className="text-xl text-gray-600">{results.examTitle}</h2>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
          <div className="mb-6">
            <div
              className={`text-6xl font-bold mb-2 ${getScoreColor(results.score)}`}
            >
              {results.score}%
            </div>
            <p className="text-xl text-gray-600 mb-2">
              {getScoreMessage(results.score)}
            </p>
            <p className="text-gray-500">
              You answered {results.correctAnswers} out of{" "}
              {results.totalQuestions} questions correctly
            </p>
            {results.totalScore !== undefined &&
              results.maxPossibleScore !== undefined && (
                <p className="text-gray-500 mt-1">
                  Total Score: {Math.round(results.totalScore)} /{" "}
                  {results.maxPossibleScore} points
                </p>
              )}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {results.totalQuestions}
                </div>
                <div className="text-sm text-gray-500">Total Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {results.correctAnswers}
                </div>
                <div className="text-sm text-gray-500">Correct Answers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {results.totalQuestions - results.correctAnswers}
                </div>
                <div className="text-sm text-gray-500">Incorrect Answers</div>
              </div>
            </div>
          </div>

          <button
            onClick={toggleAnswers}
            className="mt-6 inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            {showAnswers ? (
              <EyeOff className="h-5 w-5 mr-2" />
            ) : (
              <Eye className="h-5 w-5 mr-2" />
            )}
            {showAnswers ? "Hide Answers" : "View Answers"}
          </button>
        </div>

        {/* Debug Information
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-yellow-800 mb-2">
            Debug Information:
          </h4>
          <p className="text-sm text-yellow-700">
            Check the browser console for detailed answer comparison logs.
          </p>
          <details className="mt-2">
            <summary className="text-sm font-medium text-yellow-800 cursor-pointer">
              Raw Data
            </summary>
            <pre className="mt-2 text-xs bg-yellow-100 p-2 rounded overflow-auto">
              {JSON.stringify(
                {
                  answers: results.answers,
                  questions: results.questions.map((q) => ({
                    type: q.type,
                    options: q.options.map((opt, idx) => ({
                      idx,
                      text: opt.text,
                      isCorrect: opt.isCorrect,
                    })),
                  })),
                },
                null,
                2
              )}
            </pre>
          </details>
        </div> */}

        {/* Answers Section */}
        {showAnswers && (
          <div ref={answersRef} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Detailed Answers
            </h3>

            <div className="space-y-6">
              {results.questions.map((question, questionIndex) => {
                const userAnswer = results.answers[questionIndex];
                const isCorrect = isAnswerCorrect(
                  question,
                  questionIndex,
                  userAnswer
                );
                const questionScore = calculateQuestionScore(
                  question,
                  questionIndex,
                  userAnswer
                );
                const maxQuestionScore = question.score || 1;

                // Dynamic styling for text questions
                const isTextQuestion = question.type === "TEXT";
                const needsManualGrading = requiresManualGrading(questionIndex);

                const borderColor = isTextQuestion
                  ? needsManualGrading
                    ? "border-blue-200"
                    : getTextQuestionBorderColor(
                        questionScore,
                        maxQuestionScore
                      )
                  : isCorrect
                    ? "border-green-200"
                    : "border-red-200";
                const bgColor = isTextQuestion
                  ? needsManualGrading
                    ? "bg-blue-50"
                    : getTextQuestionBgColor(questionScore, maxQuestionScore)
                  : isCorrect
                    ? "bg-green-50"
                    : "bg-red-50";

                return (
                  <div
                    key={questionIndex}
                    className={`border rounded-lg p-6 ${borderColor} ${bgColor}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Question {questionIndex + 1}
                      </h4>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {Math.round(questionScore)} / {maxQuestionScore} pts
                          </div>
                          <div className="text-xs text-gray-500">
                            {Math.round(
                              (questionScore / maxQuestionScore) * 100
                            )}
                            %
                          </div>
                        </div>
                        <div className="flex items-center">
                          {isCorrect ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-600" />
                          )}
                          <span
                            className={`ml-2 font-medium ${
                              isTextQuestion
                                ? needsManualGrading
                                  ? "text-blue-600"
                                  : getTextQuestionColor(
                                      questionScore,
                                      maxQuestionScore
                                    )
                                : isCorrect
                                  ? "text-green-600"
                                  : "text-red-600"
                            }`}
                          >
                            {isTextQuestion
                              ? needsManualGrading
                                ? "Manual Grading Required"
                                : getTextQuestionFeedback(
                                    questionScore,
                                    maxQuestionScore
                                  )
                              : isCorrect
                                ? "Correct"
                                : questionScore > 0
                                  ? "Partial"
                                  : "Incorrect"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{question.text}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Your Answer:
                        </h5>
                        <p
                          className={`p-3 rounded-md ${
                            isTextQuestion
                              ? needsManualGrading
                                ? "bg-blue-100 text-blue-800"
                                : `${getTextQuestionBgColor(questionScore, maxQuestionScore)} ${getTextQuestionColor(questionScore, maxQuestionScore)}`
                              : isCorrect
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {getUserAnswerText(question, userAnswer)}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          {isTextQuestion ? "AI Feedback:" : "Correct Answer:"}
                        </h5>
                        <p className="p-3 bg-blue-100 text-blue-800 rounded-md">
                          {isTextQuestion
                            ? needsManualGrading
                              ? "Text answer (manual grading required)"
                              : `Score: ${Math.round(questionScore)}/${maxQuestionScore} - ${getTextQuestionFeedback(questionScore, maxQuestionScore)}`
                            : getCorrectAnswerText(question)}
                        </p>
                      </div>
                    </div>

                    {question.type !== "TEXT" && (
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-900 mb-2">
                          All Options:
                        </h5>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded-md flex items-center ${
                                option.isCorrect
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              <span className="font-medium mr-2">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              <span>{option.text}</span>
                              {option.isCorrect && (
                                <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>
            Exam completed on {new Date(results.submittedAt).toLocaleString()}
          </p>
          <p>Results sent to: {results.studentEmail}</p>
        </div>
      </div>
    </div>
  );
};
export default ExamResults;
