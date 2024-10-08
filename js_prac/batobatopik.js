// score
const score = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
// set initial score
document.querySelector(
  ".score"
).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

let result = "";
/*
      function to identify the winner
      Rule:
      Rock beats Scissors
      Scissors beats Paper
      Paper beats Rock
    */
function playGame(pMove) {
  const cMove = computerMove();
  switch (pMove) {
    case "Rock":
      switch (cMove) {
        case "Rock":
          result = "Tie";
          break;
        case "Paper":
          result = "Lose";
          break;
        case "Scissors":
          result = "Win";
          break;
      }
      break;
    case "Paper":
      switch (cMove) {
        case "Rock":
          result = "Win";
          break;
        case "Paper":
          result = "Tie";
          break;
        case "Scissors":
          result = "Lose";
          break;
      }
      break;
    case "Scissors":
      switch (cMove) {
        case "Rock":
          result = "Lose";
          break;
        case "Paper":
          result = "Win";
          break;
        case "Scissors":
          result = "Tie";
          break;
      }
      break;
  }
  updateScore(result);
  return { result, cMove };
} // end of playGame

/* Calculate Score */
function updateScore(result) {
  switch (result) {
    case "Win":
      score.wins++;
      break;
    case "Lose":
      score.loses++;
      break;
    case "Tie":
      score.ties++;
      break;
    default:
      console.log("Invalid Result");
  }
} // end of updateScore

/* function to get the computer's move */
function computerMove() {
  const rand = Math.floor(Math.random() * 3) + 1;
  const cMove = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };

  return cMove[rand];
} // end of computerMove

/* function to display the result */
function updateDOM(move) {
  const outcome = playGame(move);
  const gameresult = document.querySelector(".result");
  const gameMove = document.querySelector(".move");
  const gameScore = document.querySelector(".score");

  gameresult.innerHTML = `Result: ${outcome.result}`;
  gameMove.innerHTML = `Your Move: ${move}, Computer's Move: ${outcome.cMove}`;
  gameScore.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

  // implementation of localStorage to store the score
  localStorage.setItem("scores", JSON.stringify(score));
}

/* reset score*/
function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  const gameresult = document.querySelector(".result");
  const gameMove = document.querySelector(".move");
  const gameScore = document.querySelector(".score");

  gameresult.innerHTML = "";
  gameMove.innerHTML = "";
  gameScore.innerHTML = "Wins: 0, Loses: 0, Ties: 0";

  // reset score in localStorage
  localStorage.removeItem("scores");
}
