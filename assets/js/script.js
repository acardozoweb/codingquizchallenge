const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
var questionElement = document.querySelector('question')
const answerButtonEl = document.getElementById('answer-container')
const answers = document.getElementById('ans-btn')
const quizTitle = document.getElementById('quiz-title')
var ansbtn0 = document.getElementById("ans-btn0")
var ansbtn1 = document.getElementById("ans-btn1")
var ansbtn2 = document.getElementById("ans-btn2")
var ansbtn3 = document.getElementById("ans-btn3")


var timeLeft = 60;
var currentQUestionIndex = 0;
var questionCounter = 0;



// QUIZ QUESTIONS 
const questions = [
    {
        question: 'Commonly used data types DO NOT include: _______.',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false },
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within ________.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curle brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in Java Script are used to store _________.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A useful tool for debugging during development and debugging for printing content to the debugger is _______.',
        answers: [
            { text: 'GitBash/Terminal', correct: false },
            { text: 'console', correct: true },
            { text: 'Java Script', correct: false },
            { text: 'for loops', correct: false }
        ]
    }
];
// END OF QUESTIONS 



// ** GAME FUNCTIONS ** 

function startGame() {
    // console.log(questions[i])
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    answerButtonEl.classList.remove('hide')
    // showQuestion()
    showQuestion()
    timer()

}

function endGame() {

}


function timer() {
//  let timeLeft = 60

//  let timeInterval = setInterval(function() {
//      if (timeLeft > 0) {
//          timer.textContent = 'Timer: ' + timeLeft
//          timeLeft--
//          console.log(timeLeft)
//         }
//      }, 1000)
 }


function showQuestion() {

    question.innerText = questions[questionCounter].question;
    ansbtn0.innerText = questions[questionCounter].answers[0];
    ansbtn1.innerText = questions[questionCounter].answers[1];
    ansbtn2.innerText = questions[questionCounter].answers[2];
    ansbtn3.innerText = questions[questionCounter].answers[3];

    // for (var i=0; i< questions.length; i++) {
    //     document.getElementById('question').innerHTML = (questions[i].question)
    //     document.getElementById('ans-btn').innerHTML = (questions[i].answers[0].text)
    //     document.getElementById('ans-btn').innerHTML = (questions[i].answers[1].text)
    //     document.getElementById('ans-btn').innerHTML = (questions[i].answers[2].text)
    //     document.getElementById('ans-btn').innerHTML = (questions[i].answers[3].text)
    // }

   
    

}     

function chooseAnswer() {


}


    
    // for (var i = 0; i < questions.length; i++) {

    // }

      
    // document.getElementById("").innerHTML = questions[index].question;
    // questionElement.innerText = question.question
    // questions[0].question
    
    // // loop through array of questions

    //     // display current question & answers

    //     var answer = question(questions[i].answers)

    // question.answer.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.textbutton.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', chooseAnswer)
    //     answerButtonEl.appendChild(button)
    // })




// CHECK ANSWER
function checkAnswer(choice) {
    if (questions[questionCounter].correctAnswer === questions[questionCounter].answers[choice]) {
        result.innerHTML = "That's right!";
    } else {
        result.innerHTML = "Incorrect :(";
    }

    function ans1() { checkAnswer(0) };
    function ans2() { checkAnswer(1) };
    function ans3() { checkAnswer(2) };
    function ans4() { checkAnswer(3) };

    questionCounter++;

    if (questionCounter < questions.length) {
        showQuestion();
    }

};
//end of check answer fctn



function saveScore() {

}

function showScore() {

}


// start quiz
// start timer - save for later
// end timer  - save for later
// end quiz 
// make questions
// make answers
// check answer
// set local storage - save for later
// get local storage - save for later
// make high scores
// clear high scores



// ** END OF GAME FUNCTIONS **


// EVENT LISTENERS
//Start Button
startButton.addEventListener('click', startGame)

answerButtonEl.addEventListener('click', checkAnswer)
// Answer buttons
