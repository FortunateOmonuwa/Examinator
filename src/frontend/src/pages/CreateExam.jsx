"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import toast from "react-hot-toast";
import "../styles/exam-form.scss";

const CreateExam = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [stipulatedTime, setStipulatedTime] = useState(60);
  const [enforceTimeLimit, setEnforceTimeLimit] = useState(false);
  const [attemptLimit, setAttemptLimit] = useState(1);
  const [isPublic, setIsPublic] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: "1",
      text: "",
      required: true,
      type: "singlechoice",
      expectedAnswer: "",
      options: [
        { id: "1-1", text: "", isCorrect: false },
        { id: "1-2", text: "", isCorrect: false },
      ],
    },
  ]);

  const addQuestion = () => {
    const newId = String(questions.length + 1);
    setQuestions([
      ...questions,
      {
        id: newId,
        text: "",
        required: true,
        type: "singlechoice",
        expectedAnswer: "",
        options: [
          { id: `${newId}-1`, text: "", isCorrect: false },
          { id: `${newId}-2`, text: "", isCorrect: false },
        ],
      },
    ]);
  };

  const removeQuestion = (questionId) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((q) => q.id !== questionId));
    } else {
      toast.error("You must have at least one question");
    }
  };

  const updateQuestionText = (questionId, text) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, text } : q))
    );
  };

  const updateQuestionRequired = (questionId, required) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, required } : q))
    );
  };

  const addOption = (questionId) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptionId = `${questionId}-${q.options.length + 1}`;
          return {
            ...q,
            options: [
              ...q.options,
              { id: newOptionId, text: "", isCorrect: false },
            ],
          };
        }
        return q;
      })
    );
  };

  const removeOption = (questionId, optionId) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          if (q.options.length > 2) {
            return {
              ...q,
              options: q.options.filter((o) => o.id !== optionId),
            };
          }
          toast.error("Each question must have at least two options");
          return q;
        }
        return q;
      })
    );
  };

  const updateOptionText = (questionId, optionId, text) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.map((o) =>
              o.id === optionId ? { ...o, text } : o
            ),
          };
        }
        return q;
      })
    );
  };

  const updateOptionCorrect = (questionId, optionId) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.map((o) => ({
              ...o,
              isCorrect: o.id === optionId,
            })),
          };
        }
        return q;
      })
    );
  };

  const validateForm = () => {
    if (!title.trim()) {
      toast.error("Please enter a title");
      return false;
    }
    if (!description.trim()) {
      toast.error("Please enter a description");
      return false;
    }
    if (!subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }

    for (const question of questions) {
      if (!question.text.trim()) {
        toast.error("All questions must have text");
        return false;
      }

      if (question.type === "singlechoice" || question.type === "multichoice") {
        let hasCorrectOption = false;
        for (const option of question.options) {
          if (!option.text.trim()) {
            toast.error("All options must have text");
            return false;
          }
          if (option.isCorrect) {
            hasCorrectOption = true;
          }
        }

        if (!hasCorrectOption) {
          toast.error("Each question must have at least one correct answer");
          return false;
        }
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!user) {
        throw new Error("User not authenticated");
      }

      const formattedQuestions = questions.map((q) => ({
        text: q.text,
        required: q.required,
        type: q.type,
        expectedAnswer: q.expectedAnswer || "",
        options: q.options.map((o) => ({
          text: o.text,
          isCorrect: o.isCorrect,
        })),
      }));

      const examData = {
        exam: {
          title,
          description,
          subject,
          stipulatedTime,
          enforceTimeLimit,
          attemptLimit,
          isPublic,
          questions: formattedQuestions,
        },
      };

      const response = await api.post(`/api/exam/${user.userId}`, examData);

      // console.log("response", response.data);
      if (response.data.response.isSuccessful) {
        toast.success("Exam created successfully");
        navigate("/dashboard/my-exams");
      } else {
        toast.error(response.data.response.message || "Failed to create exam");
      }
    } catch (error) {
      console.error("Error creating exam:", error);
      toast.error("Failed to create exam");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateQuestionType = (questionId, type) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              type,
              expectedAnswer: q.expectedAnswer || "",
              options:
                type === "text"
                  ? []
                  : q.options.length >= 2
                    ? q.options
                    : [
                        { id: `${questionId}-1`, text: "", isCorrect: false },
                        { id: `${questionId}-2`, text: "", isCorrect: false },
                      ],
            }
          : q
      )
    );
  };

  return (
    <div className="exam-form create-exam">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Create New Exam</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 exam-details">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Exam Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="e.g., Introduction to .NET"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="Describe what this exam is about"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="e.g., C#, ASP.NET, etc."
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time Limit (minutes)
              </label>
              <input
                type="number"
                name="time"
                id="time"
                min="1"
                value={stipulatedTime}
                onChange={(e) => setStipulatedTime(Number(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="attemptLimit"
                className="block text-sm font-medium text-gray-700"
              >
                Attempt Limit
              </label>
              <input
                type="number"
                name="attemptLimit"
                id="attemptLimit"
                min="1"
                value={attemptLimit}
                onChange={(e) => setAttemptLimit(Number(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">
                Maximum number of times a user can attempt this exam
              </p>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <input
                  id="enforceTimeLimit"
                  name="enforceTimeLimit"
                  type="checkbox"
                  checked={enforceTimeLimit}
                  onChange={(e) => setEnforceTimeLimit(e.target.checked)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="enforceTimeLimit"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Enforce time limit (automatically submit when time expires)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="isPublic"
                  name="isPublic"
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isPublic"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Make this exam public (can be discovered by subject search)
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 questions-section">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Questions</h2>
          </div>

          {questions.map((question, qIndex) => (
            <div
              key={question.id}
              className="bg-white shadow overflow-hidden sm:rounded-lg p-6 question-card"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Question {qIndex + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeQuestion(question.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor={`question-type-${question.id}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Question Type
                  </label>
                  <select
                    id={`question-type-${question.id}`}
                    value={question.type}
                    onChange={(e) =>
                      updateQuestionType(question.id, e.target.value)
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  >
                    <option value="singlechoice">Single Choice</option>
                    <option value="multichoice">Multiple Choice</option>
                    <option value="text">Text Answer</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor={`question-${question.id}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Question Text
                  </label>
                  <textarea
                    id={`question-${question.id}`}
                    value={question.text}
                    onChange={(e) =>
                      updateQuestionText(question.id, e.target.value)
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Enter your question here"
                    rows={2}
                  />
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id={`required-${question.id}`}
                    type="checkbox"
                    checked={question.required}
                    onChange={(e) =>
                      updateQuestionRequired(question.id, e.target.checked)
                    }
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`required-${question.id}`}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Required
                  </label>
                </div>

                {question.type === "text" && (
                  <div className="mb-4">
                    <label
                      htmlFor={`expected-answer-${question.id}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expected Answer or Answer Guidelines
                    </label>
                    <textarea
                      id={`expected-answer-${question.id}`}
                      value={question.expectedAnswer || ""}
                      onChange={(e) => {
                        setQuestions(
                          questions.map((q) =>
                            q.id === question.id
                              ? { ...q, expectedAnswer: e.target.value }
                              : q
                          )
                        );
                      }}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="Enter the expected answer or guidelines for grading this text question"
                      rows={3}
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      This will help with manual grading of text responses.
                    </p>
                  </div>
                )}

                {question.type !== "text" && (
                  <div className="space-y-2 options-container">
                    <div className="flex justify-between items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Options
                      </label>
                      <button
                        type="button"
                        onClick={() => addOption(question.id)}
                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        Add Option
                      </button>
                    </div>

                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2 option-item"
                      >
                        <input
                          type={
                            question.type === "singlechoice"
                              ? "radio"
                              : "checkbox"
                          }
                          id={`option-${option.id}`}
                          name={`correct-${question.id}`}
                          checked={option.isCorrect}
                          onChange={() => {
                            if (question.type === "singlechoice") {
                              updateOptionCorrect(question.id, option.id);
                            } else {
                              setQuestions(
                                questions.map((q) => {
                                  if (q.id === question.id) {
                                    return {
                                      ...q,
                                      options: q.options.map((o) =>
                                        o.id === option.id
                                          ? { ...o, isCorrect: !o.isCorrect }
                                          : o
                                      ),
                                    };
                                  }
                                  return q;
                                })
                              );
                            }
                          }}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                        />
                        <input
                          type="text"
                          value={option.text}
                          onChange={(e) =>
                            updateOptionText(
                              question.id,
                              option.id,
                              e.target.value
                            )
                          }
                          className="flex-1 block border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          placeholder="Option text"
                        />
                        <button
                          type="button"
                          onClick={() => removeOption(question.id, option.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4 form-actions">
          <button
            type="button"
            onClick={addQuestion}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Question
          </button>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Exam"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateExam;
