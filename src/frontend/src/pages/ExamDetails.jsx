import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { examService, publicExamService } from "../services/api";

const ExamDetails = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    fetchExamDetails();
  }, [examId]);

  const fetchExamDetails = async () => {
    try {
      setLoading(true);
      const response = await examService.getExam(examId);

      if (response.response && response.response.isSuccessful) {
        const examData = response.response.body;
        setExam(examData);
      } else {
        toast.error("Exam not found");
        navigate("/take-exam");
      }
    } catch (error) {
      // console.error("Error fetching exam details:", error);
      toast.error("Failed to load exam details");
      navigate("/take-exam");
    } finally {
      setLoading(false);
    }
  };

  const handleStartExam = async () => {
    if (!name.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    // For public exams, we can allow unlimited attempts or set a reasonable limit
    // Let's set a limit of 3 attempts for public exams
    try {
      const attemptCheck = await publicExamService.checkExamAttempts(
        examId,
        email.trim()
      );

      if (attemptCheck.response && attemptCheck.response.isSuccessful) {
        const { canAttempt, attemptCount } = attemptCheck.response.body;

        if (!canAttempt && attemptCount >= 3) {
          toast.error(
            "You have reached the maximum number of attempts (3) for this exam"
          );
          return;
        }
      }
    } catch (error) {
      // If attempt check fails, we'll allow the exam (for public exams)
      // console.log("Attempt check failed, allowing exam:", error);
    }

    navigate(
      `/exam-session/${examId}?email=${encodeURIComponent(email.trim())}&name=${encodeURIComponent(name.trim())}`
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading exam details...</p>
        </div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Exam Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The exam you're looking for doesn't exist or is no longer available.
          </p>
          <button
            onClick={() => navigate("/take-exam")}
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
          >
            Browse Other Exams
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exam Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {exam.title}
              </h1>
              <p className="text-gray-600 mb-4">{exam.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Subject</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {exam.subject}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Duration</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {exam.stipulatedTime} minutes
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Level</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">
                    {exam.level?.toLowerCase()}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Questions</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {exam.questions?.length || 0}
                  </p>
                </div>
              </div>

              {exam.creator && (
                <p className="text-sm text-gray-500">
                  Created by:{" "}
                  <span className="font-medium">{exam.creator.name}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Exam Instructions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Instructions
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Read each question carefully before answering</li>
            <li>
              • You can navigate between questions using the navigation buttons
            </li>
            <li>• Make sure to answer all required questions</li>
            {exam.enforceTimeLimit && (
              <li>
                • This exam has a time limit of {exam.stipulatedTime} minutes
              </li>
            )}
            <li>• Do not refresh the page or leave the tab during the exam</li>
            <li>• Click "Submit Exam" when you're finished</li>
          </ul>
        </div>

        {/* Student Details Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Enter your details to start the exam
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <button
              onClick={handleStartExam}
              className="w-full bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors font-medium text-lg"
            >
              Start Exam
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/take-exam")}
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            ← Back to Browse Exams
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
