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
var score = 0
var currentQuestionIndex = 0
var time = questions.length * 20
var timer;

// DOM element references 
let startPageEl = document.getElementById("start-page")
let timerEl = document.getElementById("time")
let scoresLinkEl=document.getElementById("high-scores")
let startBtn = document.getElementById("startbtn")
let questionEl = document.getElementById("questions")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
var incorrect = document.getElementById("feedback-incorrect")
var correct =document.getElementById("feedback-correct")
let endPageEl = document.getElementById("end-page")
let initialsEl = document.getElementById("initials")
let submitBtn = document.getElementById("submit")
let scoresPageEl = document.getElementById("scores-page")
let restartBtn = document.getElementById("restart-quiz")
let clearBtn = document.getElementById("clear")


function startQuiz() {
    scoresLinkEl.hidden=true
    startPageEl.hidden = true
    scoresPageEl.hidden = true
    endPageEl.hidden = true
    questionEl.hidden = false

    timer = setInterval(function () {
        timerEl.textContent = time
        time--
    }, 1000)

    loadQuestions()
    
}


function loadQuestions() {
    let currentQuestion = questions[currentQuestionIndex]
    //load question title
    questionEl.children[0].textContent=currentQuestion.title
    //load question choices 
    questionEl.children[1].textContent=currentQuestion.answer1
    questionEl.children[2].textContent=currentQuestion.answer2
    questionEl.children[3].textContent=currentQuestion.answer3
    questionEl.children[4].textContent=currentQuestion.answer4
    answer1.addEventListener("click", checkAnswers)/
    answer2.addEventListener("click", checkAnswers)
    answer3.addEventListener("click", checkAnswers)
    answer4.addEventListener("click", checkAnswers)
    incorrect.hidden=true
    correct.hidden=true

    if (currentQuestionIndex < questions.length) {
        currentQuestion++
    }

    else {
        endPageEl.hidden = false
        questionEl.hidden = true
        startPageEl.hidden = true
        scoresPageEl.hidden=true
    }


    //start button takes you to first question
    //first question loads with choices
    //timer begins ticking down
    //when you click a choice, feedback is given, and you move to next question
}

function checkAnswers(event) {
    if (questionEl.children[1,2,3,4].textContent !== currentQuestion.correctAnswer) {
        time -= 10
        incorrect.hidden=false

    }
    else if (questionEl.children[1,2,3,4].textContent === currentQuestion.correctAnswer) {
        score++
        correct.hidden=false
    }
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

(startBtn).addEventListener("click", startQuiz)
//(submitBtn).addEventListener("click", loadScores)
(restartBtn).addEventListener("click", startPageEl.hidden = false)
//(clearBtn).addEventListener("click", clearScores)