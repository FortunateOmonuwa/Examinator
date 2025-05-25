"use client";

import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, Clock, Award } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/home.scss";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hero-content">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Ultimate{" "}
                <span className="text-purple-600">Examination</span> Platform
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Create, manage, and take exams with ease. Examinator provides a
                seamless experience for both examiners and students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/take-exam"
                  className="btn-primary px-6 py-3 rounded-md text-white font-medium text-center"
                >
                  Take an Exam
                </Link>
                <Link
                  to={user ? "/create-exam" : "/register"}
                  className="btn-secondary px-6 py-3 rounded-md font-medium text-center"
                >
                  Create an Exam
                </Link>
              </div>
            </div>
            <div className="hero-image hidden md:block">
              <img
                src="../images/home2.jpg"
                alt="Examinator Platform"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Examinator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interface for creating and taking exams with minimal
                learning curve.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">
                Robust security measures to ensure the integrity of your exams
                and results.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Management</h3>
              <p className="text-gray-600">
                Set time limits for exams and track progress in real-time.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Get immediate feedback and detailed analytics on exam
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Take Exam Section */}
      <section className="take-exam-section py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Take an Exam
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Enter an exam link that was shared with you or search for public
              exams by subject.
            </p>
            <div className="mb-6">
              <label
                htmlFor="exam-link"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Exam Link
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="exam-link"
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Paste your exam link here"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
                  Go
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Or</p>
              <Link
                to="/take-exam"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Browse Public Exams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Create Exam Section */}
      <section className="create-exam-section bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <img
                src="/images/create-exam.png"
                alt="Create Exam"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Create Your Own Exams
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As an examiner, you can create custom exams, set time limits,
                and share them with your students. Get detailed analytics and
                insights on student performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-primary px-6 py-3 rounded-md text-white font-medium text-center"
                >
                  Register as Examiner
                </Link>
                <button
                  className="btn-disabled px-6 py-3 rounded-md font-medium text-center opacity-60 cursor-not-allowed"
                  disabled
                >
                  Register as Student (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
