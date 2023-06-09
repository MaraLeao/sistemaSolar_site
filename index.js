const startGame = document.querySelector(".comecar-quiz")
const questionContainer = document.querySelector(".questoes-conteiner")
const answersContainer = document.querySelector(".resposta-conteiner")
const questionText = document.querySelector (".questao")

startGame.addEventListener("click", comecar) 
let  currentQuestionIndex = 0


function comecar() {
    startGame.classList.add("hide")
    questionContainer.classList.remove("hide")
    showNextQuestion()
}

function showNextQuestion() {
    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    } 

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
     const newAnswer = document.createElement("button")
     newAnswer.classList.add("button", "answer")  
     newAnswer.textContent = answer.text
     if (answer.correct){
        newAnswer.dataset.correct = answer.correct
     }
     answersContainer.appendChild(newAnswer)
     
    })
}











const questions = [
    {
      question: "Sol",
      answers: [
        { text: "<terra>", correct: false },
        { text: "<marte>", correct: false },
        { text: "<lua>", correct: true },
        { text: "<netuno>", correct: false }
      ]
    },
    {
      question: "questão 2",
      answers: [
        { text: "<1>", correct: true },
        { text: "<2>", correct: false },
        { text: "<3>", correct: false },
        { text: "<4>", correct: false }
      ]
    },
    {
      question: "questão 3",
      answers: [
        { text: "<1>", correct: true },
        { text: '<2>', correct: false },
        { text: '<3>', correct: false },
        { text: "<4>", correct: false }
      ]
    },
    {
      question: "questão 4",
      answers: [
        { text: "<1>", correct: false },
        { text: '<2>', correct: false },
        { text: '<3>', correct: true },
        { text: "<4>", correct: false }
      ]
    },
    {
        question: "questão 5",
        answers: [
          { text: "<1>", correct: false },
          { text: '<2>', correct: false },
          { text: '<3>', correct: false },
          { text: "<4>", correct: true }
      ]
    },
    {
        question: "questão 6",
        answers: [
          { text: "<1>", correct: false },
          { text: '<2>', correct: true },
          { text: '<3>', correct: false },
          { text: "<4>", correct: false }
      ]
    },
    {
        question: "questão 7",
        answers: [
          { text: "<1>", correct: true },
          { text: '<2>', correct: false },
          { text: '<3>', correct: false },
          { text: "<4>", correct: false }
      ]
    },
  ]
