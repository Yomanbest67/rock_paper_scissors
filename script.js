const computerPickIcon = document.querySelector(".computerIcon");
const wins = document.querySelector(".wins");
const ties = document.querySelector(".ties");
const loses = document.querySelector(".loses");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultMessage = document.querySelector(".resultMessage");
let playerSelection;

rockButton.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
});


function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let option = Math.floor(Math.random()*3);
    let choice = options[option];

    if (choice === "rock"){
        computerPickIcon.textContent = "✊";
    } else if (choice === "paper") {
        computerPickIcon.textContent = "✋";
    } else {
        computerPickIcon.textContent = "✂️";
    }

    return choice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateNumber(ties);
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                updateNumber(loses);
            } else {
                updateNumber(wins);
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                updateNumber(wins);
            } else {
                updateNumber(loses);
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                updateNumber(loses);
            } else {
                updateNumber(wins);
            }
        }
    }
}

function updateNumber (result) {
    result.textContent = parseInt(result.textContent) + 1;
    
    if (result.className == "wins"){
        resultMessage.textContent = "You won!";
    } else if (result.className == "loses") {
        resultMessage.textContent = "You lost!";
    } else {
        resultMessage.textContent = "It's a tie!";
    }

}

