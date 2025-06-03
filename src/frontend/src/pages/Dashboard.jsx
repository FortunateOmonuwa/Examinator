"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, BookOpen, FileText, TrendingUp } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { examService, examAttemptService } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import "../styles/dashboard.scss";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalExams: 0,
    totalAttempts: 0,
    totalStudents: 0,
    recentExams: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        if (user) {
          // Fetch exams for statistics
          const examsResponse = await examService.getAllExams(user.userId);
          const exams =
            examsResponse.response && examsResponse.response.isSuccessful
              ? examsResponse.response.body || []
              : [];

          // Fetch all attempts for this examiner's exams
          const attemptsResponse =
            await examAttemptService.getAllExaminerAttempts(user.userId);
          const attempts =
            attemptsResponse.response && attemptsResponse.response.isSuccessful
              ? attemptsResponse.response.body || []
              : [];

          setStats({
            totalExams: exams.length,
            totalAttempts: attempts.length,

            recentExams: exams.slice(0, 5), // Show 5 most recent exams
          });
        }
      } catch (error) {
        // console.error("Error fetching dashboard data:", error);
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          {/* <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> */}
          <p className="text-gray-600 mt-1">
            Welcome back,{" "}
            <span className="text-pink-600 font-bold">{user?.name}!</span>{" "}
          </p>
        </div>
        <Link
          to="/dashboard/create-exam"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create New Exam
        </Link>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-pink-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Exams
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.totalExams}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Attempts
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.totalAttempts}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Avg. Score
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">85%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/dashboard/create-exam"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <PlusCircle className="h-5 w-5 mr-2 text-pink-600" />
                Create Exam
              </Link>
              <Link
                to="/dashboard/my-exams"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                My Exams
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {stats.recentExams.length > 0 ? (
                stats.recentExams.slice(0, 3).map((exam) => (
                  <div
                    key={exam.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {exam.title}
                      </p>
                      <p className="text-xs text-gray-500">{exam.subject}</p>
                    </div>
                    <Link
                      to={`/dashboard/exams/${exam.id}`}
                      className="text-pink-600 hover:text-pink-700 text-sm font-medium"
                    >
                      View
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No recent activity</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
