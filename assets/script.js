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
let scoresLinkEl = document.getElementById("high-scores")
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
///says this is undefined, doesn't come up in console.log when initials
//are typed
//empty arrays for high scores for local storage scored
var userScores = {}
var savedScores;
let initialsEl = document.getElementById("initials")



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

    // load questions depending on index 
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
        // add feedback attributes
        feedbackEl.innerText = "Incorrect!"

    }
    else if (answerClicked.textContent === questions[questionIndex].correctAnswer) {
        grade.textContent = score
        score+=23
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
        //going through question indexes
        endQuiz()
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
    initials = initialsEl.value //issues with initials input, and adding new scores to old scores
    console.log(initials.length)// not giving errors because its not reading initials 
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
        if (JSON.parse(localStorage.getItem(highScores) != null))
            highScores = JSON.parse(localStorage.getItem(highScores))
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
//basically its not setting the storage properly
function showScores() {
    savedScores = JSON.parse(localStorage.getItem("highScores"))
    console.log(savedScores)
    //get old scores and add new scores 
    if (savedScores !== null) {
        var allScores = document.createElement("ol")
        allScores.className = "score-list"
        //cannot loop through an object, only an array
    }
    for (var i = 0; i < savedScores.length; i++) {
        var userName = savedScores[i].init
        var points = savedScores[i].scores
        var scoreOutput = document.createElement("li")
        scoreOutput.textContent = userName + ":" + points
        allScores.appendChild(scoreOutput)
    }
    printScores.appendChild(scoreOutput)
}

function clearScores() {
    window.localStorage.clear()
    printScores.setAttribute("class", "invisible")
}


//input initials with correct criteria
//press enter/click submit
//score is saved to highscores
//then go to highscore page
//you can clear highscore, share your score, or restart quiz



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