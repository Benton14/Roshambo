
function getComputerChoice() {
    let choice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1 ) {
        choice = "rock";
    } else if (randomNumber === 2) {
        choice = "paper";
    } else if (randomNumber === 3 ) {
        choice = "scissors";
    }

    return choice;
}


function round() {
    const compChoice = getComputerChoice();
    const myChoice = prompt("What's your move?").toLowerCase();

    if (compChoice === "rock") {
        if (myChoice === "rock") {
            console.log("It's a tie! Play again")
        } else if (myChoice === "paper") {
            console.log("You Win!")
        } else if (myChoice === "scissors") {
            console.log("You Lose.")
        } else {
            console.log("invalid input. Please choose rock, paper, or scissors.")
        }
    } else if (compChoice === "paper") {
        if (myChoice === "rock") {
            console.log("You Lose.")
        } else if (myChoice === "paper") {
            console.log("It's a tie! Play again")
        } else if (myChoice === "scissors") {
            console.log("You Win!")
        } else {
            console.log("invalid input. Please choose rock, paper, or scissors.")
        }
    } else if (compChoice === "scissors") {
        if (myChoice === "rock") {
            console.log("You Win!")
        } else if (myChoice === "paper") {
            console.log("You Lose.")
        } else if (myChoice === "scissors") {
            console.log("It's a tie! Play again")
        } else {
            console.log("invalid input. Please choose rock, paper, or scissors.")
        }
    }  
    console.log("Computer: " + compChoice);
    console.log("Player: " + myChoice);
}

function game() {
    for (i=0;i<=5;i++) {
        round();
    }
}

game();