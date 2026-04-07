class Quiz {
  // 1. constructor (text, choices, answer, difficulty)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  // 3. moveToNextQuestion()

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }
  // 5. checkAnswer(answer)

  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }
  // 6. hasEnded()
  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (q) => q.difficulty === difficulty,
      );
    }
  }

  averageDifficulty() {
    return (
      this.questions.reduce((sum, q) => sum + q.difficulty, 0) /
      this.questions.length
    );
  }
}
