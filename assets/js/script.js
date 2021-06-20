const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
var questionElement = document.querySelector('question')
const answerButtonEl = document.getElementById('answer-container')
const answers = document.getElementById('ans-btn')
const quizTitle = document.getElementById('quiz-title')



startButton.addEventListener('click', startGame)
answerButtonEl.addEventListener('click', checkAnswer)


function startGame() {
    console.log(questions[0])
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    answerButtonEl.classList.remove('hide')
    showQuestion()
    timer()
}

function timer() {
    var sec = 60;
    var timer = setInterval(function () {
        document.getElementById('timerDisplay').innerHTML = '00:' + sec; sec--;
        if (sec = 0) {
            clearInterval(timer);
            // gameOver() ??
        }
        // check answer
        // if incorrect, deduct 10 sec off timer
    }, 1000);
}

function showQuestion() {



    // document.getElementById("").innerHTML = questions[index].question;
    // questionElement.innerText = question.question
    // questions[0].question
    for (var i = 0; i < questions.length; i++) {
        var questionElement(questions[i].answers)
    }
    // question.answer.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.textbutton.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', chooseAnswer)
    //     answerButtonEl.appendChild(button)
    // })
}

function chooseAnswer(e) {

}

function checkAnswer() {

}









// ** END OF GAME FUNCTIONS **


// QUIZ QUESTIONS 
const questions = [
    {
        question: 'Commonly used data type DO NOT include: _______.',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false },
        ]
    },
    {
        question: 'the condition in an if/else statement is enclosed within ________.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curle brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'arrays in Java Script are used to store _________.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'string values must be enclosed within ________ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A useful tool for debugging during development for printing content to the debugger is _______',
        answers: [
            { text: 'GitBash/Terminal', correct: false },
            { text: 'console', correct: true },
            { text: 'Java Script', correct: false },
            { text: 'for loops', correct: false }
        ]
    }
];
// END OF QUESTIONS