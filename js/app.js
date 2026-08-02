/*-------------------------------- Constants --------------------------------*/
const choices = ['rock','paper','scissors']
/*-------------------------------- Variables --------------------------------*/
let playerChoice = null
let computerChoice = null
let message = null
/*------------------------ Cached Element References ------------------------*/
const rockElement = document.querySelector('#rock')
const paperElement = document.querySelector('#paper')
const scissorsElement = document.querySelector('#scissors')

const allChoiceElements = document.querySelectorAll('.choice-el')

console.log(allChoiceElements[2])
/*-------------------------------- Functions --------------------------------*/
function play(){
    console.log('clicked on choice')

}
/*----------------------------- Event Listeners -----------------------------*/

for(let oneChoiceElement of allChoiceElements){
    oneChoiceElement.addEventListener('click',play)
}