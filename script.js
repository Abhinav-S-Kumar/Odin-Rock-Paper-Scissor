function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const random = Math.random();
    if (random < 1 / 3) return "rock";
    else if (random < 2 / 3) return "paper";
    else return "scissors";
  }

  function getHumanChoice() {
    const userInput = prompt("Enter Rock, Paper, or Scissors:");
    return userInput.toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`---------- Round ${i} ----------`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
  }

  console.log("---------- FINAL RESULT ----------");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

playGame();
