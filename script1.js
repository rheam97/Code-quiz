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
var time = 5
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
var incorrect = document.getElementById("feedback-incorrect")
var correct = document.getElementById("feedback-correct")
let endPageEl = document.getElementById("end-page")
let submitBtn = document.getElementById("submit")
let scoresPageEl = document.getElementById("scores-page")
let printScores = document.getElementById("scores")
let grade = document.getElementById("grade")
let restartBtn = document.getElementById("restart-quiz")
let clearBtn = document.getElementById("clear")
let initials = document.getElementById("initials").value ///says this is undefined, doesn't come up in console.log when initials
//are typed
//empty arrays for high scores for local storage scored
var highScores = []
var userScores={}
var savedScores;



//first display welcome message


//display a start button

//wait for a click on the start button

let index = 0;
// once start button clicked, display iTH question

        function loadQuestions(index) {
            // function to accept index
            //go to array and grab the question object with that index
            let question = questions[index];
            // in the question title ELEMENT display title
            questionTitleElement.textContent = 
            // in the choices ELEMENT display choices
            answer1.textContent=
            answer2.textContent=
            answer3.textContent=
            answer4.textContent=
                // add eventlistneres 
            answer1.addEventListener
            answer2.addEventListener
            answer3.addEventListener
            answer4.addEventListener
        }
        


            //eventlistener
                //get a reference to the answer choice
                // compare to correct answer
                // if wrong deduct points etc.
                //if right congratutale etc.
                // increase the question inde
                index++
                displayQuestions(index);
                // if question index is less than questions array size
                    //call display question function with the new index 
                //else finish the game ask for initials




//wait for answer


//flash feedback for half a second
//if incorrect, subtract time
//if correct add score

//move to next question

//once all questions are answered or time reaches 0

// go to end page

//have user submit initials and score

//save data 

//print onto page

//clear button to clear storage and page

//restart button to return to home page 