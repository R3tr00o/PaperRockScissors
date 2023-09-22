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
  let playerScore = 0;
  let computerScore = 0;
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      console.log("You lose Rock beats Paper");
    }
  }
}

playRound(
  playerSelection(prompt("Pick your weapon: Rock, Paper, Scissors", "")),
  getComputerChoice()
);
