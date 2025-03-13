//Rock Paper Scissors JS
let myChoice = null;

document.getElementById("rock").addEventListener("click", function () {
  console.log("I choose rock.");
  document.getElementById("my-result").innerHTML = "I choose rock.";
  myChoice = "rock";
  let result = compareChoices(myChoice);
  document.getElementById("game-results").innerHTML = result;
});

document.getElementById("paper").addEventListener("click", function () {
  console.log("I choose paper.");
  document.getElementById("my-result").innerHTML = "I choose paper.";
  myChoice = "paper";
  let result = compareChoices(myChoice);
  document.getElementById("game-results").innerHTML = result;
});

document.getElementById("scissors").addEventListener("click", function () {
  console.log("I choose scissors.");
  document.getElementById("my-result").innerHTML = "I choose scissors.";
  myChoice = "scissors";
  let result = compareChoices(myChoice);
  document.getElementById("game-results").innerHTML = result;
});

function compareChoices(userChoice) {
  let choices = ["rock", "paper", "scissors"];
  let floor = 0;
  let ceiling = 2;
  let randomChoice = Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  let compChoice = choices[randomChoice];

  document.getElementById("comp-result").innerHTML =
    "Computer choose " + compChoice + ".";

  if (myChoice == compChoice) {
    return "We have a draw. Choose again.";
  } else if (
    (myChoice == "scissors" && compChoice == "paper") ||
    (myChoice == "paper" && compChoice == "rock") ||
    (myChoice == "rock" && compChoice == "scissors")
  ) {
    return "You win!";
  } else {
    return "You lose! Try again.";
  }
}

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("my-result").innerHTML = "";
    document.getElementById("comp-result").innerHTML = "";
    document.getElementById("game-results").innerHTML = "";
})