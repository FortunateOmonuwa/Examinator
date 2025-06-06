import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  //baseURL: "http://localhost:5001",

  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.token) {
//         config.headers.Authorization = `Bearer ${userData.token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("user");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// Exam Services
export const examService = {
  createExam: async (examinerId, examData) => {
    try {
      const response = await api.post(`/api/exam/${examinerId}`, examData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteExam: async (examId) => {
    try {
      const response = await api.delete(`/api/exam/${examId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getExam: async (examId) => {
    try {
      const response = await api.get(`/api/exam/${examId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAllExams: async (examinerId) => {
    try {
      const response = await api.get(`/api/exam/exams/${examinerId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  togglePublicStatus: async (examId, examinerId) => {
    try {
      const response = await api.patch(`/api/exam/${examId}/toggle-public`, {
        examinerId: examinerId,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Public Exam Services
export const publicExamService = {
  getPublicExams: async (subject = null) => {
    try {
      const params = subject ? { subject } : {};
      const response = await api.get("/api/exam/public", { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  checkExamAttempts: async (examId, email) => {
    try {
      const response = await api.get(
        `/api/exam/check-attempts/${examId}?email=${encodeURIComponent(email)}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Exam Attempt Services
export const examAttemptService = {
  submitExamAttempt: async (attemptData) => {
    try {
      const response = await api.post("/api/exam-attempt/submit", attemptData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getExamAttempts: async (examId) => {
    try {
      const response = await api.get(`/api/exam-attempt/exam/${examId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getExamAttemptById: async (attemptId) => {
    try {
      const response = await api.get(`/api/exam-attempt/${attemptId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAllExaminerAttempts: async (examinerId) => {
    try {
      const response = await api.get(
        `/api/exam-attempt/examiner/${examinerId}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export const integrationService = {
  calculateScore: async ({ question, answer, maxScore }) => {
    try {
      const response = await api.post("/api/integration/calculate-score", {
        question,
        answer,
        maxScore,
      });
      return response.data.response.body.score;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export { api };
