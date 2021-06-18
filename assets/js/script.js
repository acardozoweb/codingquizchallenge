// VARIABLES
const startButton = document.getElementById('start-btn')
const questioncontainerEl = document.getElementById('question-container')

// QUESTIONS / ANSWERS
const questions = [
    { question: 'the sun rises in the _____',
    answers: [ 
        {text: 'north', correct: false},
        {text: 'south', correct: false},
        {text: 'east', correct: true},
        {text: 'west', correct: false},
    ]},
    { question: 'the last indian residential school in canada closed in what year?',
    answers: [
        {text: '1956', correct: false},
        {text: '1938', correct: false},
        {text: '1973', correct: false},
        {text: '1996', correct: true}
    ]},
    { question: 'who did john goodman play in the big lebowski?',
    answers: [
        {text: 'Donnie', correct: false},
        {text: 'Walter', correct: true},
        {text: 'Jesus', correct: false},
        {text: 'Brandt', correct: false}
    ]},
    { question: 'what is the capital of ontario?',
    answers: [
        {text: 'toronto', correct: true},
        {text: 'ottawa', correct: false},
        {text: 'london', correct: false},
        {text: 'kingston', correct: false}
    ]},
    { question: 'what is the name of the biggest mountain range on the west coast of north america?',
    answers: [
        {text: 'andes', correct: false},
        {text: 'appalacheans', correct: false},
        {text: 'alps', correct: false},
        {text: 'rockies', correct: true}
    ]}
]; 
// END OF QUESTIONS

// EVENT LISTENERS
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', displayQuestion)



// START GAME
function startGame() {
    console.log('started')
    // BEGIN TIMER
    startButton.classList.add('hide')
    questioncontainerEl.classList.remove('hide')
    displayQuestion()
}

// Generic function to run question, recognize answers, deduct timer if needed, trigger next question
function displayQuestion() {

    // recognize correct answer

    // display next question

    // recognize incorrect answer

    // deduct 10 seconds off the timer

    // DISPLAY NEXT QUESTION

}

function selectAnswer() {

}

