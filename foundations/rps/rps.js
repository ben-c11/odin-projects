const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    round++;
    game();
    let playerSelection = 'Rock';
    playRound('Rock', computerSelection);
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    round++;
    game();
    let playerSelection = 'Paper';
    playRound('Paper', computerSelection);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    round++;
    game();
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


const endMsg = document.querySelector('.end');






// Randomly select a number 0-2, the number is set to be equivalent with one of the array items and given back to the player.
const rps_array = ["Rock", "Paper", "Scissors"];
let message;
let round = 0;
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

    // Diplay end message
    if(playerScore == 5 || computerScore == 5){

        endMsg.setAttribute('id','endMsg');

        if(playerScore > computerScore){
            endMsg.innerText="Well done, you're the winner!";
        } else {
            endMsg.innerText="You Lose! Play again to win."; 
        } 
    }
    return;
}

function game() {

        computerSelection = getComputerChoice();
        let playerSelection;
        
        playRound(playerSelection, computerSelection);
        
    
}