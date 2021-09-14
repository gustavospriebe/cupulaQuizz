// BD de perguntas
const quizData = [
    {
        question:
            "Qual é a Individualidade de Sir Nighteye em Boku no Hero Academia?",
        a: "Foresight (A Previsão)",
        b: "One For All",
        c: "Permeation (Permeação)",
        d: "Explosion (Explosão)",
        correct: "a",
    },
    {
        question:
            "Qual o nome da música que toca na primeira oppenning de One Piece?",
        a: "We Fight Togheter",
        b: "We Are",
        c: "Share the World",
        d: "We Go",
        correct: "b",
    },
    {
        question:
            "Quem é o ser mais poderoso do universo de Dragon ball?",
        a: "Zeno Sama",
        b: "Freeza",
        c: "Broly",
        d: "Goku",
        correct: "a",
    },
    {
        question:
            "No Exame Chunin, Naruto Uzumaki enfrentou dois adversários, quais são eles?",
        a: "Rock Lee e Sasuke Uchiha.",
        b: "Neji Hyuuga e Kiba Inosuka.",
        c: "Sakura Haruno e Shino Aburame.",
        d: "Gaara do Deserto e Tenten.",
        correct: "b",
    },
    {
        question: "Qual a quantidade de bijuus presentes no anime Naruto?",
        a: "7",
        b: "9",
        c: "10",
        d: "11",
        correct: "b",
    }
];

// DOM
const question = document.querySelector(".question");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answerD = document.querySelector(".answerD");
const button = document.querySelector(".button");
const checked = document.querySelectorAll(".answer");
const quiz = document.querySelector(".perguntas");

// Variáveis
let score = 0;
let currentQuestion = 0;

// Jogando as perguntas no HTML
function quizApp() {
    deselectAnswer();

    const questionData = quizData[currentQuestion];

    question.innerText = questionData.question;
    answerA.innerText = questionData.a;
    answerB.innerText = questionData.b;
    answerC.innerText = questionData.c;
    answerD.innerText = questionData.d;
}

//Selecionar resposta do questionário
function selectedAnswer() {
    let answer = undefined;

    checked.forEach((answerEl) => {
        if (answerEl.checked) answer = answerEl.id;
    });

    return answer;
}

// Limpar seleção de resposta
function deselectAnswer() {
    checked.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Lógica do Quiz
function quizResult() {

    console.log("Done");

    quiz.innerHTML = `<h2 style="text-align: center; margin-top: 100px;">O número de acertos foi:</h2><h1 style="text-align: center"> ${score}/${quizData.length}</h1>`;

    button.innerHTML = `<h3 onclick="location.reload()">Tentar novamente</h3>`;
}

// Funcionalidade do botão Enviar
button.addEventListener("click", () => {
    const answer = selectedAnswer();

    if (answer === quizData[currentQuestion].correct) score++;
    currentQuestion++;

    console.log(score);

    currentQuestion < quizData.length ? quizApp() : quizResult();
});

quizApp();
