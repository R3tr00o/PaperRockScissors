"use strict";

function getComputerChoice() {
  const chosenNumber = Math.floor(Math.random() * 3);
  if (chosenNumber === 0) {
    return "Paper";
  } else if (chosenNumber === 1) {
    return "Rock";
  } else {
    return "Scissors";
  }
}

function playerSelection(chosenItem) {
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
}

console.log(playerSelection(prompt("Choose: Paper, Rock or Scissors")));
