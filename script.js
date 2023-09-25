// do a function to ask the user if they want to start coding quiz
const startButton = document.getElementById('start-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById('btn-answers')
const finalScoreElement = document.getElementById('final-score')
let correctAnswerCount = 0
const scoreBoard = document.getElementById('score-board')
var secondsLeft = 10;
// const saveScoreBtn = document.getElementById('save-score-btn')
// const initialsElement = document.getElementById('initials')
// const saveHighScores = JSON.parse(localStorage.getItem('highScores')) || [];

// shuffle array of questions
let shuffleQuestions, currentQuestionIndex
//buttons
startButton.addEventListener('click', startQuiz)

previousButton.addEventListener('click', () => {
  currentQuestionIndex--
  setNextQuestion()
})
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  if (currentQuestionIndex === shuffleQuestions.length) {
    endQuiz()
  }

})
//startQuiz function
function startQuiz() {
  startButton.classList.add('hide')
  startTimer()
  shuffleQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainer.classList.remove('hide')
  setNextQuestion()
  //setting questions
}
function setNextQuestion() {
  resetState()

  showQuestion(shuffleQuestions[currentQuestionIndex])
}
//show question function with if statement
function showQuestion(question) {
  questionElement.innerText =
    question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('.btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
//reset state function hide buttons
function resetState() {
  clearStatusClasses(document.body)
  previousButton.classList.add('hide')
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
//selecting target answer from array remove hides
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClasses(document.body, correct)
  if (correct) {
    correctAnswerCount++
  }
  setStatusClasses(document.body, correctAnswerCount)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClasses(button, button.dataset.correct)
  })
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    previousButton.classList.remove('hide')
  } else {
    displayScore(correctAnswerCount.toString() + "/" + shuffleQuestions.length.toString())
    correctAnswerCount = 0
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    secondsLeft = 0
  }
}


//answer status
function setStatusClasses(element, correct) {
  clearStatusClasses(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('incorrect')
  }
}

function clearStatusClasses(element) {
  element.classList.remove('correct')
  element.classList.remove('incorrect')
}


//questions array
const questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true, points: 1 },
      { text: "Cascade Special Sauce", correct: false, points: 0 },
      { text: "Coffee Shirt Stains", correct: false, points: 0 },
      { text: "Candy Shirt Stains", correct: false, points: 0 },
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Have Three Massive Lollipops", correct: false, points: 0 },
      { text: "Hype Text Management Language", correct: false, points: 0 },
      { text: "Hyper Text Markup Language", correct: true, points: 1 },
      { text: "Hello This Markup Language", correct: false, points: 0 }
    ]
  },
  {
    question: "What is an example of a Math operator?",
    answers: [
      { text: "?", correct: false, points: 0 },
      { text: ".", correct: false, points: 0 },
      { text: ">", correct: true, points: 1 },
      { text: "!", correct: false, points: 0 }
    ]
  },
  {
    question: "What is an example of a conditional statement?",
    answers: [
      { text: "once if (true) { console.log('true'); }", correct: false, points: 0 },
      { text: "Console.log('false') { if (false); }", correct: false, points: 0 },
      { text: "What if (1) { console.log('1'); }", correct: false, points: 0 },
      { text: "if (0) { console.log('0'); }", correct: true, points: 1 }
    ]
  },
  {
    question: "What is an example of a loop statement?",
    answers: [
      { text: "for (let i = 0; i < 10; i++) { console.log(i); }", correct: true, points: 1 },
      { text: "while for (let i = 0; i < 10; i++) { console.log(i); }", correct: false, points: 0 }
    ]
  }]


const timer = document.querySelector(".timer");



function startTimer() {
  
  
  var timerInterval = setInterval(function () {
    secondsLeft--;

    timer.innerHTML = secondsLeft
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      startButton.innerText = "Restart"
      startButton.classList.remove('hide')
      timer.innerHTML = "0"
    }
  }, 1000);
}

//initialize the score
let score = 0;

function checkAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct) {
    incrementScore(11);
  }

}
//display score
function displayScore() {
  const scoreBoard = document.querySelector(".score-board");
  scoreBoard.innerHTML = score + " points"
  if (score === 5) {
    clearStatusClasses(scoreBoard.innerHTML);
    clearStatusClasses(scoreClass + " correct " + score + " incorrect");
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
}