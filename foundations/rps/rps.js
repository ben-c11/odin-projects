const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    let playerSelection = 'Rock';
    playRound('Rock', computerSelection);
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', () => {
    let playerSelection = 'Paper';
    playRound('Paper', computerSelection);
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    let playerSelection = "Scissors";
    playRound('Scissors', computerSelection)
})


const resultsDiv = document.createElement('div');
resultsDiv.classList.add('resultsDiv');
document.body.append(resultsDiv);
resultsDiv.style = 'border: 1px blue solid; height: 300px; width: 300px';

const playerChoiceSpan = document.createElement('span');
playerChoiceSpan.classList.add('playerChoiceSpan');
document.body.append(playerChoiceSpan);
playerChoiceSpan.style='border: 1px red solid;';

const computerChoiceSpan = document.createElement('span');
computerChoiceSpan.classList.add('computerChoiceSpan');
document.body.append(computerChoiceSpan);
computerChoiceSpan.style='border: 1px red solid;';

let playerScoreDiv = document.createElement('div');
playerScoreDiv.classList.add('playerScoreDiv');
playerScoreDiv.style = 'border: pink 1px solid;';
document.body.append(playerScoreDiv);


let computerScoreDiv = document.createElement('div');
computerScoreDiv.classList.add('computerScoreDiv');
computerScoreDiv.style = "border: pink 1px solid;";
document.body.append(computerScoreDiv);






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

function playRound(playerSelection, computerSelection) {
    
    // r < p; r > s 
    // p < s; p > r
    // s < r; s > p 
    computerSelection = getComputerChoice();

    
    if(playerSelection === "Rock"){
        playerChoiceSpan.innerText = "Player: " + playerSelection;

        if (computerSelection === "Scissors"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "You Win! Rock beats Scissors.";
            resultsDiv.innerText = message;
            console.log(message)
        
        } else if(computerSelection === "Paper"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = 'You Lose! Paper beats Rock.';
            resultsDiv.innerText = message;
            console.log(message)

        } else {
            message = "It's a draw! Both rocks smash to dust.";
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            resultsDiv.innerText = message;
            console.log(message)

        }
        return message;
    }
    
    if(playerSelection === "Paper"){
        playerChoiceSpan.innerText = "Player: " + playerSelection;

        if (computerSelection === "Rock"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "You Win! Paper beats Rock.";
            resultsDiv.innerText = message;
            console.log(message)
        
        } else if(computerSelection === "Scissors"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = 'You Lose! Scissors beats Paper.';
            resultsDiv.innerText = message;
            console.log(message)
        } else {
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "It's a draw!";
            resultsDiv.innerText = message;
            console.log(message)
        }
        return message;
    }
    if(playerSelection === "Scissors"){
        playerChoiceSpan.innerText = "Player: " + playerSelection;

        if (computerSelection === "Paper"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "You Win! Scissors beats paper.";
            resultsDiv.innerText = message;
            console.log(message)
            
        } else if(computerSelection === "Rock"){
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "You Lose! Rock beats Scissors.";
            resultsDiv.innerText = message;
            console.log(message)
            
        } else {
            computerChoiceSpan.innerText = "Computer: " + computerSelection;

            message = "It's a draw! Scissors collide!";
            resultsDiv.innerText = message;
            console.log(message)
            
        }
        return message;
    }
     console.log("Playround func " + message)
}

/* I'm working on making the div display the computer (and player?) choices while still displaying the win/lose message. 

After, since Odin say to delete the 5 round loop, I'll try implement a counter for the wins and losses and then display a winner.

After this all works I can try add in images or something?? Maybe do more interactive stuff.. idk..
*/

function game() {
    let playerCount = 0;
    let computerCount = 0;
    let round = playerCount + computerCount + 1;
    
        /*
        resultsDiv.innerText = "ROUND " + round;
        console.log("ROUND " + round)
        */
    
    
        resultsDiv.innerText = "Rock, Paper, Scissors!";
        console.log("playerCount: " + playerCount)
        console.log("computerCount: " + computerCount)

        //Choose rock, paper, scissors and play a round, looped.
        computerSelection = getComputerChoice();
        let playerSelection;
        
    
        playRound(playerSelection, computerSelection);
        
        console.log("BLOOOP" + message)
        if(message.charAt(4) === 'W'){
            playerCount++;
        } else if (message.charAt(4) === 'L'){
            computerCount++;
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