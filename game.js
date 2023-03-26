let startPlayerScore = 0;
let startComputerScore = 0;

const playerChoices = document.querySelectorAll(".choices button");
playerChoices.forEach(function (playerSelection) {
  playerSelection.addEventListener("click", function () {
    const choices = ["Rock", "Paper", "Scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    const computerSelection = choices[compChoice];
    // console.log(computerSelection);
    // console.log(playerSelection.innerHTML);
    switch (true) {
      case computerSelection === playerSelection.innerHTML:
        document.getElementById("result").innerHTML = "It's a Tie";
        // console.log("tie");
        break;
      case playerSelection.innerHTML === "Rock" &&
        computerSelection === "Scissors":
      case playerSelection.innerHTML === "Paper" &&
        computerSelection === "Rock":
      case playerSelection.innerHTML === "Scissors" &&
        computerSelection === "Paper":
        playerScore = ++startPlayerScore;
        document.getElementById("pScore").innerHTML = playerScore;
        document.getElementById("result").innerHTML =
          "The Player Wins!! There is Hope for Humanity";
        // console.log("player wins", playerScore);
        break;
      case computerSelection === "Rock" &&
        playerSelection.innerHTML === "Scissors":
      case computerSelection === "Paper" &&
        playerSelection.innerHTML === "Rock":
      case computerSelection === "Scissors" &&
        playerSelection.innerHTML === "Paper":
        computerScore = ++startComputerScore;
        document.getElementById("cScore").innerHTML = computerScore;
        document.getElementById("result").innerHTML =
          "SkyNet Grows STRONGER!!! BEWARE";
        // console.log("computer wins", computerScore);
        break;
    }
  });
});
