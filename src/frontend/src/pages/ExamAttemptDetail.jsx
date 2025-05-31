import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle, 
  XCircle,
  AlertCircle
} from 'lucide-react';
import { api } from '../services/api';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';

const ExamAttemptDetail = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttemptDetail();
  }, [attemptId]);

  const fetchAttemptDetail = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/exam/attempt/${attemptId}`);
      if (response.data.response.isSuccessful) {
        setAttempt(response.data.response.body);
      } else {
        toast.error('Failed to load attempt details');
        navigate('/dashboard/my-exams');
      }
    } catch (error) {
      console.error('Error fetching attempt detail:', error);
      toast.error('Failed to load attempt details');
      navigate('/dashboard/my-exams');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const isAnswerCorrect = (question, answer) => {
    if (question.type === 'SINGLECHOICE') {
      const correctOptionIndex = question.options.findIndex(opt => opt.isCorrect);
      const selectedOptions = answer.options || [];
      return selectedOptions.length > 0 && 
             question.options.findIndex(opt => opt.id === selectedOptions[0].id) === correctOptionIndex;
    } else if (question.type === 'MULTICHOICE') {
      const correctOptions = question.options.filter(opt => opt.isCorrect);
      const selectedOptions = answer.options || [];
      
      return correctOptions.length === selectedOptions.length &&
             correctOptions.every(correctOpt => 
               selectedOptions.some(selectedOpt => selectedOpt.id === correctOpt.id)
             );
    } else if (question.type === 'TEXT') {
      // For text questions, we'll mark as correct if there's an answer
      // In a real implementation, this would need manual grading
      return answer.textAnswer && answer.textAnswer.length > 0 && answer.textAnswer[0].trim() !== '';
    }
    return false;
  };

  const getAnswerDisplay = (question, answer) => {
    if (question.type === 'SINGLECHOICE' || question.type === 'MULTICHOICE') {
      const selectedOptions = answer.options || [];
      if (selectedOptions.length === 0) {
        return <span className="text-gray-500 italic">No answer provided</span>;
      }
      return (
        <div className="space-y-1">
          {selectedOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm">
                {String.fromCharCode(65 + question.options.findIndex(opt => opt.id === option.id))}. {option.text}
              </span>
            </div>
          ))}
        </div>
      );
    } else if (question.type === 'TEXT') {
      const textAnswer = answer.textAnswer && answer.textAnswer[0];
      return textAnswer ? (
        <div className="bg-gray-50 p-3 rounded border">
          <p className="text-sm">{textAnswer}</p>
        </div>
      ) : (
        <span className="text-gray-500 italic">No answer provided</span>
      );
    }
    return <span className="text-gray-500 italic">Unknown answer type</span>;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!attempt) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Attempt not found</h2>
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

  const correctAnswers = attempt.answers.filter(answer => {
    const question = attempt.exam.questions.find(q => q.id === answer.questionId);
    return question && isAnswerCorrect(question, answer);
  }).length;

  const totalQuestions = attempt.exam.questions.length;
  const duration = attempt.startTime ? 
    Math.round((new Date(attempt.submittedAt) - new Date(attempt.startTime)) / 60000) : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate(`/dashboard/exam-attempts/${attempt.examId}`)}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Exam Attempts
        </button>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{attempt.exam.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Participant</p>
                <p className="font-medium">{attempt.responderName || 'Anonymous'}</p>
                <p className="text-xs text-gray-500">{attempt.responderEmal || 'No email'}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Award className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Score</p>
                <p className={`text-xl font-bold ${getScoreColor(attempt.totalScore)}`}>
                  {attempt.totalScore}%
                </p>
                <p className="text-xs text-gray-500">
                  {correctAnswers}/{totalQuestions} correct
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Submitted</p>
                <p className="font-medium">{formatDate(attempt.submittedAt)}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">
                  {duration ? `${duration} minutes` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions and Answers */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Questions and Answers</h2>
        
        {attempt.exam.questions.map((question, questionIndex) => {
          const answer = attempt.answers.find(a => a.questionId === question.id);
          const isCorrect = answer && isAnswerCorrect(question, answer);
          
          return (
            <div key={question.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium mr-3">
                      Question {questionIndex + 1}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {question.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {question.text}
                  </h3>
                </div>
                
                <div className="flex items-center ml-4">
                  {isCorrect ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
              </div>

              {/* Show options for multiple choice questions */}
              {(question.type === 'SINGLECHOICE' || question.type === 'MULTICHOICE') && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Options:</h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = answer?.options?.some(selectedOpt => selectedOpt.id === option.id);
                      const isCorrectOption = option.isCorrect;
                      
                      return (
                        <div 
                          key={option.id} 
                          className={`p-2 rounded border ${
                            isCorrectOption 
                              ? 'bg-green-50 border-green-200' 
                              : isSelected 
                                ? 'bg-red-50 border-red-200' 
                                : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              {String.fromCharCode(65 + optionIndex)}. {option.text}
                            </span>
                            <div className="flex items-center space-x-2">
                              {isSelected && (
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                  Selected
                                </span>
                              )}
                              {isCorrectOption && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                  Correct
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Student's Answer */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Student's Answer:</h4>
                {answer ? getAnswerDisplay(question, answer) : (
                  <span className="text-gray-500 italic">No answer provided</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamAttemptDetail;
