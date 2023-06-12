const startGame = document.querySelector(".comecar-quiz")
const questionContainer = document.querySelector(".questoes-conteiner")
const answersContainer = document.querySelector(".resposta-conteiner")
const questionText = document.querySelector (".questao")
const nextQuestionButton = document.querySelector(".proxima-questao")


nextQuestionButton.addEventListener("click", showNextQuestion)
startGame.addEventListener("click", comecar) 


let  currentQuestionIndex = 0
let  corrects = 0


function comecar() {
    startGame.classList.add("hide")
    questionContainer.classList.remove("hide")
    showNextQuestion()
}

function showNextQuestion() {
    reset()
  
   if (questions.length == currentQuestionIndex){
     return endgame()
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

     newAnswer.addEventListener("click", selectAnswer)
    })
}


function reset(){
  while(answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild)
} 
nextQuestionButton.classList.add("hide")
}



function selectAnswer(event){
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    corrects++
  }

  document.querySelectorAll(".answer").forEach(button => {
    if(button.dataset.correct) {
      button.classList.add("correct")
    } else{
      button.classList.add("incorrect")
    }
    button.disable = true
  })

  nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}


function endgame (){
  const totalQ = questions.length


  let mensage = ""

  switch(true){

    case (corrects >= 7):
      mensage = "Perfeito, você aprendeu direitinho"
      break
    case (corrects >= 5):
      mensage = "Muito bem, só estudar mais um pouquinho e você acerta tudo." 
      break
    case (corrects >= 4):
      mensage = "Boa! Passou mas foi por pouco, vamos estudar para melhorar !!!"
      break
    case (corrects >= 3):
      mensage = "Eu sei que você consegue mais, vamos estudar mais na próxima."
      break
    case (corrects >= 1):
      mensage = "Poxa, você consegue mais. Estude mais da proxima vez."
      break
    default:
      mensage = "Infelizmente você não acertou nenhuma, precisa estudar mais."

  }
  
  questionContainer.innerHTML =
  `
    <p class= "mensagem-final">
      Pontuação ${corrects} / ${totalQ}
      <span>${mensage} </span>
      </p>
      <button onclick=window.location.reload() class = "button"> Refazer o Quiz </button>
  `
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
