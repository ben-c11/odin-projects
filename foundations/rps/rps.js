// Randomly select a number 0-2, the number is set to be equivalent with one of the array items and given back to the player.
const rps_array = ["Rock", "Paper", "Scissors"];
let computerChoice;
let ranNumber;

function getComputerChoice() {
  ranNumber = (Math.floor(Math.random() * 3));
  
  if (ranNumber === 0) {
    computerChoice = rps_array[0];
} else if(ranNumber === 1) {
    computerChoice = rps_array[1];
} else {
    computerChoice = rps_array[2];
}

return computerChoice;
}
console.log('getComputerChoice(): ' + getComputerChoice())