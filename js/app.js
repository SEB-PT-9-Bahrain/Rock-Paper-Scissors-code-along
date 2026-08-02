/*-------------------------------- Constants --------------------------------*/
const choices = ['rock','paper','scissors']
/*-------------------------------- Variables --------------------------------*/
let playerChoice = null
let computerChoice = null
let message = null
/*------------------------ Cached Element References ------------------------*/

const allChoiceElements = document.querySelectorAll('.choice-el')

/*-------------------------------- Functions --------------------------------*/
function play(event){
    // 1. save the user choice in the playerChoice variable
    playerChoice = event.target.id

    // 2. generate the computer choice at random
    // console.log(Math.random() * 3)
    computerChoice = choices[Math.floor(Math.random() * 3)]

    // 3. compare the choices and decide who wins
    if(playerChoice === computerChoice){
        console.log('DRAW')
    }
    else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You win')
    }
    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win')
    }
    else if(playerChoice === 'scissors' && computerChoice=== 'paper'){
        console.log('You win')
    }
    else{
        console.log('You Lost')
    }

    // 4. show the result

}
/*----------------------------- Event Listeners -----------------------------*/

for(let oneChoiceElement of allChoiceElements){
    oneChoiceElement.addEventListener('click',play)
}