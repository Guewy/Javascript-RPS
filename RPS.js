function getComputerChoice(){
    
    //RNG for the computers choice
    RPS = ["Rock", "Paper", "Scissor"];
    return choice = RPS[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {


    console.log("PC: " + playerSelection + " CS: " + computerSelection);
    
    //Compare all results
    if (playerSelection == computerSelection){
            result.textContent = "tie";
            console.log('Draw');
            return;
        }
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
            (playerSelection == "Scissor" && computerSelection == "Paper") ||
            (playerSelection == "Paper" && computerSelection == "Rock")){
            result.textContent = "player wins";
            playerScore.textContent++;
            score++;
            round++;
            console.log('Player wins');
            return;
        }
    else {
            result.textContent = "computer wins";
            computerScore.textContent++;
            score--;
            round++;
            console.log('Computer wins');
            return;
    }
}

function game(input){
    
    if (round == 5){
      score = 0;
      round = 0;
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    }
    
    //Get the computer choice and label player choice
    let computerSelection = getComputerChoice();
    console.log("Comp choice is:" + choice);
    let playerSelection = input;
    console.log('Your input is ' + playerSelection);
    playRound(playerSelection, computerSelection);
    console.log(round)

    //Check if the BO5 is over and print resultS
    if (round == 5){
      if (score>0){
        result.textContent = 'Set over! Player wins!\r\nPlay again?';
      }
      if (score<0){
        result.textContent = 'Set over! Computer wins!\r\nPlay again?';
      }
    }
    return;
}

let round = 0;
let score = 0;
//If the score is positive, player wins. If negative, computer wins

//Label the paragraphs
let result = document.getElementById('info');
let playerScore = document.getElementById('player-Score');
let computerScore = document.getElementById('computer-Score');

//Add a style for a linebreak
result.setAttribute('style', 'white-space: pre;');

console.log(round);

document.getElementById('rock-button').addEventListener('click',
  () => game('Rock'));

document.getElementById('paper-button').addEventListener('click',
  () => game('Paper'));

document.getElementById('scissor-button').addEventListener('click',
  () => game('Scissor'));
