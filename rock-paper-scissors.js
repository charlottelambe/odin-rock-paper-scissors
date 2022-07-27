function getComputerChoice() {
	var items = ["Rock", "Paper", "Scissors"];
    let random_item = items[Math.floor(Math.random()*3)];
    return random_item;
 }
console.log(getComputerChoice());
