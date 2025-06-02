"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import "../styles/dashboard.scss";

const Dashboard = () => {
  const { user } = useAuth();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        if (user) {
          const response = await api.get(`/api/exam/exams/${user.userId}`);
          if (
            response.data.response.isSuccessful &&
            response.data.response.body
          ) {
            setExams(response.data.response.body || []);
          }
        }
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Exams</h1>
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
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New Exam
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md exam-list">
          <ul className="divide-y divide-gray-200">
            {exams.map((exam) => (
              <li key={exam.id} className="exam-item">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-gray-900">
                        {exam.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {exam.description}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded subject-tag">
                          {exam.subject}
                        </span>
                        <span className="text-xs">
                          Time: {exam.stipulatedTime} minutes
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 action-buttons">
                      <Link
                        to={`/exams/${exam.id}`}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 view-btn"
                      >
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link
                        to={`/exams/${exam.id}/edit`}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 edit-btn"
                      >
                        <Edit className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <button
                        onClick={() => handleDeleteExam(exam.id)}
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 delete-btn"
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
    </div>
  );
};

export default Dashboard;
