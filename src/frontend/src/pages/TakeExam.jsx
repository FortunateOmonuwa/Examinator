"use client";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { api } from "../services/api";
import toast from "react-hot-toast";
import "../styles/take-exam.scss";

const TakeExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [directExam, setDirectExam] = useState(null);
  const [directExamLoading, setDirectExamLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (examId) {
      setDirectExamLoading(true);
      const fetchExam = async () => {
        try {
          const response = await api.get(`/api/exam/${examId}`);
          if (
            response.data.response.isSuccessful &&
            response.data.response.body
          ) {
            setDirectExam(response.data.response.body);
          } else {
            toast.error("Exam not found or is not available");
          }
        } catch (error) {
          console.error("Error fetching exam:", error);
          toast.error("Failed to load exam");
        } finally {
          setDirectExamLoading(false);
        }
      };

      fetchExam();
    }
  }, [examId]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSearching(true);
    setHasSearched(true);

    try {
      setTimeout(() => {
        const mockResults = [
          {
            id: "1",
            title: "Introduction to JavaScript",
            description:
              "Basic concepts and syntax of JavaScript programming language",
            subject: "JavaScript",
            examiner: "John Doe",
            questions: 15,
            time: 30,
          },
          {
            id: "2",
            title: "Advanced CSS Techniques",
            description:
              "Learn advanced CSS layouts, animations, and responsive design",
            subject: "CSS",
            examiner: "Jane Smith",
            questions: 20,
            time: 45,
          },
          {
            id: "3",
            title: "React Fundamentals",
            description:
              "Core concepts of React including components, props, and state",
            subject: "React",
            examiner: "Alex Johnson",
            questions: 25,
            time: 60,
          },
        ].filter(
          (exam) =>
            !subject ||
            exam.subject.toLowerCase().includes(subject.toLowerCase()) ||
            exam.title.toLowerCase().includes(subject.toLowerCase())
        );

        setSearchResults(mockResults);
        setIsSearching(false);

        if (mockResults.length === 0) {
          toast.error("No exams found matching your criteria");
        }
      }, 1000);
    } catch (error) {
      console.error("Error searching for exams:", error);
      toast.error("Failed to search for exams");
      setIsSearching(false);
    }
  };

  const handleTakeExam = (examId, email) => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    } else if (emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    navigate(`/exam-session/${examId}?email=${encodeURIComponent(email)}`);
  };

  const handleDirectExamLink = () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter an exam link or exam ID");
      return;
    }

    const fullLinkMatch = searchTerm.match(/\/exam\/([a-zA-Z0-9-]+)/);
    const isUUIDOnly = /^[a-zA-Z0-9-]{36}$/.test(searchTerm);

    if (fullLinkMatch && fullLinkMatch[1]) {
      navigate(`/exam/${fullLinkMatch[1]}`);
    } else if (isUUIDOnly) {
      navigate(`/exam/${searchTerm}`);
    } else {
      toast.error("Invalid exam link or ID format");
    }
  };

  if (examId && directExamLoading) {
    return (
      <div className="take-exam-page py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading exam...</p>
          </div>
        </div>
      </div>
    );
  }

  if (examId && directExam) {
    return (
      <div className="take-exam-page py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              to="/take-exam"
              className="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Exam Search
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {directExam.title}
              </h1>
              <p className="text-gray-600 mb-6">{directExam.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {directExam.subject}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {directExam.questions?.length || 0} Questions
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {directExam.stipulatedTime} Minutes
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  Enter your email to take this exam
                </h2>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => {
                      if (!email.trim()) {
                        toast.error("Please enter your email address");
                        return;
                      }
                      navigate(
                        `/exam-session/${directExam.id}?email=${encodeURIComponent(email)}`
                      );
                    }}
                    className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
                  >
                    Start Exam
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Important Notes:
                </h3>
                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>
                    This exam has a time limit of {directExam.stipulatedTime}{" "}
                    minutes.
                  </li>
                  <li>
                    {directExam.enforceTimeLimit
                      ? "The exam will be automatically submitted when the time expires."
                      : "You can continue after the time limit, but it will be noted."}
                  </li>
                  <li>
                    Your results will be sent to the email address you provide.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="take-exam-page py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Take an Exam
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Enter Exam Link</h2>
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Paste your exam link here"
                className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
                onClick={handleDirectExamLink}
              >
                Go
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Find Public Exams</h2>
            <form onSubmit={handleSearch}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject or Topic (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., JavaScript, React, CSS"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full flex justify-center items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-70"
              >
                {isSearching ? (
                  "Searching..."
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Search Exams
                  </>
                )}
              </button>
            </form>

            {hasSearched && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Search Results</h3>

                {searchResults.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No exams found matching your criteria.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {searchResults.map((exam) => (
                      <div
                        key={exam.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="text-lg font-medium text-gray-900">
                          {exam.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {exam.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {exam.subject}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {exam.questions} Questions
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {exam.time} Minutes
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            By {exam.examiner}
                          </span>
                          <button
                            onClick={() => handleTakeExam(exam.id, email)}
                            className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition-colors"
                          >
                            Take Exam
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeExam;
