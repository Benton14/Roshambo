let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convetToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win (userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convetToWord(userChoice)} beats ${convetToWord(compChoice)}. You Win!`
}

function lose (userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convetToWord(compChoice)} beats ${convetToWord(userChoice)}. You Lose!`
}

function tie (userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convetToWord(userChoice)} ties ${convetToWord(compChoice)}. Play again!`
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice)
            break; 
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();