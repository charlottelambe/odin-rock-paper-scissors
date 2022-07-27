function getComputerChoice() {
	var items = ["rock", "paper", "scissors"];
    let random_item = items[Math.floor(Math.random()*3)];
    return random_item;
 }
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
	return "You win! Rock beats Scissors";
}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
	return "You win! Scissors beats Paper";
}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
	return "You win! Paper beats Rock";
}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
	return "You lose! Rock beats Scissors";
}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
	return "You lose! Scissors beats Paper";
}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
	return "You lose! Paper beats Rock";
}
else if (playerSelection.toLowerCase() === computerSelection) {
	return "It's a draw!";
}
}
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));
