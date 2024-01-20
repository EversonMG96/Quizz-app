const questions = [
    {
        question: "Whitc is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    
    {
        question: "Whitc is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false}
        ]
    },

    {
        question: "Wich is the largest desert in the world?",
        answers: [
            {text: "Khalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },

    {
        question: "Which is the amallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Artcic", correct: false},
            {text: "Africa", correct: false}
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("anser-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQueastion();
}

function showQuest() {
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answers => {
       const button = document.createElement("button");
       button.innerHTML = answers.text; 
       button.classList.add("btn");
       answerButton.appendChild(button);
    });
}