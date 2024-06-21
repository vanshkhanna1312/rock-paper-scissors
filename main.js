const winners = [];
const roundWinner = document.querySelector(".match .winner");
let playerScore = 0;
let computerScore = 0;

function game() {
  // Fade Out/In The intro screen and main game screen
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");
  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });

  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  // Change the hand signs and call function to play a round
  // Play round with user choice and get computer choice
  const rps = ["rock", "paper", "scissors"];
  options.forEach((button) => {
    button.addEventListener("click", function () {
      const computerCoice = rps[Math.floor(Math.random() * rps.length)];
      computerHand.src = `./assets/${computerCoice}.png`;
      playerHand.src = `./assets/${this.textContent.toLowerCase()}.png`;
      playRound(this.textContent.toLowerCase(), computerCoice);
    });
  });
}

function playRound(playerselection, computerselection) {
  if (playerScore == 5 || computerScore == 5) {
    return;
  }
  const winner = checkWinner(playerselection, computerselection);
  winners.push(winner);

  // Only allow Players to play till someone wins 5 rounds
  if (playerScore == 5 || computerScore == 5) {
    if(playerScore == 5){
    roundWinner.textContent = "You Won The Game!"
    }else{
    roundWinner.textContent = "Computer Won The Game!"
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundWinner.textContent = "It's a Tie";
    return;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    roundWinner.textContent = "Player Wins";
    playerScore++;
    updateScore();
    return;
  } else {
    roundWinner.textContent = "Computer Wins";
    computerScore++;
    updateScore();
    return;
  }
}

// Updates The scoreboard
function updateScore(){
  const pscore = document.querySelector('.player-score p')
  const cscore = document.querySelector('.computer-score p')
  pscore.textContent = playerScore;
  cscore.textContent = computerScore;
}

game();
