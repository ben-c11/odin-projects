// Randomly select a number 0-2, the number is set to be equivalent with one of the array items and given back to the player.
const rps_array = ["Rock", "Paper", "Scissors"];

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
function capitalise(string) {
      const firstLetter = string[0].toUpperCase(); // capitalise first letter
      
      let newString = '';

      for (i = 1; i < string.length; i++) {
       newString += string[i].toLowerCase() // += is important to add on the new letter to each iteration of newString
      }
      output = firstLetter + newString;
      return output;
    }
function playRound(playerSelection, computerSelection) {
    
    // r < p; r > s 
    // p < s; p > r
    // s < r; s > p 
    playerSelection = capitalise(playerSelection);
    let message;
    
    if(playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            message = "You Win! Rock beats Scissors.";
            console.log(message)
            return message;
        } else if(computerSelection === "Paper"){
            message = 'You Lose! Paper beats Rock.';
            console.log(message)
            return message;
        } else {
            message = "It's a draw! Both rocks smash to dust.";
            console.log(message)
            return message;
        }
    }
    console.log("playerSelection: " + playerSelection)
    console.log("computerSelection: " + computerSelection)
    
    if(playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            message = "You Win! Paper beats Rock.";
            console.log(message)
            return message;
        } else if(computerSelection === "Scissors"){
            message = 'You Lose! Scissors beats Paper.';
            console.log(message)
            return message;
        } else {
            message = "It's a draw!";
            console.log(message)
            return message;
        }
    }
    if(playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            message = "You Win! Scissors beats paper.";
            console.log(message)
            return message;
        } else if(computerSelection === "Rock"){
            message = "You Lose! Rock beats Scissors.";
            console.log(message)
            return message;
        } else {
            message = "It's a draw! Scissors collide!";
            console.log(message)
            return message;
        }
    }
     
}
computerSelection = getComputerChoice();
playerSelection = "scissors";
playRound(playerSelection, computerSelection);


function game() {
    
}