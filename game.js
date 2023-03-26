let playerScore = document.getElementById("pScore").innerHTML;
let computerScore = document.getElementById("cScore").innerHTML;

const playerChoices = document.querySelectorAll(".choices button");
playerChoices.forEach(function (playerSelection) {
  playerSelection.addEventListener("click", function () {
    const choices = ["Rock", "Paper", "Scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    const computerSelection = choices[compChoice];
    console.log(computerSelection);
    // switch (this.innerHTML) {
    //   case "Rock":
    //     console.log("success");
    // }
    // console.log(this.innerHTML);
  });
});
