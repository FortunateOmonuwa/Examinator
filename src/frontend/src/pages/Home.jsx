"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, Clock, Award, ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { publicExamService } from "../services/api";
import "../styles/home.scss";

// Import images
import takeExamImage from "../images/home2.jpg";
import heroImage from "../images/home.jpg";
import createExamImage from "../images/home3.jpg";

const Home = () => {
  const { user } = useAuth();
  const [featuredExams, setFeaturedExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedExams = async () => {
      try {
        const response = await publicExamService.getPublicExams();
        if (response.response && response.response.isSuccessful) {
          // Get first 4 exams for featured section
          setFeaturedExams(response.response.body.slice(0, 4));
        }
      } catch (error) {
        // console.error("Error fetching featured exams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedExams();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hero-content">
              <h1 className="text-4xl md:text-5xl text-pretty font-bold text-gray-900 mb-4">
                The Ultimate <span className="">Examination</span> Platform
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
                  to={
                    user && user.role === "EXAMINER"
                      ? "/dashboard/create-exam"
                      : "/register"
                  }
                  className="btn-secondary px-6 py-3 rounded-md font-medium text-center"
                >
                  Create an Exam
                </Link>
              </div>
            </div>
            <div className="hero-image hidden md:block">
              <img
                src={heroImage}
                alt="Examinator Platform"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
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
                <BookOpen className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interface for creating and taking exams with minimal
                learning curve.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">
                Robust security measures to ensure the integrity of your exams
                and results.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <Clock className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Management</h3>
              <p className="text-gray-600">
                Set time limits for exams and track progress in real-time.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="icon-wrapper bg-purple-100 p-3 rounded-full inline-flex mb-4">
                <Award className="h-6 w-6 text-pink-600" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="take-exam-image hidden md:block">
              <img
                src={takeExamImage}
                alt="Take an Exam"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="take-exam-content">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Mobile image */}
                <div className="md:hidden mb-6">
                  <img
                    src={takeExamImage}
                    alt="Take an Exam"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Take an Exam
                </h2>
                <p className="text-gray-600 mb-6">
                  Enter an exam link that was shared with you or search for
                  public exams by subject.
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
                      className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Paste your exam link here"
                    />
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition-colors">
                      Go
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or</p>
                  <Link
                    to="/take-exam"
                    className="text-pink-600 font-medium hover:text-pink-700"
                  >
                    Browse Public Exams
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Exam Section */}
      <section className="create-exam-section bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="create-exam-content">
              {/* Mobile image */}
              <div className="md:hidden mb-6">
                <img
                  src={createExamImage}
                  alt="Create Exam"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
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
            <div className="create-exam-image hidden md:block">
              <img
                src={createExamImage}
                alt="Create Exam"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Public Exams Section */}
      <section className="featured-exams-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Public Exams
            </h2>
            <p className="text-lg text-gray-600">
              Discover and take popular exams from various subjects
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading featured exams...</p>
            </div>
          ) : featuredExams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredExams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {exam.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {exam.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {exam.subject}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {exam.level?.toLowerCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {exam.stipulatedTime} min
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {exam.questions?.length || 0} questions
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/exam/${exam.id}`}
                    className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-center block font-medium"
                  >
                    Take Exam
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No public exams available at the moment.
              </p>
            </div>
          )}

          <div className="text-center">
            <Link
              to="/take-exam"
              className="inline-flex items-center px-6 py-3 border border-pink-600 text-pink-600 font-medium rounded-md hover:bg-pink-50 transition-colors"
            >
              View All Public Exams
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
