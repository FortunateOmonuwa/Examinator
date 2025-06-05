"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import { api } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import "../styles/exam-form.scss";

const EditExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [stipulatedTime, setStipulatedTime] = useState(60);
  const [enforceTimeLimit, setEnforceTimeLimit] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        if (examId) {
          const response = await api.get(`/api/exam/${examId}`);
          if (
            response.data.response.isSuccessful &&
            response.data.response.body
          ) {
            const exam = response.data.response.body;
            setTitle(exam.title);
            setDescription(exam.description);
            setSubject(exam.subject);
            setStipulatedTime(exam.stipulatedTime);
            setEnforceTimeLimit(exam.enforceTimeLimit);
            setIsPublic(exam.isPublic || false);

            const formattedQuestions = exam.questions.map((q, qIndex) => ({
              id: String(qIndex + 1),
              text: q.text,
              required: q.required,
              score: q.score || 1,
              options: q.options.map((o, oIndex) => ({
                id: `${qIndex + 1}-${oIndex + 1}`,
                text: o.text,
                isCorrect: o.isCorrect,
              })),
            }));

            setQuestions(formattedQuestions);
          } else {
            toast.error("Failed to load exam");
            navigate("/dashboard/my-exams");
          }
        }
      } catch (error) {
        console.error("Error fetching exam:", error);
        toast.error("Failed to load exam");
        navigate("/dashboard/my-exams");
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examId, navigate]);

  const addQuestion = () => {
    const newId = String(questions.length + 1);
    setQuestions([
      ...questions,
      {
        id: newId,
        text: "",
        required: true,
        score: 1,
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

  const updateQuestionScore = (questionId, score) => {
    const numericScore = Math.max(0, parseInt(score) || 1);
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, score: numericScore } : q
      )
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
        toast.error("Each question must have a correct answer");
        return false;
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
      if (!examId) {
        throw new Error("Exam ID is missing");
      }

      const formattedQuestions = questions.map((q) => ({
        text: q.text,
        required: q.required,
        score: q.score || 1,
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
          isPublic,
          questions: formattedQuestions,
        },
      };

      const response = await api.put(`/api/exam/${examId}`, examData);

      if (!response.data.response.isSuccessful) {
        throw new Error(
          response.data.response.message || "Failed to update exam"
        );
      }

      toast.success("Exam updated successfully");
      navigate(`/dashboard/exams/${examId}`);
    } catch (error) {
      console.error("Error updating exam:", error);
      toast.error("Failed to update exam");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="exam-form edit-exam">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Edit Exam</h1>
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
            <button
              type="button"
              onClick={addQuestion}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Question
            </button>
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
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor={`score-${question.id}`}
                      className="text-sm font-medium text-gray-700"
                    >
                      Score:
                    </label>
                    <input
                      type="number"
                      id={`score-${question.id}`}
                      value={question.score || 1}
                      onChange={(e) =>
                        updateQuestionScore(question.id, e.target.value)
                      }
                      min="0"
                      step="1"
                      className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeQuestion(question.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
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

                <div className="flex items-center">
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
                        type="radio"
                        id={`option-${option.id}`}
                        name={`correct-${question.id}`}
                        checked={option.isCorrect}
                        onChange={() =>
                          updateOptionCorrect(question.id, option.id)
                        }
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
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end form-actions">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mr-4 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExam;
