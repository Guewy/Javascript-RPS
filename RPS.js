function getComputerChoice(){
    
    //RNG for the computers choice
    RPS = ["rock", "paper", "scissors"];
    return choice = RPS[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    
    //Compare all results
    if (playerSelection == computerSelection){
            result = "tie";
        }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")){
            result = "player wins";
        }
    else {
        result = "computer wins";
    }
    
    //Check and return certain results
    if (result == "player wins"){
        playerScore = playerScore + 1;
        return ("The player wins, " + playerSelection + " beats " + computerSelection + ".");
    }
    else if (result == "computer wins"){
        computerScore = computerScore + 1;
        return ("The computer wins, " + computerSelection + " beats " + playerSelection + ".");
    }
    else{
        return ("It's a tie! Two " + playerSelection + "s.");
    }
}

function game(){

    //Ask the player for their choice
    let playerSelection = prompt("Gimme your choice:").toLowerCase();
 
    //Get the computer choice
    let computerSelection = getComputerChoice();

    //Compare the two choices for the result and return round result

    //Advance the round
    round = round + 1;

    return ("Round " + round + ": " + playRound(playerSelection, computerSelection)); 
}

//Initialize the round number and score trackers
let round = 0;
let playerScore = 0;
let computerScore = 0;

//Loop the game til it reaches the max round
for(let i = 0; i<5; i++){
    console.log(game());
}

//Declare the winner
if(playerScore > computerScore){
    console.log("You win! " + playerScore + "-" + computerScore + ".");
}
else if(computerScore > playerScore){
    console.log("You lose, big sad. " + playerScore + "-" + computerScore +  ".");
}
else{
    console.log("It's a draw! " + playerScore + "-" + computerScore + ".");
}