import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Clock, 
  Award, 
  Eye, 
  ArrowLeft,
  Download,
  Filter
} from 'lucide-react';
import { api } from '../services/api';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';

const ExamAttempts = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('submittedAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterScore, setFilterScore] = useState('all');

  useEffect(() => {
    fetchExamAndAttempts();
  }, [examId]);

  const fetchExamAndAttempts = async () => {
    try {
      setLoading(true);
      
      // Fetch exam details
      const examResponse = await api.get(`/api/exam/${examId}`);
      if (examResponse.data.response.isSuccessful) {
        setExam(examResponse.data.response.body);
      }

      // Fetch exam attempts
      const attemptsResponse = await api.get(`/api/exam/attempts/${examId}`);
      if (attemptsResponse.data.response.isSuccessful) {
        setAttempts(attemptsResponse.data.response.body);
      }
    } catch (error) {
      console.error('Error fetching exam attempts:', error);
      toast.error('Failed to load exam attempts');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return '🏆';
    if (score >= 60) return '👍';
    return '📚';
  };

  const sortedAndFilteredAttempts = attempts
    .filter(attempt => {
      if (filterScore === 'all') return true;
      if (filterScore === 'pass') return attempt.totalScore >= 60;
      if (filterScore === 'fail') return attempt.totalScore < 60;
      return true;
    })
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const exportToCSV = () => {
    const csvContent = [
      ['Responder Name', 'Email', 'Score', 'Submitted At'],
      ...sortedAndFilteredAttempts.map(attempt => [
        attempt.responderName || 'N/A',
        attempt.responderEmal || 'N/A',
        attempt.totalScore || 0,
        formatDate(attempt.submittedAt)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exam?.title || 'exam'}_attempts.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!exam) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Exam not found</h2>
          <button
            onClick={() => navigate('/dashboard/my-exams')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to My Exams
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/dashboard/my-exams')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to My Exams
        </button>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{exam.title}</h1>
            <p className="text-gray-600">{exam.description}</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              {attempts.length} attempt{attempts.length !== 1 ? 's' : ''}
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterScore}
                onChange={(e) => setFilterScore(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="all">All Scores</option>
                <option value="pass">Pass (≥60%)</option>
                <option value="fail">Fail (&lt;60%)</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="submittedAt">Date Submitted</option>
              <option value="totalScore">Score</option>
              <option value="responderName">Name</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attempts List */}
      {attempts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No attempts yet</h3>
          <p className="text-gray-500">
            Students haven't taken this exam yet. Share the exam link to get started.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedAndFilteredAttempts.map((attempt) => (
                  <tr key={attempt.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {attempt.responderName || 'Anonymous'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {attempt.responderEmal || 'No email provided'}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="mr-2">{getScoreIcon(attempt.totalScore)}</span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getScoreColor(attempt.totalScore)}`}>
                          {attempt.totalScore}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {formatDate(attempt.submittedAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {attempt.startTime ? 
                          Math.round((new Date(attempt.submittedAt) - new Date(attempt.startTime)) / 60000) + ' min' 
                          : 'N/A'
                        }
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => navigate(`/dashboard/exam-attempt/${attempt.id}`)}
                        className="text-blue-600 hover:text-blue-900 flex items-center"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total Attempts</p>
              <p className="text-2xl font-semibold text-gray-900">{attempts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-green-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Average Score</p>
              <p className="text-2xl font-semibold text-gray-900">
                {attempts.length > 0 
                  ? Math.round(attempts.reduce((sum, attempt) => sum + (attempt.totalScore || 0), 0) / attempts.length)
                  : 0
                }%
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold">✓</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Pass Rate</p>
              <p className="text-2xl font-semibold text-gray-900">
                {attempts.length > 0 
                  ? Math.round((attempts.filter(a => (a.totalScore || 0) >= 60).length / attempts.length) * 100)
                  : 0
                }%
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">★</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Highest Score</p>
              <p className="text-2xl font-semibold text-gray-900">
                {attempts.length > 0 
                  ? Math.max(...attempts.map(a => a.totalScore || 0))
                  : 0
                }%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamAttempts;
