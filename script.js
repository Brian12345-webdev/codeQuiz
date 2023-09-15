// do a function to ask the user if they want to start coding quiz
const startButton = document.getElementById('start-btn')
const previousButton = document.getElementById('previous-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('btn-answers')

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz)
previousButton.addEventListener('click', () => {
  currentQuestionIndex--
  setNextQuestion()
});
nextButton.addEventListener('click', () => {
  currentQuestionIndex++ 
  setNextQuestion()
});

function startQuiz() {
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQuestion()

questionContainer.classList.remove('hide');
  setNextQuestion()
}
function setNextQuestion() {
  resetState()

  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = 
  question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn-answers')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClasses(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct  
   setStatusClasses(document.body, correct)

   Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClasses(button, button.dataset.correct)
   })
   if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
   } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
   }}

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
  
  const questions = [
    { question: "What does CSS stand for?", 
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Cascade Special Sauce", correct: false },
        { text: "Coffee Shirt Stains", correct: false },
        { text: "Candy Shirt Stains", correct: false }
  ]},
    { question: "What does HTML stand for?",
      answers: [
        { text: "Have Three Massive Lollipops", correct: false },
        { text: "Hype Text Management Language", correct: false },
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hello This Markup Language", correct: false }
  ]},
    { question: "What is an example of a Math operator?",
      answers: [
        { text: "?", correct: false },
        { text: ".", correct: false },
        { text: ">", correct: true },
        { text: "!", correct: false }
  ]},
    { question: "What is an example of a conditional statement?",
      answers: [
      { text: "once if (true) { console.log('true'); }", correct: false },
      { text: "Console.log('false') { if (false); }", correct: false },
      { text: "What if (1) { console.log('1'); }", correct: false },
      { text: "if (0) { console.log('0'); }", correct: true }
  ]},
    { question: "What is an example of a loop statement?",
      answers: [
      { text: "for (let i = 0; i < 10; i++) { console.log(i); }", correct: true },
      { text: "for (let i = 0; i < 10; i++) { console.log(i); }", correct: false }
    ]}]

