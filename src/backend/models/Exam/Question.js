class Question {
  constructor({ text, examId, options, required }) {
    this.text = text;
    this.examId = examId;
    this.options = options;
    this.required = required;
  }
}

export default Question;
