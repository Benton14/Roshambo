const randomNumber = Math.floor(Math.random() * 3) + 1;
let choice;

function getComputerChoice() {
    if (randomNumber === 1 ) {
        choice = "rock"
    } else if (randomNumber === 2) {
        choice = "paper"
    } else if (randomNumber === 3 ) {
        choice = "scissors"
    }
}

getComputerChoice();
console.log(choice);