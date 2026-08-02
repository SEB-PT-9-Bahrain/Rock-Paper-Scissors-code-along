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
    console.log(Math.floor(Math.random() * 3))

    // 3. compare the choices and decide who wins

    // 4. show the result

}
/*----------------------------- Event Listeners -----------------------------*/

for(let oneChoiceElement of allChoiceElements){
    oneChoiceElement.addEventListener('click',play)
}