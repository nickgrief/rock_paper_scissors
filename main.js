function computerPlay() {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return `Rock`
	} else if (choice === 1) {
		return `Paper`
	} else {
		return `Scissors`
	}
}

function playRound(playerSelection = "Rock", computerSelection = "Rock") {
	console.log(playerSelection, computerSelection);
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if (playerSelection === computerSelection) {
		return "Nobody won!";
	} else {
		if (playerSelection === `rock`) {
			if (computerSelection === `paper`) {
				return "Computer won!";
			} else {
				return "You won!";
			}
		} else if (playerSelection === `paper`) {
			if (computerSelection === `scissors`) {
				return "Computer won!";
			} else {
				return "You won!";
			}
		} else {
			if (computerSelection === `rock`) {
				return "Computer won!";
			} else {
				return "You won!";
			}
		}
	}
}

function game() {
	let score = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("Enter your choice (Rock, Paper or Scissors): ");
		let computerSelection = computerPlay();
		let result = playRound(playerSelection, computerSelection);
		switch (result) {
			case "Nobody won!":
				break;
			case "You won!":
				score += 1;
			case "Computer won!":
				score -= 1;
			default:
				break;
		}
		console.log(result);
	}
	if (score > 0) {
		console.log("You won the whole game!");
	} else if (score < 0) {
		console.log("Computer won the whole game!");
	} else {
		console.log("Nobody won the whole game!");
	}
}

game();

