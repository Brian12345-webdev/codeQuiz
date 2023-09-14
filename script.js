// do a function with a confirm prompt to ask the user if they want to start coding quiz
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
  
  const questions = [
    {question: "What does "}
  ]


// button function if (confirm) button pressed start coding quiz.
// Add ""element".addEventListner("click", function);  to each question.
// answers that are right or wrong must be counted and a collected percentage total will be displayed.
// boolean answers that are right or wrong must be counted and a collected percentage total will be displayed.
// after an answer is clicked it will highlight..
// once an answer is clicked, the user will go to another button in bottom right of page "next" to go to the next question.
// timer will be displayed. In upper right corner of page.



