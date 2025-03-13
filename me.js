//Page JS
const recInput = document.getElementById("recInput");
const recButton = document.getElementById("recButton");
const outputDiv = document.getElementById("output");

recButton.addEventListener("click", function submitRec() {
  console.log(recInput.value);
  const text = recInput.value;

  if (recInput) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    outputDiv.appendChild(newParagraph);
    recInput.value = "";
    recInput.placeholder = "Tell me what you like about me here:";
  }
});

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
});

// Temperature Converter JS
let inputTempF = document.getElementById("inputF");

document.getElementById("FtoCbutton").addEventListener("click", function () {
  let newFtemp = newFtoC(inputTempF.value);
  document.getElementById("far").innerHTML =
    inputTempF.value + " in Fahrenheit is " + newFtemp + " in Celsius.";
});
//Fahrenheit to Celsius function
let newFtoC = function FtoC(tempF) {
  return ((tempF - 32) / 9) * 5;
};

let inputTempC = document.getElementById("inputC");
document.getElementById("CtoFbutton").addEventListener("click", function () {
  let newCtemp = newCtoF(inputTempC.value);
  document.getElementById("cel").innerHTML =
    inputTempC.value + " in Celsius is " + newCtemp + " in Fahrenheit.";
});
//Celsius to Fahrenheit function
let newCtoF = function CtoF(tempC) {
  return (tempC / 5) * 9 + 32;
};
