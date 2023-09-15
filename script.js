// do a function to ask the user if they want to start coding quiz
const startButton = document.getElementById('start-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById('btn-answers')
const finalScoreElement = document.getElementById('final-score')

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
//show question function with if satatement
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
}}
//selecting target answer from array remove hides
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct  
   setStatusClasses(document.body, correct)

   Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClasses(button, button.dataset.correct)
   })
   if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    previousButton.classList.remove('hide')
   } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
   }}
   
//answer status
function setStatusClasses(element, correct) {
  
    clearStatusClasses(element)
    if (correct) {
      element.classList.add('correct')
      + score++
    } else {
      element.classList.add('incorrect')
    }
  }
//increment score function
function incrementScore(num) {
  score +=num
  finalScoreElement.innerText = score
}

  function clearStatusClasses(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
  }

  
  //questions array
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
      { text: "while for (let i = 0; i < 10; i++) { console.log(i); }", correct: false }
    ]}]

    
    const timer = document.querySelector(".timer");
    function startTimer() {
      console.log("starttimer");
      if (timer.innerHTML
        === "00:00:00") {
        timer.innerHTML = "00:00:00";
      }
      var secondsLeft = 60;
      var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        timer.innerHTML = secondsLeft
        if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          startButton.innerText = "Restart"
          startButton.classList.remove('hide')

        }
      }, 1000);
    }

    const scoreBoard = document.querySelector(".score-board");
    function sendMessage() {
       
      var message = document.getElementById("message");
      message.textContent = "";
      message.appendChild(document.createTextNode("Your score is: " + scoreBoard.textContent));
      message.appendChild(document.createElement("br"));}






//     // set timer
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var seconLeft = 5;

// function setTime() {
  
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " ";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// setTime();