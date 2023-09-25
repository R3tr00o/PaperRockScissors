"use strict";

// Choosing functions

const getComputerChoice = function () {
  const chosenNumber = Math.floor(Math.random() * 3);
  if (chosenNumber === 0) {
    return "Paper";
  } else if (chosenNumber === 1) {
    return "Rock";
  } else {
    return "Scissors";
  }
};

const playerSelection = function (chosenItem) {
  const lowerCase = chosenItem.toLowerCase();
  const capitalizedStr = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

  if (
    capitalizedStr === "Paper" ||
    capitalizedStr === "Rock" ||
    capitalizedStr === "Scissors"
  ) {
    return capitalizedStr;
  } else if (capitalizedStr) {
    return alert("You typed something wrong. Refresh site :D");
  } else {
    return alert("You enter nothing, please try again.");
  }
};

function playRound(playerSelection, computerSelection) {
  let playerScore = 1;
  let computerScore = 0;
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      console.log("You win, Paper beats Rock!");
      return playerScore;
    } else {
      console.log("You lose, Scissors cuts Paper.");
      return computerScore;
    }
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      console.log("You win, Rock beats Scissors!");
      return playerScore;
    } else {
      console.log("You lose, Paper beats Rock.");
      return computerScore;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      console.log("You win, Scissors cuts Paper!");
      return playerScore;
    } else {
      console.log("You lose, Rock beats Scissors.");
      return computerScore;
    }
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = playRound(
      playerSelection(prompt("Pick your weapon: Rock, Paper, Scissors", "")),
      getComputerChoice()
    );

    if (round === 1) {
      playerScore++;
    } else if (round === 0) {
      computerScore++;
    } else {
    }
    console.log(`You ${playerScore} : Computer ${computerScore}`);
  }
}

game();
