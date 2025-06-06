"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Clock, BookOpen, Filter } from "lucide-react";
import { publicExamService } from "../services/api";
import toast from "react-hot-toast";
import "../styles/take-exam.scss";

const PublicExams = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchPublicExams = async () => {
      setLoading(true);
      try {
        const response = await publicExamService.getPublicExams();
        if (response.response && response.response.isSuccessful) {
          const examData = response.response.body.map((exam) => ({
            id: exam.id,
            title: exam.title,
            description: exam.description,
            subject: exam.subject,
            examiner: exam.creator?.name || "Unknown",
            questions: exam.questions?.length || 0,
            time: exam.stipulatedTime || 0,
            level: exam.level || "",
          }));

          setExams(examData);
          setFilteredExams(examData);

          const uniqueSubjects = [
            ...new Set(examData.map((exam) => exam.subject)),
          ];
          setSubjects(uniqueSubjects);
        } else {
          toast.error("Failed to load public exams");
        }
      } catch (error) {
        // console.error("Error fetching public exams:", error);
        toast.error("Failed to load public exams");
      } finally {
        setLoading(false);
      }
    };

    fetchPublicExams();
  }, []);

  useEffect(() => {
    let filtered = exams;

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (exam) =>
          exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exam.examiner.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (subjectFilter) {
      filtered = filtered.filter((exam) => exam.subject === subjectFilter);
    }

    if (levelFilter) {
      filtered = filtered.filter((exam) => exam.level === levelFilter);
    }

    setFilteredExams(filtered);
  }, [searchTerm, subjectFilter, levelFilter, exams]);

  const clearFilters = () => {
    setSearchTerm("");
    setSubjectFilter("");
    setLevelFilter("");
  };

  if (loading) {
    return (
      <div className="take-exam-page py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading public exams...</p>
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
            className="inline-flex items-center text-pink-600 hover:text-pink-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Public Exams
          </h1>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Exams
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, description, subject, or examiner..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Subject Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level
                </label>
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">All Levels</option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || subjectFilter || levelFilter) && (
              <div className="mt-4">
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-3 py-1 text-sm text-pink-600 hover:text-pink-700"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredExams.length} Exam
                {filteredExams.length !== 1 ? "s" : ""} Found
              </h2>
            </div>

            {filteredExams.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm || subjectFilter || levelFilter
                    ? "No exams match your search criteria."
                    : "No public exams available at the moment."}
                </p>
                {(searchTerm || subjectFilter || levelFilter) && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Clear filters to see all exams
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                  <div
                    key={exam.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {exam.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {exam.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {exam.subject}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                          exam.level === "BEGINNER"
                            ? "bg-green-100 text-green-800"
                            : exam.level === "INTERMEDIATE"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {exam.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {exam.time} min
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {exam.questions} questions
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        By {exam.examiner}
                      </span>
                      <Link
                        to={`/exam/${exam.id}`}
                        className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm font-medium"
                      >
                        Take Exam
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicExams;
