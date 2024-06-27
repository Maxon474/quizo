const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "What is square root of 4761?",
        choices: ["35", "69", "54", "61"],
        answer: 1
    },
    {
        question: "How much teeth garden snail have",
        choices: ["600", "50000", "0", "14000"],
        answer: 3
    },
    {
        question: "What's the name of the main character on show 'Breaking Bad'?",
        choices: ["Walter White", "Joseph Joestar", "Soul Goodman", "Alex Hirsch"],
        answer: 0
    },
    {
        question: "How many McDonald's are there in Riga?",
        choices: ["13", "22", "7", "10"],
        answer: 0
    },
    {
        question: "How much does a family annual subscription to Riga Zoo cost?",
        choices: ["59.99 EUR", "80 EUR", "109 EUR", "99 EUR"],
        answer: 3
    },
    {
        question: "Who played the scientist Robert Openheimer in the movie 'Openheimer'",
        choices: ["Danny DeVito", "Kilian Merfi", "Jason Statham", "Jenna Ortega"],
        answer: 1
    },
    {
        question: "Real name of Pope Francis",
        choices: ["Gustavo Marco Belmocho", "Cavalier Angelo Russo", "Jorge Mario Bergoglio", "Joseph Giuseppe Colombo"],
        answer: 2
    },
    {
        question: "Ranidaphobia is the fear of...",
        choices: ["chairs", "rhinos", "tongues", "frogs"],
        answer: 3
    },
    {
        question: "Which country's national animal is the unicorn?",
        choices: ["Scotland", "Ireland", "Netherlands", "Belgium"],
        answer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElements = document.querySelectorAll('.choice');
const feedbackElement = document.getElementById('feedback');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.classList.add('hide');
    resultContainer.classList.add('hide');
    document.getElementById('quiz').classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choicesElements.forEach((button, index) => {
        button.innerText = currentQuestion.choices[index];
        button.disabled = false;
    });
    feedbackElement.classList.add('hide');
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = index === currentQuestion.answer;
    if (correct) {
        score++;
        feedbackElement.innerText = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = `Wrong! The correct answer is ${currentQuestion.choices[currentQuestion.answer]}.`;
        feedbackElement.style.color = "red";
    }
    feedbackElement.classList.remove('hide');
    choicesElements.forEach(button => button.disabled = true);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function showResult() {
    document.getElementById('quiz').classList.add('hide');
    resultContainer.classList.remove('hide');
    resultText.innerText = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
