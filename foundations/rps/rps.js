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

const round_p = document.querySelector('.round_p');
const resultsDiv = document.querySelector('.resultsDiv');


const playerSelectionDisplay = document.querySelector('.playerSelectionDisplay');
const computerSelectionDisplay = document.querySelector('.computerSelectionDisplay');

let playerScoreDisplay = document.querySelector('.playerScoreDisplay');
let computerScoreDisplay = document.querySelector('.computerScoreDisplay');
let winLose = document.querySelector('.winLose');
const end = document.querySelector('.end');






// Randomly select a number 0-2, the number is set to be equivalent with one of the array items and given back to the player.
const rps_array = ["Rock", "Paper", "Scissors"];
let message;
let playerScore = 0;
let computerScore = 0;

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

    let round = playerScore + computerScore + 1;    
    round_p.textContent = "ROUND " + round;

    // Player win outcome
    if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        // && scores < 5
        ){
            playerScore++;
            winLose.innerText=`You win! ${playerSelection} beats ${computerSelection}.`; 
                    
            playerSelectionDisplay.innerText=`Player Selection: ${playerSelection}`;
            computerSelectionDisplay.innerText=`Computer Selection: ${computerSelection}`;
            

            playerScoreDisplay.innerText=`Player Score: ${playerScore}`;
            computerScoreDisplay.innerText=`Computer Score: ${computerScore}`;
            
    }
    // Player Lose outcome    
    if (
        playerSelection === "Scissors" && computerSelection === "Rock" ||
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors"
    ){
        computerScore++;
        winLose.innerText=`You lose! ${computerSelection} beats ${playerSelection}.`;
        playerSelectionDisplay.innerText=`Player Selection: ${playerSelection}`;
        computerSelectionDisplay.innerText=`Computer Selection: ${computerSelection}`;

        playerScoreDisplay.innerText=`Player Score: ${playerScore}`;
        computerScoreDisplay.innerText=`Computer Score: ${computerScore}`;

    } else if (playerSelection === computerSelection){
        winLose.innerText="It's a tie.";   
        playerSelectionDisplay.innerText=`Player Selection: ${playerSelection}`;
        computerSelectionDisplay.innerText=`Computer Selection: ${computerSelection}`;
    }
    return;
}

/*

*/

function game() {

        computerSelection = getComputerChoice();
        let playerSelection;
        
        playRound(playerSelection, computerSelection);
        
        
    
    if(playerScore > computerScore){
        return "You are the winner!";
    } else if(playerScore < computerScore) {
        return "You lose! Play again to win."; 
    } else {
        return "It's a draw. Try again."
    } 
    
}
console.log(game())