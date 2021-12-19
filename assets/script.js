//questions are objects in array
//every object has the values for title, choices, answer
const questions = [
    {
        title: "question 1",
        answer1: "a",
        answer2: "b",
        answer3: "c",
        answer4: "d",
        correctAnswer: "a"
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
var questionIndex = 0
var time = 90
var timer;
let currentQuestion;

// DOM element references 
let startPageEl = document.getElementById("start-page")
let timerEl = document.getElementById("time")
let hsBtnEl = document.getElementById("high-scores")
let startBtn = document.getElementById("startbtn")
let questionEl = document.getElementById("questions")
let title = document.getElementById("question-title")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
var feedbackEl = document.getElementById("feedback")
let endPageEl = document.getElementById("end-page")
let submitBtn = document.getElementById("submit")
let scoresPageEl = document.getElementById("scores-page")
let printScores = document.getElementById("scores")
let grade = document.getElementById("grade")
let restartBtn = document.getElementById("restart-quiz")
let clearBtn = document.getElementById("clear")
let initialsEl = document.getElementById("initials")

//empty objects for high scores for local storage 
var userScores = {}
var savedScores;




function startQuiz() {
    //timer begins ticking down
    timer = setInterval(function () {
        timerEl.textContent = time
        time--

        if (time <= 0) {
            endQuiz()
        }
    }, 1000)

    questionEl.removeAttribute("class", "invisible")
    questionEl.setAttribute("class", "")
    loadQuestions(questionIndex)

}


function loadQuestions(questionIndex) {
    console.log(questionIndex)
    //hide start page
    startPageEl.setAttribute("class", "invisible")

    currentQuestion = questions[questionIndex]

    //load questions depending on index 
    title.textContent = currentQuestion.title;
    //load question choices 
    answer1.textContent = currentQuestion.answer1
    answer2.textContent = currentQuestion.answer2
    answer3.textContent = currentQuestion.answer3
    answer4.textContent = currentQuestion.answer4


    //add event listener to answers 
    answer1.addEventListener("click", checkAnswers)
    answer2.addEventListener("click", checkAnswers)
    answer3.addEventListener("click", checkAnswers)
    answer4.addEventListener("click", checkAnswers)

}

function checkAnswers(event) {
    var answerClicked = event.target
    //when you click a choice, feedback is given, and you move to next question
    if (answerClicked.textContent !== questions[questionIndex].correctAnswer) {
        time -= 10
        // add appropriate feedback text
        feedbackEl.innerText = "Incorrect!"

    }
    else if (answerClicked.textContent === questions[questionIndex].correctAnswer) {
        score += 23
        grade.textContent = score
        feedbackEl.innerText = "Correct!"

    }

    //flicker feedback for half a second

    feedbackEl.setAttribute("class", "visible")
    setInterval(function () {
        feedbackEl.setAttribute("class", "invisible")
    }, 500)

    //increment index and call the function again with next index
    questionIndex++

    if (questionIndex < questions.length) {
        loadQuestions(questionIndex)

    }
    //once there's no more questions, go to end page
    //end page appears
    else if (questionIndex === questions.length) {
      
        endQuiz()
    }
}


function endQuiz() {
    //stop timer
    clearInterval(timer)
    timerEl.textContent = time
    //show end screen
    questionEl.setAttribute("class", "invisible")
    endPageEl.removeAttribute("class", "invisible")
    endPageEl.setAttribute("class", "visible")
    scoresPageEl.setAttribute("class", "invisible")
}


function sendScores(initials, score) {
    initials = initialsEl.value 

    endPageEl.removeAttribute("class", "visible")
    endPageEl.setAttribute("class", "invisible")
    scoresPageEl.removeAttribute("class", "invisible")
    scoresPageEl.setAttribute("class", "visible")

    // initials criteria 

    if (initials.length = 0 || initials.length > 3) {
        alert("You must input  max 3-letter initials to save your score.")
        endQuiz()
    }
    // if satisfied, send to localstorage
    else {
        var highScores;
        if (JSON.parse(localStorage.getItem("highScores") !== null))
            highScores = JSON.parse(localStorage.getItem("highScores"))
        else
            highScores = []

        var userScores = {
            init: initials,
            scores: score
        };

        highScores.push(userScores)
        localStorage.setItem("highScores", JSON.stringify(highScores))
    }
    showScores()

}

function showScores() {
    highScores = JSON.parse(localStorage.getItem("highScores"))
    console.log(savedScores)
    //get old scores and add new scores to HTML
    if (highScores !== null) {
        var allScores = document.createElement("ol")
        allScores.className = "score-list"
        

        for (var i = 0; i < highScores.length; i++) {
            var userName = highScores[i].init
            var points = highScores[i].scores
            var scoreOutput = document.createElement("li")
            scoreOutput.textContent = userName + ":" + points
            allScores.appendChild(scoreOutput)
            printScores.appendChild(scoreOutput)
        }

    }
}

function clearScores() {
    window.localStorage.clear()
    printScores.setAttribute("class", "invisible")
}

//start button takes you to first question
startBtn.addEventListener("click", startQuiz)
//submit sends and loads scores
submitBtn.addEventListener("click", function () {
    sendScores(initials, score)
})
//restart refreshes DOM
restartBtn.addEventListener("click", function () {
    location.href = "index.html"
})
//clear empties storage and clears score list
clearBtn.addEventListener("click", clearScores)

//view hs to view high scores 
hsBtnEl.addEventListener("click", function() {
    startPageEl.setAttribute("class", "invisible")
    questionEl.setAttribute("class", "invisible")
    endPageEl.setAttribute("class", "invisible")
    scoresPageEl.removeAttribute("class", "invisible")
    scoresPageEl.setAttribute("class", "visible")
    showScores()
})