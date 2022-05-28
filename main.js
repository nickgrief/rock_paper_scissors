function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  const comp = document.querySelector("#comp");
  if (choice === 0) {
    comp.textContent = "Rock";
    return `Rock`;
  } else if (choice === 1) {
    comp.textContent = "Paper";
    return `Paper`;
  } else {
    comp.textContent = "Scissors";
    return `Scissors`;
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

// function game() {
//   let score = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(
//       "Enter your choice (Rock, Paper or Scissors): "
//     );
//     let computerSelection = computerPlay();
//     let result = playRound(playerSelection, computerSelection);
//     switch (result) {
//       case "Nobody won!":
//         break;
//       case "You won!":
//         score += 1;
//       case "Computer won!":
//         score -= 1;
//       default:
//         break;
//     }
//     console.log(result);
//   }
//   if (score > 0) {
//     console.log("You won the whole game!");
//   } else if (score < 0) {
//     console.log("Computer won the whole game!");
//   } else {
//     console.log("Nobody won the whole game!");
//   }
// }

function displayResult(result = "Result will be here!") {
  const result_holder = document.querySelector(".results");
  result_holder.textContent = result;
}

function checkWinner() {
  if (rounds <= 0) {
    if (score > 0) {
      alert("You won the whole game!!!");
    } else if (score < 0) {
      alert("Computer won the whole game!!!");
    } else {
      alert("Nobody won the whole game!!!");
    }
    location.reload();
  }
}

let score = 0;
let rounds = 5;
const round_shower = document.querySelector("p");

const button_holder = document.querySelector("div");
const rock = button_holder.querySelector("#rock");
rock.addEventListener("click", () => {
  let result = playRound("Rock", computerPlay());
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
  displayResult(result);
  rounds--;
  round_shower.textContent = `You have ${rounds} rounds left`;
  checkWinner();
});
const paper = button_holder.querySelector("#paper");
paper.addEventListener("click", () => {
  let result = playRound("Paper", computerPlay());
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
  displayResult(result);
  rounds--;
  round_shower.textContent = `You have ${rounds} rounds left`;
  checkWinner();
});
const scissors = button_holder.querySelector("#scissors");
scissors.addEventListener("click", () => {
  let result = playRound("Scissors", computerPlay());
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
  displayResult(result);
  rounds--;
  round_shower.textContent = `You have ${rounds} rounds left`;
  checkWinner();
});

// game();
