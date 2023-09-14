// do a function with a confirm prompt to ask the user if they want to start coding quiz
const startButton = document.getElementById('start-btn');
const previousButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const timerEl = document.getElementById('timer');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('btn-answers');

let shuffleQuestions, currentQuestionIndex;
startButton.addEventListener('click', startQuiz);
previousButton.addEventListener('click', () => {
  currentQuestionIndex--
  setNextQuestion()
});
nextButton.addEventListener('click', () => {
  currentQuestionIndex++ 
  setNextQuestion()
});

function startQuiz() {
  startButton.classList.add('hide');
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.title;
  question.alternatives.forEach((choice, index) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.classList.add('btn-answers');
    button.setAttribute('data-index', index);
    button.addEventListener('click', checkAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// button function if (confirm) button pressed start coding quiz.
// Add ""element".addEventListner("click", function);  to each question.
// answers that are right or wrong must be counted and a collected percentage total will be displayed.
// boolean answers that are right or wrong must be counted and a collected percentage total will be displayed.
// after an answer is clicked it will highlight..
// once an answer is clicked, the user will go to another button in bottom right of page "next" to go to the next question.
// timer will be displayed. In upper right corner of page.


// add questions to the page. 
let questionOne = {
    title: "What does the 'let' declaration do?",
    alternatives: ["It is a function", "It declares a variable that is bock scoped in JS", "It is an element", "It acts similarly like an event listener"],
    correctAnswer: 1
};
// function to display the question
function displayQuestion(index) {
let titleDiv = document.getElementById('title');
titleDiv.textContent = questionOne.title;
}





function startQuiz() {
    // Start the timer
    let time = 60; // Set the initial time value
  
    // Display the first question
    displayQuestion(0); // Assuming you have a function to display questions
  
    // Listen for user input or button click events
    document.addEventListener('click', function(event) {
      if (event.target.matches('.answer-button')) {
        const selectedAnswer = event.target.textContent;
        checkAnswer(selectedAnswer); // Assuming you have a function to check the user's answer
        displayNextQuestion(); // Assuming you have a function to display the next question
      }
    });
  
    // Update the timer every second
    const timerInterval = setInterval(function() {
      time--;
      // Update the timer display
      document.getElementById('timer').textContent = time;
  
      // Check if the timer has reached 0
      if (time === 0) {
        endQuiz(); // Assuming you have a function to end the quiz
        clearInterval(timerInterval); // Stop the timer
      }
    }, 1000);
  }