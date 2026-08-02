/*-------------------------------- Constants --------------------------------*/
const choices = ['rock','paper','scissors']
/*-------------------------------- Variables --------------------------------*/
let playerChoice = null
let computerChoice = null
let message = null
/*------------------------ Cached Element References ------------------------*/

const allChoiceElements = document.querySelectorAll('.choice-el')
const resultDisplayElement = document.querySelector('#result-display')

/*-------------------------------- Functions --------------------------------*/
function play(event){
    // 1. save the user choice in the playerChoice variable
    playerChoice = event.target.id

    // 2. generate the computer choice at random
    // console.log(Math.random() * 3)
    computerChoice = choices[Math.floor(Math.random() * 3)]

    // 3. compare the choices and decide who wins
    if(playerChoice === computerChoice){
        message = `<b>DRAW</b>, Computer picked ${computerChoice} and you picked ${playerChoice}`
    }
    else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        message = `You <b class="win">Win</b>, Computer picked ${computerChoice} and you picked ${playerChoice}`
    }
    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        message = `You <b class="win">Win</b>, Computer picked ${computerChoice} and you picked ${playerChoice}`
    }
    else if(playerChoice === 'scissors' && computerChoice=== 'paper'){
        message = `You <b class="win">Win</b>, Computer picked ${computerChoice} and you picked ${playerChoice}`
    }
    else{
        message = `You <b class="lose">Lose</b>, Computer picked ${computerChoice} and you picked ${playerChoice}`

    }


    // 4. show the result
    resultDisplayElement.innerHTML = message
}
/*----------------------------- Event Listeners -----------------------------*/

for(let oneChoiceElement of allChoiceElements){
    oneChoiceElement.addEventListener('click',play)
}