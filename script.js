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
