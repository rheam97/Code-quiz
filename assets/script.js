//questions are objects in array
//every object has the values for title, choices, answer
const questions = [
    {
        title: "Commonly used data types do not include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "alerts"
    },
    {
        title: "question 2",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",
        correctAnswer: "b"
    },
    {
        title: "question 3",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",
        correctAnswer: "a"
    },
    {
        title: "question 4",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",
        correctAnswer: "c"
    },
    {
        title: "question 5",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",
        correctAnswer: "d"
    }
]
//global variables at top
var currentQuestionIndex= 0
var time= questions.length*20
var timer;

 // DOM element references 
let startPageEl =document.getElementById("#start-page")
let timerEl =document.getElementById("#time")
let startBtn =document.getElementById("#startbtn")
let questionEl= document.getElementById("#questions")
let answer1 = document.getElementById("#answer1")
let answer2 = document.getElementById("#answer2")
let answer3 = document.getElementById("#answer3")
let answer4 = document.getElementById("#answer4")
let endPageEl=document.getElementById("#end-page")
let initialsEl= document.getElementById("#initials")
let submitBtn =document.getElementById("#submit")
let scoresPageEl=document.getElementById("#scores-page")
let restartBtn =document.getElementById("#restart-quiz")
let clearBtn =document.getElementById("#clear")



function start() {
    questionEl.style.display= "none"
    endPageEl.style.display="none"


}

function takeQuiz() {
//start button takes you to first question
//first question loads with choices
//timer begins ticking down
//when you click a choice, feedback is given, and you move to next question
}

function checkAnswers() {
// add a listener on the buttons
// document.getElementByID("answer1").addEventListener("click", evaluateAnswer)
// function evaluateAnswer() {
// you can get the value of the click using "this"
// if(this.textValue === questions[currentIndex].correctAnswer) {
//  do correct answer things  
//  increase the score
//  increment the currentIndex
//  check to see if currentIndex is = question.length
//  rerun the question render function
// } else { do incorrect answer things }
//} //if choice is wrong then lose 10 seconds on timer
}

function loadScores() {

}
function clearScores() {

}
// uqestions function
//start quiz function
// for example answer1.textContent = questions[currentIndex].answer1
//click start to begin quiz



// to make and element hidden or visible dynamically
// element.style.display = "none"
// element.style.visibility = "hidden"
// element.setAttribute("class", "whatever the class is")
// also removeAttribute



//once there's no more questions or no more time, timer stops and you go to end page
//end page appears
//input initials with correct criteria
//press enter/click submit
//score is saved to highscores
//then go to highscore page
//you can clear highscore, share your score, or restart quiz

(startBtn),onclick(takeQuiz)
(submitBtn).onclick(loadScores)
(restartBtn).onclick(start)
(clearBtn).onclick(clearScores)