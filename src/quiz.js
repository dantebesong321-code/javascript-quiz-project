class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const randomQsn = Math.floor(Math.random() * (i + 1));

      [this.questions[i], this.questions[randomQsn]] = [
        this.questions[randomQsn],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion();
    if (currentQuestion.answer === answer) {
      return this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
  if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
    return;
  }
  this.questions = this.questions.filter(q => q.difficulty === difficulty);
}



  averageDifficulty() {
    const total = this.questions.reduce((sum, question) => {
      return sum + question.difficulty;
    }, 0);

    return total / this.questions.length;
  }
}

// 1. constructor (text, choices, answer, difficulty)

// 2. getQuestion()

// 3. moveToNextQuestion()

// 4. shuffleQuestions()

// 5. checkAnswer(answer)

// 6. hasEnded()
