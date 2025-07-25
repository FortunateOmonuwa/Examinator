import { api } from "./api";

const CreateExam = async (examinerId, examData) => {
  try {
    let response = await api.post(`/api/exam/${examinerId}`, examData);
    return response.data.response;
  } catch (error) {
    // console.log(error);
  }
};

const GetExamByID = async (examId) => {
  try {
    let response = await api.get(`/api/exam/${examId}`);
    return response.data.response;
  } catch (error) {
    // console.log(error);
  }
};

const DeleteExam = async (examId) => {
  try {
    let response = await api.delete(`/api/exam/${examId}`);
    return response.data.response;
  } catch (error) {
    // console.log(error);
  }
};

const GetAllExams = async (examinerId) => {
  try {
    let response = await api.get(`/api/exam/exams/${examinerId}`);

    return response.data.response.body || [];
  } catch (error) {
    // console.log(error);
    return [];
  }
};

export { CreateExam, GetExamByID, DeleteExam, GetAllExams };
