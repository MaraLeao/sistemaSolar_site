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
      question: "Quantos planetas atualmente compõem o sistema solar?",
      answers: [
        { text: "7", correct: false },
        { text: "10", correct: false },
        { text: "8", correct: true },
        { text: "5", correct: false }
      ]
    },
    {

      question: "Complete a frase: _______ é o planeta mais próximo do sol",

      answers: [
        { text: "Mercúrio", correct: true },
        { text: "Sol", correct: false },
        { text: "Marte", correct: false },
        { text: "Terra", correct: false }
      ]
    },
    {
      question: "O movimento que a Terra tem em torno de si mesma, gera os fenômenos conhecidos como:",
      answers: [
        { text: "Fases da Lua", correct: false },
        { text: "Geração dos polos magnéticos", correct: false },
        { text: "Maré", correct: false },
        { text: "Dia e noite", correct: true }
      ]
    },
    {
      question: "Qual é o nome do maior planeta gasoso do Sistema Solar?",
      answers: [
        { text: "Saturno", correct: false },
        { text: "Urano", correct: false },
        { text: "Júpiter", correct: true },
        { text: "Terra", correct: false }
      ]
    },
    {
        question: "Como se dá o nome do movimento de rotação da Terra em torno do sol?",
        answers: [
          { text: "Rotação", correct: false },
          { text: "Giração", correct: false },
          { text: "Movimentamento", correct: false },
          { text: "Translação", correct: true }
      ]
    },
    {
        question: "Dentro do sistema solar existem ao total 8 planetas, marque a alternativa que não representa um desses planetas.",
        answers: [
          { text: "Júpiter", correct: false },
          { text: "Plutão", correct: true },
          { text: "Marte", correct: false },
          { text: "Urano", correct: false }
      ]
    },
    {
        question: "Qual desses planetas registra a menor temperatura do sistema solar ?",
        answers: [
          { text: "Rio Grande do Sul", correct: true },
          { text: "Vênus", correct: false },
          { text: "Marte", correct: false },
          { text: "Urano", correct: false }
      ]
    },
  ]


//JavaScript do foguete
			
function alterarImagem(foguetinho){
  document.getElementById(foguetinho).src = "assets/foguetecomfoguinho.png"; 
}

function resetarFoguete() {

  if (window.scrollY === 0) {
    document.getElementById('foguetinho').src = "assets/foguetesemfoguinho.png";
  }
}

window.addEventListener('scroll', resetarFoguete);

//Centralização da ancoragem
function ancorarElemento(navId) {

  var elementoAncorado = document.getElementById(navId);
  elementoAncorado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


