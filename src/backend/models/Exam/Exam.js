class Exam {
  constructor({
    title,
    description,
    link,
    creatorId,
    stipulatedTime,
    enforceTimeLimit,
    questions,
  }) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.creatorId = creatorId;
    this.stipulatedTime = stipulatedTime;
    this.enforceTimeLimit = enforceTimeLimit;
    this.questions = questions;
  }
}

export default Exam;
