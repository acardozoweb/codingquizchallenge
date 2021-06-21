// VARIABLES 

var header = document.getElementById("header");
var startButton = document.getElementById("start-btn");
var startDisplay = document.getElementById("quiz-title");
var quizDisplay = document.querySelector(".quizDisplay");
var questionDisplay = document.getElementById("questionDisplay");
var displayScore = document.getElementById("high-score");
var ansbtn0 = document.getElementById("ans-btn0");
var ansbtn1 = document.getElementById("ans-btn1");
var ansbtn2 = document.getElementById("ans-btn2");
var ansbtn3 = document.getElementById("ans-btn3");
var result = document.getElementById("right/wrong");
var finalScore = document.querySelector(".your-score")
var headerSeeScores = document.getElementById("see-scores");
var gameOver = document.querySelector(".gameOver");
var initials = document.getElementById("initials");
var submitInitBtn = document.getElementById("submit-init");
var highScores = document.getElementById("scores");
var clearHiScores = document.getElementById("clear");
var questionCounter = 0;
var timer = document.getElementById("timer");
var timeLeft = 60;


// QUIZ QUESTIONS 

const questions = [
    {
        question: 'Commonly used data types DO NOT include: _______.',
        answers: [
            '1: strings',
            '2: booleans',
            '3: numbers',
            '4: alerts'
        ],
        rightAnswer: '4: alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within ________.',
        answers: [
            '1: quotes',
            '2: curle brackets',
            '3: parentheses',
            '4: square brackets'
        ],
        rightAnswer: '3: parentheses'
    },
    {
        question: 'Arrays in Java Script are used to store _________.',
        answers: [
            '1: numbers and strings',
            '2: other arrays',
            '3: booleans',
            '4: all of the above',
        ],
        rightAnswer: '4: all of the above'
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables.',
        answers: [
            '1: commas',
            '2: curly brackets',
            '3: quotes',
            '4: parentheses',
        ],
        rightAnswer: '3: quotes'
    },
    {
        question: 'A useful tool for debugging during development and debugging for printing content to the debugger is _______.',
        answers: [
            '1: GitBash/Terminal',
            '2: console',
            '3: Java Script',
            '4: for loops',
        ],
        rightAnswer: '2: console'
    }
];
// // END OF QUESTIONS 


// ** GAME FUNCTIONS ** 

// timer
function countdown() {
    var timePassed = setInterval(function () {
        if (timeLeft <= 0 || questionCounter === questions.length) {
            timer.textContent = "";
            clearInterval(timePassed);
            quizDisplay.style.display = "none";
            gameOver.style.display = "block";
            finalScore.textContent = timeLeft;
        } else {
            timer.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
};

// show question
function nextQuestion() {
    
    questionDisplay.innerText = questions[questionCounter].question;
    button0.innerText = questions[questionCounter].answers[0]; 
    button1.innerText = questions[questionCounter].answers[1];
    button2.innerText = questions[questionCounter].answers[2];
    button3.innerText = questions[questionCounter].answers[3];
};

// checking for the right answer

function choose0() { checkAnswer(0) };
function choose1() { checkAnswer(1) };
function choose2() { checkAnswer(2) };
function choose3() { checkAnswer(3) };

function checkAnswer(choice) {
    // if the rightAnswer is what the user chose
    if (questions[questionCounter].rightAnswer === questions[questionCounter].answers(choice)) {
        // tell them they're right
        result.innerHTML = "That's right!";
        // if not, say incorrect and deduct 10 seconds from timer
    } else {
        result.innerHTML = "Incorrect :(";
        timeLeft -= 10;
    }
    // increment to the next question if there areany left in the array
    questionCounter++;
    if (questionCounter < questions.length) {
        showQuestion();
    }
};




// EVENT LISTENERS

//click start button
//start timer
startButton.addEventListener("click", countdown)
// hide startDisplay and quizDisplay

startButton.addEventListener("click", function () {
    document.querySelector(".startDisplay").style.display = "none";
    quizDisplay.style.display = "block";
})

// show first question
startButton.addEventListener("click", showQuestion);

// answer buttons
button0.addEventListener("click, choose0");
button1.addEventListener("click, choose1");
button2.addEventListener("click, choose2");
button3.addEventListener("click, choose3");














// function startGame() {
//     // console.log(questions[i])
//     startButton.classList.add('hide')
//     questionContainerEl.classList.remove('hide')
//     answerButtonEl.classList.remove('hide')
//     // showQuestion()
//     showQuestion()
//     timer()

// }

// function endGame() {

// }


// function timer() {
// //  let timeLeft = 60

// //  let timeInterval = setInterval(function() {
// //      if (timeLeft > 0) {
// //          timer.textContent = 'Timer: ' + timeLeft
// //          timeLeft--
// //          console.log(timeLeft)
// //         }
// //      }, 1000)
//  }


// function showQuestion() {

//     // question.innerText = questions[questionCounter].question;
//     // ansbtn0.innerText = questions[questionCounter].answers[0];
//     // ansbtn1.innerText = questions[questionCounter].answers[1];
//     // ansbtn2.innerText = questions[questionCounter].answers[2];
//     // ansbtn3.innerText = questions[questionCounter].answers[3];

//     for (var i=0; i< questions.length; i++) {
//         document.getElementById('question').innerHTML = (questions[i].question)
//         document.getElementById('ans-btn').innerHTML = (questions[i].answers[0].text)
//         document.getElementById('ans-btn').innerHTML = (questions[i].answers[1].text)
//         document.getElementById('ans-btn').innerHTML = (questions[i].answers[2].text)
//         document.getElementById('ans-btn').innerHTML = (questions[i].answers[3].text)
//     }




// }     

// function chooseAnswer() {


// }



//     // for (var i = 0; i < questions.length; i++) {

//     // }


//     // document.getElementById("").innerHTML = questions[index].question;
//     // questionElement.innerText = question.question
//     // questions[0].question

//     // // loop through array of questions

//     //     // display current question & answers

//     //     var answer = question(questions[i].answers)

//     // question.answer.forEach(answer => {
//     //     const button = document.createElement('button')
//     //     button.innerText = answer.textbutton.classList.add('btn')
//     //     if (answer.correct) {
//     //         button.dataset.correct = answer.correct
//     //     }
//     //     button.addEventListener('click', chooseAnswer)
//     //     answerButtonEl.appendChild(button)
//     // })




// // CHECK ANSWER

// function ans1() { checkAnswer(0) };
// function ans2() { checkAnswer(1) };
// function ans3() { checkAnswer(2) };
// function ans4() { checkAnswer(3) };

// function checkAnswer(choice) {
//     if (questions[questionCounter].correctAnswer === questions[questionCounter].answers[choice]) {
//         result.innerHTML = "That's right!";
//     } else {
//         result.innerHTML = "Incorrect :(";
//     }

//     questionCounter++;

//     if (questionCounter < questions.length) {
//         showQuestion();
//     }

// };
// //end of check answer fctn



// function saveScore() {

// }

// function showScore() {

// }


// // start quiz
// // start timer - save for later
// // end timer  - save for later
// // end quiz 
// // make questions
// // make answers
// // check answer
// // set local storage - save for later
// // get local storage - save for later
// // make high scores
// // clear high scores



// // ** END OF GAME FUNCTIONS **


// // EVENT LISTENERS
// //Start Button
// startButton.addEventListener('click', startGame)

// answerButtonEl.addEventListener('click', checkAnswer)
// // Answer buttons
