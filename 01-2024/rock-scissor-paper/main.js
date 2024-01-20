const buttonsContainer = document.getElementById("btn-container");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const winnerMessage = document.getElementById("winner");
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;
const arrayMoves = ["rock", "paper", "scissor"];

const userWins = () => {
  userScore++;
  winnerMessage.innerHTML = "User Wins";
  userScoreElement.textContent = userScore;
};

const computerWins = () => {
  computerScore++;
  winnerMessage.innerHTML = "Computer Wins";
  computerScoreElement.textContent = computerScore;
};

const decideWinner = (playerMove) => {
  computerMove = arrayMoves[Math.floor(Math.random() * arrayMoves.length)];

  if (playerMove === computerMove) {
    winnerMessage.innerHTML = "User and Computer tie.";
  } else if (playerMove === "rock") {
    computerMove === "paper" ? computerWins() : userWins();
  } else if (playerMove === "paper") {
    computerMove === "rock" ? userWins() : computerWins();
  } else if (playerMove === "scissor") {
    computerMove === "rock" ? computerWins() : userWins();
  }
};

const startGame = (event) => {
  if (event.target.classList.contains("btn")) decideWinner(event.target.id);
};

buttonsContainer.addEventListener("click", startGame);
