// Randomly select a number 0-2, the number is set to be equivalent with one of the array items and given back to the player.
const rps_array = ["Rock", "Paper", "Scissors"];
let message;

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
    
    if(playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            message = "You Win! Rock beats Scissors.";
            console.log(message)
        
        } else if(computerSelection === "Paper"){
            message = 'You Lose! Paper beats Rock.';
            console.log(message)

        } else {
            message = "It's a draw! Both rocks smash to dust.";
            console.log(message)

        }
        return message;
    }
    
    if(playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            message = "You Win! Paper beats Rock.";
            console.log(message)
        
        } else if(computerSelection === "Scissors"){
            message = 'You Lose! Scissors beats Paper.';
            console.log(message)
        } else {
            message = "It's a draw!";
            console.log(message)
        }
        return message;
    }
    if(playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            message = "You Win! Scissors beats paper.";
            console.log(message)
            
        } else if(computerSelection === "Rock"){
            message = "You Lose! Rock beats Scissors.";
            console.log(message)
            
        } else {
            message = "It's a draw! Scissors collide!";
            console.log(message)
            
        }
        return message;
    }
     
}


function game() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++){
        // Break up the console and indicates round number to user
        console.log("ROUND " + (i+1))

        //Choose rock, paper, scissors and play a round, looped.
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, Scissors?");
        console.log('Computer selection: ' + computerChoice)
        playRound(playerSelection, computerSelection);
        
        // chatAt method to determine in player is the winner, where the playerCount is incremented, loser where computerCount is incremented or neither.
        if(message.charAt(4) === 'W'){
            playerCount++;
        } else if(message.charAt(4) === 'L'){
            computerCount++;
        }
        console.log("Player: " + playerCount + " Computer: " + computerCount);
    }
    if(playerCount > computerCount){
        return "You are the winner!";
    } else if(playerCount < computerCount) {
        return "You lose! Play again to win."; 
    } else {
        return "It's a draw. Try again."
    }

    //Future implementation, loop until the count is at 3, rather than it being 5 rounds. 
    
}
console.log(game())