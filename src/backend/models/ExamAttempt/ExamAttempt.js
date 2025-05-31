class ExamAttempt {
  constructor({
    id,
    examId,
    studentId,
    responderEmail,
    responderName,
    startTime,
    submittedAt,
    totalScore,
    answers,
  }) {
    this.id = id;
    this.examId = examId;
    this.studentId = studentId;
    this.responderEmail = responderEmail;
    this.responderName = responderName;
    this.startTime = startTime;
    this.submittedAt = submittedAt;
    this.totalScore = totalScore;
    this.answers = answers;
  }
}

export default ExamAttempt;
