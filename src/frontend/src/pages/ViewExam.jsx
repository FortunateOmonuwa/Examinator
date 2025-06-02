"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Edit, Clock } from "lucide-react";
import { api } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import "../styles/view-exam.scss";

const ViewExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        if (examId) {
          const response = await api.get(`/api/exam/${examId}`);
          if (
            response.data.response.isSuccessful &&
            response.data.response.body
          ) {
            setExam(response.data.response.body);
          } else {
            toast.error("Failed to load exam");
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Error fetching exam:", error);
        toast.error("Failed to load exam");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examId, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!exam) {
    return (
      <div className="text-center py-12">
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          Exam not found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          The exam you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="view-exam">
      <div className="flex items-center justify-between mb-6 exam-header">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{exam.title}</h1>
        </div>
        <Link
          to={`/exams/${exam.id}/edit`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <Edit className="mr-2 h-4 w-4" />
          Edit Exam
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6 exam-details">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Exam Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {exam.description}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center time-info">
              <Clock className="h-5 w-5 text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">
                {exam.stipulatedTime} minutes
                {exam.enforceTimeLimit ? " (enforced)" : " (not enforced)"}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 subject-tag">
              {exam.subject}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6 questions-section">
        <h2 className="text-xl font-bold text-gray-900">Questions</h2>

        {exam.questions.map((question, qIndex) => (
          <div
            key={question.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg p-6 question-card"
          >
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Question {qIndex + 1}
                {question.required && (
                  <span className="ml-2 text-sm text-red-500">*Required</span>
                )}
              </h3>
              <p className="mt-2 text-gray-700">{question.text}</p>
            </div>

            <div className="space-y-3 mt-4 options-list">
              <h4 className="text-sm font-medium text-gray-700">Options:</h4>
              {question.options.map((option, oIndex) => (
                <div key={option.id} className="flex items-center option-item">
                  <div
                    className={`flex items-center h-5 w-5 border rounded-full mr-3 ${
                      option.isCorrect
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    {option.isCorrect && (
                      <span className="text-white text-xs flex items-center justify-center w-full">
                        ✓
                      </span>
                    )}
                  </div>
                  <span
                    className={`${option.isCorrect ? "font-medium text-green-700" : "text-gray-700"}`}
                  >
                    {String.fromCharCode(65 + oIndex)}. {option.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewExam;
