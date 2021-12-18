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
var questionIndex = 0
var time = 100
var timer;

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
var incorrect = document.getElementById("feedback-incorrect")
var correct = document.getElementById("feedback-correct")
let endPageEl = document.getElementById("end-page")
let initialsEl = document.getElementById("initials")
let submitBtn = document.getElementById("submit")
let scoresPageEl = document.getElementById("scores-page")
let printScores =document.getElementById("scores")
let grade = document.getElementById("grade")
let restartBtn = document.getElementById("restart-quiz")
let clearBtn = document.getElementById("clear")
let initials = document.getElementById("initials").value ///says this is undefined

var highscores =[]
var userScores;
var savedScores;
let currentQuestion = questions[questionIndex]

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
    loadQuestions(currentQuestion)

}

function loadQuestions() {
    //hide start page
    startPageEl.setAttribute("class", "invisible")
    //let currentQuestion = questions[currentQuestionIndex] why didn't this work?
    //questions.forEach((element) => function () {
    //for (let currentQuestionIndex=0; currentQuestionIndex< questions.length; currentQuestionIndex++) {
    //load question title
    title.textContent = currentQuestion.title
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

    //   answer1.addEventListener("click", questionIncrement)
    //   answer2.addEventListener("click", questionIncrement)
    //  answer3.addEventListener("click", questionIncrement)
    //  answer4.addEventListener("click", questionIncrement)

}

function checkAnswers() {
    console.log(questionIndex)
    //when you click a choice, feedback is given, and you move to next question
    if (this.textContent !== currentQuestion.correctAnswer) {
        time -= 10
        // add feedback attributes
        incorrect.innerText = "Incorrect!"
        correct.hidden = true
    }
    if (this.textContent === currentQuestion.correctAnswer) {
        grade.textContent = score
        score++
        correct.innerText = "Correct!"
        incorrect.hidden = true
    }

    //flicker feedback for half a second
    incorrect.setAttribute("class", "visible")
    correct.setAttribute("class", "visible")
    setInterval(function () {
        incorrect.setAttribute("class", "invisible")
        correct.setAttribute("class", "invisible")
    }, 500)

    //*****move to next question 
    if (this) { //its incrementing the index, but not changing/iterating through the values 
        questionIndex++
        if (questionIndex < questions.length) {
            loadQuestions(currentQuestion)
        }
        //once there's no more questions, go to end page
        //end page appears
        else if (questionIndex === questions.length) { //?? also ending quiz before
            //going through question indexes
            endQuiz()
        }
    }//??not loading next question



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
//function questionIncrement() {
// currentQuestionIndex++//??not loading next question

// if (currentQuestionIndex < questions.length) {
//   loadQuestions(currentQuestion) }
//once there's no more questions or no more time, timer stops and you go to end page
//end page appears
// else if (currentQuestionIndex == questions.length) { //?? also ending quiz before
//going through question indexes
// endQuiz()}}

function endQuiz() {
    //stop timer
    clearInterval(timer)
    timerEl.textContent = time
    //show end screen
    questionEl.setAttribute("class", "invisible")
    endPageEl.removeAttribute("class", "invisible")
    endPageEl.setAttribute("class", "visible")
}

function sendScores(initials, score) {
    endPageEl.removeAttribute("class", "visible")
    endPageEl.setAttribute("class", "invisible")
    scoresPageEl.removeAttribute("class", "invisible")
    scoresPageEl.setAttribute("class","visible")
    // initials criteria 
    if (initials==="") { //not working from here, not saving initials or score and not saving old scores
        alert("You must input initials to save your score.")
        return
    }

    else if (initials.length>2) {
        alert("Your initials can only contain two characters.")
        return
    }

    else {
        userScores = {
            initials:initials,
            scores:score
        }

        highscores.push(userScores)
        localStorage.setItem("userScores",JSON.stringify(highscores))
    }
    showScores()
}
//basically its not setting the storage properly
function showScores() {
   savedScores= JSON.parse(localStorage.getItem("userScores"))
   if (savedScores!=null) {
       var totalScores= document.createElement("ol")
       totalScores.className="score-list"

       for( var i=0; i<savedScores.length;i++) {
           var userName= savedScores[i].initials
           var points =savedScores[i].scores
           var scoreOutput =document.createElement("li")
        scoreOutput.textContent= userName + ":" + points
        totalScores.appendChild(scoreOutput)
       }
       printScores.appendChild(scoreOutput)
   }

    
}
function clearScores() {
    window.localStorage.clear()
    printScores.setAttribute("class", "invisible")
}

// for example answer1.textContent = questions[currentIndex].answer1



// to make and element hidden or visible dynamically
// element.style.display = "none"
// element.style.visibility = "hidden"
// element.setAttribute("class", "whatever the class is")
// also removeAttribute




//input initials with correct criteria
//press enter/click submit
//score is saved to highscores
//then go to highscore page
//you can clear highscore, share your score, or restart quiz



//start button takes you to first question
startBtn.addEventListener("click", startQuiz)
//submit sends and loads scores
submitBtn.addEventListener("click", sendScores)
//restart refreshes DOM
restartBtn.addEventListener("click", function() {
location.href="index.html"})
//clear 
clearBtn.addEventListener("click", clearScores)