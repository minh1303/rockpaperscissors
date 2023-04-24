function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) return "Rock";
  else if (random === 1) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionConverted = playerSelection.toLowerCase();
  let computerSelectionConverted = computerSelection.toLowerCase();

  if (
    playerSelectionConverted === "rock" &&
    computerSelectionConverted === "paper"
  )
    return "You Lose! Paper beats Rock";
  else if (
    playerSelectionConverted === "rock" &&
    computerSelectionConverted === "scissors"
  )
    return "You Win! Rock beats Scissors";
  else if (
    playerSelectionConverted === "rock" &&
    computerSelectionConverted === "rock"
  )
    return "Draw!";
  else if (
    playerSelectionConverted === "paper" &&
    computerSelectionConverted === "paper"
  )
    return "Draw";
  else if (
    playerSelectionConverted === "paper" &&
    computerSelectionConverted === "scissors"
  )
    return "You Lose! Scissors beats Paper";
  else if (
    playerSelectionConverted === "paper" &&
    computerSelectionConverted === "rock"
  )
    return "You Win! Paper beats Rock";
  else if (
    playerSelectionConverted === "scissors" &&
    computerSelectionConverted === "paper"
  )
    return "You Win! Scissors beats Paper";
  else if (
    playerSelectionConverted === "scissors" &&
    computerSelectionConverted === "scissors"
  )
    return "Draw!";
  else if (
    playerSelectionConverted === "scissors" &&
    computerSelectionConverted === "rock"
  )
    return "You Lose! Rock beats Scissors";
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose rock paper or scissors");
    console.log(`${playerSelection} vs ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}


game()