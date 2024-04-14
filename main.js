//! Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Tie";
  } 
  else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win" : "You Lose";
        break;

      case "paper":
        result = computerChoice === "rock" ? "You Win" : "You Lose";
        break;

      case "scissors":
        result = computerChoice === "paper" ? "You Win" : "You Lose";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You Win":
      // resultDisplay.classList.add("greenText");
      resultDisplay.style.color = "#1acf1a";

      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
      
    case "You Lose":
      // resultDisplay.classList.add("redText");
      resultDisplay.style.color = "#f80e0e";

      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "It's a Tie":
      resultDisplay.style.color = "#00ffff";
      break;
  }
}
