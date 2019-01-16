const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
function askQuestion(){
  return questions[0]
}

function appendQuestion(question) {
  let questionContainer = document.querySelector(".question-container");
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  let questionContainer = document.querySelector(".question-container");
  questionContainer.innerHTML = null;
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach (e => e.classList.toggle('hide'))
}

function displayQuestionOnClick() {

}
