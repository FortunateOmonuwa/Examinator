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
      const parsedResults = JSON.parse(storedResults);
      if (parsedResults.examId === examId) {
        setResults(parsedResults);
        console.log("Loaded results:", parsedResults);
      } else {
        navigate("/take-exam");
      }
    } else {
      navigate("/take-exam");
    }
  }, [examId, navigate]);

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

  const isAnswerCorrect = (question, questionIndex, userAnswer) => {
    console.log(`\n=== Checking Question ${questionIndex + 1} ===`);
    console.log("Question type:", question.type);
    console.log("User answer:", userAnswer, typeof userAnswer);
    console.log("Question options:", question.options);

    // Match the uppercase question types from ExamSession.jsx
    if (question.type === "SINGLECHOICE") {
      const correctOptionIndex = question.options.findIndex(
        (opt) => opt.isCorrect
      );
      console.log(
        "Correct option index:",
        correctOptionIndex,
        typeof correctOptionIndex
      );
      console.log(
        "Comparison:",
        userAnswer,
        "===",
        correctOptionIndex,
        "->",
        userAnswer === correctOptionIndex
      );
      console.log(
        "Loose comparison:",
        userAnswer,
        "==",
        correctOptionIndex,
        "->",
        userAnswer == correctOptionIndex
      );

      // Use loose equality to handle string vs number comparison
      const isCorrect = userAnswer == correctOptionIndex;
      console.log("Final result:", isCorrect ? "✓ CORRECT" : "✗ INCORRECT");
      return isCorrect;
    } else if (question.type === "MULTICHOICE") {
      const correctOptionIndices = question.options
        .map((opt, idx) => (opt.isCorrect ? idx : -1))
        .filter((idx) => idx !== -1);

      console.log("Correct option indices:", correctOptionIndices);

      const userAnswerArray = userAnswer || [];
      console.log("User answer array:", userAnswerArray);

      // Convert user answers to numbers for comparison
      const userAnswerNumbers = userAnswerArray.map((ans) => Number(ans));
      const isCorrect =
        correctOptionIndices.length === userAnswerNumbers.length &&
        correctOptionIndices.every((idx) => userAnswerNumbers.includes(idx));

      console.log("Final result:", isCorrect ? "✓ CORRECT" : "✗ INCORRECT");
      return isCorrect;
    } else if (question.type === "TEXT") {
      // For text questions, we'll show as correct if they provided an answer
      // In a real implementation, this would need manual grading
      const isCorrect = userAnswer && userAnswer.trim();
      console.log("Final result:", isCorrect ? "✓ CORRECT" : "✗ INCORRECT");
      return isCorrect;
    }

    console.log("Unknown question type, returning false");
    return false;
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
      return "Text answer (manual grading required)";
    } else if (question.type === "SINGLECHOICE") {
      const correctOption = question.options.find((opt) => opt.isCorrect);
      return correctOption?.text || "No correct answer defined";
    } else if (question.type === "MULTICHOICE") {
      const correctOptions = question.options.filter((opt) => opt.isCorrect);
      return correctOptions.map((opt) => opt.text).join(", ");
    }
    return "No correct answer defined";
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);

    // Scroll to answers section when showing
    if (!showAnswers) {
      setTimeout(() => {
        answersRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      // Scroll back to top when hiding
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
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
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
            onClick={() => navigate("/")}
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
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
            className="mt-6 inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            {showAnswers ? (
              <EyeOff className="h-5 w-5 mr-2" />
            ) : (
              <Eye className="h-5 w-5 mr-2" />
            )}
            {showAnswers ? "Hide Answers" : "View Answers"}
          </button>
        </div>

        {/* Debug Information */}
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
        </div>

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

                return (
                  <div
                    key={questionIndex}
                    className={`border rounded-lg p-6 ${
                      isCorrect
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Question {questionIndex + 1}
                      </h4>
                      <div className="flex items-center">
                        {isCorrect ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600" />
                        )}
                        <span
                          className={`ml-2 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
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
                            isCorrect
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {getUserAnswerText(question, userAnswer)}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Correct Answer:
                        </h5>
                        <p className="p-3 bg-green-100 text-green-800 rounded-md">
                          {getCorrectAnswerText(question)}
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
