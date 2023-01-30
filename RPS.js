function getComputerChoice(){



    //RNG for the computers choice
    let x = Math.floor(Math.random()*3);
    let choice = ""
    

    //Check the RNG choice to assign an outcome
    if (x == 0){
        choice = "rock"
    }
    else if (x == 1){
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    
    console.log("The RNG computer choice is " + choice + ".");

    return choice
}

function playRound(playerSelection, computerSelection) {

    //Set an empty result variable
    result = "";
    
    //Nested if statements to check all results
    if (playerSelection == computerSelection){
        result = "tie";
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            result = "player wins";
        }
        else{
            result = "computer wins";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            result = "player wins";
        }
        else{
            result = "computer wins";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result = "player wins";
        }
        else{
            result = "computer wins";
        }
    }

    //results check
    console.log("The player choice is " + playerSelection + ".");
    console.log("The computer choice is " + computerSelection + ".");
    console.log("The result is " + result + ".");
    
    //Check and return certain results
    if (result == "player wins"){
        return ("The player wins, " + playerSelection + " beats " +computerSelection + ".");
    }
    else if (result == "computer wins"){
        return ("The computer wins, " + computerSelection + " beats " + playerSelection + ".");
    }
    else{
        return ("It's a tie! Two " + playerSelection + "s.");
    }
}
    //Get the computers choice
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    //Compare the two choices for the result and print to console
    console.log(playRound(playerSelection, computerSelection));



