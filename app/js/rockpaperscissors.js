////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	var move
	if (move !=null{
		move = move;
	}else{
		move = getInput();
	}
	return move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
 /* Your Expression */;
}

function getComputerMove(move) {
	var move
	if (move != null){
		move = move;
	}else{
		move = randomPlay();
	}
	return move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == rock && computerMove == rock){
        winner = "tie";
        document.write(winner);
    }else if(playerMove == rock && computerMove == scissors){
        winner = 'player';
        document.write(winner);
    }else if(playerMove == rock && computerMove == paper){
        winner = 'computer';
        document.write(winner);
    }else if(playerMove == scissors && computerMove == rock){
        winner = 'computer';
        document.write(winner);
    }else if(playerMove == scissors && computerMove == scissors){
        winner= 'tie';
        document.write(winner);
    }else if(playerMove == scissors && computerMove == paper){
        winner = 'player';
        document.write(winner);
    }else if(playerMove == paper && computerMove == rock){
        winner = 'computer';
        document.write(winner);
    }else if(playerMove == paper && computerMove == scissors){
        winner = 'computer';
        document.write(winner);
    }else if (playerMove == paper && computerMove == paper){
        winner = 'tie';
        document.write(winner);
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playersWins < 5 || computerWins < 5){
        getWinner(playerMove,computerMove);
        if(winner == "player"){
            playerWins ++;
            console.log("Player " + playerWins + " " + "Computer " + computerWins);
        }else if(winner = "computer"){
            computerWins ++;
            console.log("Player " + playerWins + " " + "Computer " + computerWins);
        }else{
            console.log("Tie");
        }
    }
    return [playerWins, computerWins];
}

