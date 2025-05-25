"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  Share2,
  Globe,
  Lock,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import { GetAllExams } from "../services/Exam";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import "../styles/my-exams.scss";

const MyExams = () => {
  const { user } = useAuth();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [currentExam, setCurrentExam] = useState(null);
  const [shareEmail, setShareEmail] = useState("");
  const [shareLoading, setShareLoading] = useState(false);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        // if (user) {
        //   const response = await api.get(`/api/examiner/${user.id}`);
        //   if (
        //     response.data.response.isSuccessful &&
        //     response.data.response.body
        //   ) {
        //     setExams(response.data.response.body.exams || []);
        //   }
        // }

        const exams = await GetAllExams(user.userId);
        setExams(exams);
      } catch (error) {
        console.error("Error fetching exams:", error);
        toast.error("Failed to load exams");
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [user]);

  const handleDeleteExam = async (examId) => {
    if (window.confirm("Are you sure you want to delete this exam?")) {
      try {
        const response = await api.delete(`/api/exam/${examId}`);
        if (response.data.response.isSuccessful) {
          setExams(exams.filter((exam) => exam.id !== examId));
          toast.success("Exam deleted successfully");
        } else {
          toast.error(
            response.data.response.message || "Failed to delete exam"
          );
        }
      } catch (error) {
        console.error("Error deleting exam:", error);
        toast.error("Failed to delete exam");
      }
    }
  };

  const handleTogglePublic = async (exam) => {
    try {
      // In a real implementation, this would call your backend API to update the exam
      // For now, we'll simulate a response
      const updatedExam = { ...exam, isPublic: !exam.isPublic };

      // Update the local state
      setExams(exams.map((e) => (e.id === exam.id ? updatedExam : e)));

      toast.success(
        `Exam is now ${updatedExam.isPublic ? "public" : "private"}`
      );

      // In a real implementation:
      // const response = await api.put(`/api/exam/${exam.id}`, {
      //   exam: { ...exam, isPublic: !exam.isPublic }
      // })
    } catch (error) {
      console.error("Error updating exam:", error);
      toast.error("Failed to update exam visibility");
    }
  };

  const openShareModal = (exam) => {
    setCurrentExam(exam);
    setShareModalOpen(true);
  };

  const handleShareExam = async (e) => {
    e.preventDefault();

    if (!shareEmail.trim()) {
      toast.error("Please enter an email address");
      return;
    }

    setShareLoading(true);

    try {
      // In a real implementation, this would call your backend API
      // For now, we'll simulate a response
      setTimeout(() => {
        toast.success(`Exam link sent to ${shareEmail}`);
        setShareModalOpen(false);
        setShareEmail("");
        setShareLoading(false);
      }, 1000);

      // In a real implementation:
      // const response = await api.post(`/api/exam/${currentExam.id}/share`, {
      //   email: shareEmail
      // })
    } catch (error) {
      console.error("Error sharing exam:", error);
      toast.error("Failed to share exam");
      setShareLoading(false);
    }
  };

  const copyExamLink = (examId) => {
    const link = `${window.location.origin}/exam/${examId}`;
    navigator.clipboard.writeText(link);
    toast.success("Exam link copied to clipboard");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-exams-page">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Exams</h1>
      </div>

      {exams.length === 0 ? (
        <div className="text-center py-12 empty-state">
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No exams found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new exam.
          </p>
          <div className="mt-6">
            <Link
              to="/dashboard/create-exam"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New Exam
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {exams.map((exam) => (
              <li key={exam.id} className="exam-item">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {exam.title}
                        </h3>

                        {exam.isPublic ? (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Globe className="mr-1 h-3 w-3" />
                            Public
                          </span>
                        ) : (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Lock className="mr-1 h-3 w-3" />
                            Private
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {exam.description}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          {exam.subject}
                        </span>
                        <span className="text-xs">
                          Time: {exam.stipulatedTime} minutes
                        </span>
                        <span className="text-xs ml-2">
                          Questions: {exam.questions?.length || 0}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 action-buttons">
                      <button
                        onClick={() => handleTogglePublic(exam)}
                        className={`inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white ${
                          exam.isPublic
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-600 hover:bg-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                        title={exam.isPublic ? "Make Private" : "Make Public"}
                      >
                        {exam.isPublic ? (
                          <Lock className="h-4 w-4" />
                        ) : (
                          <Globe className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={() => openShareModal(exam)}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        title="Share Exam"
                      >
                        <Share2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <Link
                        to={`/dashboard/exams/${exam.id}`}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        title="View Exam"
                      >
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link
                        to={`/dashboard/exams/${exam.id}/edit`}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        title="Edit Exam"
                      >
                        <Edit className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <button
                        onClick={() => handleDeleteExam(exam.id)}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        title="Delete Exam"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share Modal */}
      {shareModalOpen && currentExam && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Share Exam: {currentExam.title}
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Link
              </label>
              <div className="flex">
                <input
                  type="text"
                  readOnly
                  value={`${window.location.origin}/exam/${currentExam.id}`}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                />
                <button
                  onClick={() => copyExamLink(currentExam.id)}
                  className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300"
                >
                  Copy
                </button>
              </div>
            </div>

            <form onSubmit={handleShareExam}>
              <div className="mb-4">
                <label
                  htmlFor="share-email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Share via Email
                </label>
                <input
                  id="share-email"
                  type="email"
                  value={shareEmail}
                  onChange={(e) => setShareEmail(e.target.value)}
                  placeholder="Enter recipient's email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShareModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={shareLoading}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-70"
                >
                  {shareLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyExams;
