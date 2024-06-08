let humanScore = 0;
let computerScore = 0;
let firstMessage = " ";
let message = " ";
let roundsPlayed = 0;
const firstChoice = document.querySelector(".humanChoice");
const secondChoice = document.querySelector(".computerChoice");
const ultimateWinner = document.querySelector(".ultimateWinner");
const scores = document.querySelector(".scores");
const reset = document.querySelector(".reset");

document.querySelector('.roundWinner').textContent = firstMessage;


function getHumanChoice(event) {

    let humanChoice;

    let target = event.target;

    if (target.classList.contains('rock')) {
        humanChoice = 'rock';
    } else if (target.classList.contains('paper')) {
        humanChoice = 'paper';
    } else if (target.classList.contains('scissors')) {
        humanChoice = 'scissors';
    }

    if (roundsPlayed >= 5) {
        alert("Reset game for a new Match!");
    } else {
        playRound(humanChoice, getComputerChoice());
    }

    };

function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];

};    

function playRound(humanChoice,computerChoice) {

    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);
    

    if (humanChoice === computerChoice) {
         firstMessage = "It's a tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        firstMessage =  "You won this round!"
    } else {
        computerScore++;
        firstMessage = "You lost this round!";
    }

    
    console.log(firstMessage);

    
    firstChoice.textContent = "Human Choice: " + humanChoice;
    secondChoice.textContent = "Computer Choice: " + computerChoice;
    scores.textContent = "Scores: Human " + humanScore + " - Computer " + computerScore;

    roundsPlayed++; 

    if (roundsPlayed >= 5) {
    
        nameWinner();
    }
    
};

function nameWinner() {

    if (humanScore > computerScore) {
        ultimateWinner.textContent = "Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
        ultimateWinner.textContent = "Sorry, you lost the game!";
    } else {
        ultimateWinner.textContent = "The game is a tie!";
    }

    console.log(ultimateWinner.textContent);
};

reset.addEventListener('click', () => {

    firstChoice.textContent = "Human Choice: ";
    secondChoice.textContent = "Computer Choice: ";
    humanScore = 0;
    computerScore = 0;
    document.querySelector('.roundWinner').textContent = " ";
    scores.textContent = "Scores: ";
    roundsPlayed = 0;
    ultimateWinner.textContent = " ";
});
    
document.querySelector(".choicesWrapper").addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            getHumanChoice(event);
        }
    });


