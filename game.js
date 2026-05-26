let userScore = 0;
let compScore = 0;
let showMsg = document.querySelector("#msg");
let userSmsg = document.querySelector("#you");
let compSmsg = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("Id");
    playgame(userchoice);
  });
});

const genretchoice = () => {
  const option = ["rock", "paper", "scissors"];
  let ind = Math.floor(Math.random() * 3);
  return option[ind];
};

const drawgame = () => {
  showMsg.innerText = "game was draw. play again!";
  showMsg.style.backgroundColor = "navy";
};
const playgame = (userchoice) => {
  // console.log("userchoice = ",userchoice );
  const compchoice = genretchoice();
  // console.log("computer choice = ",compchoice);

  if (compchoice === userchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //paper,scissors
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //scissors,rock
      userwin = compchoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    shoWin(userwin);
  }
};

const score = () => {};

const shoWin = (userwin) => {
  if (userwin) {
    showMsg.innerText = " you Win. ";
    showMsg.style.backgroundColor = "green";
    userScore++;
    userSmsg.innerText = userScore;
  } else {
    showMsg.innerText = " you lose. ";
    showMsg.style.backgroundColor = "red";
    compScore++;
    compSmsg.innerText = compScore;
  }
};