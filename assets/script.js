// do a function with a confirm prompt to ask the user if they want to start coding quiz
var startQuiz = document.querySelector("startQuiz");


function startQuiz() {
var yourCodeQuiz = confirm("Do you want to start your coding quiz?");
if (yourCodeQuiz === true) {
startQuiz();
} else {
alert("Come Back Soon!");
}
}
// button function if (confirm) button pressed start coding quiz.
// Add ""element".addEventListner("click", function);  to each question.
// answers that are right or wrong must be counted and a collected percentage total will be displayed.
// boolean answers that are right or wrong must be counted and a collected percentage total will be displayed.
// after an answer is clicked it will highlight..
// once an answer is clicked, the user will go to another button in bottom right of page "next" to go to the next question.
// timer will be displayed. In upper right corner of page.


// add questions to the page. Likely part of a carousel.
startQuiz.addEventListener("click", startQuiz);{
    var questionOne = document.querySelector("#questionOne");
    var questionTwo = document.querySelector("#questionTwo");
    var questionThree = document.querySelector("#questionThree");
    var questionFour = document.querySelector("#questionFour");
    var questionFive = document.querySelector("#questionFive");
    var questionSix = document.querySelector("#questionSix");
    var questionSeven = document.querySelector("#questionSeven");
    var questionEight = document.querySelector("#questionEight");
    var questionNine = document.querySelector("#questionNine");
    var questionTen = document.querySelector("#questionTen");
    var questionEleven = document.querySelector("#questionEleven");
    var questionTwelve = document.querySelector("#questionTwelve");
    var questionThirteen = document.querySelector("#questionThirteen");
    var questionFourteen = document.querySelector("#questionFourteen");
    var questionFifteen = document.querySelector("#questionFifteen");
}

