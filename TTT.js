console.log("Welcome to Tic-Tac-Toe");

let music = new Audio("music.mp3");
let pop = new Audio("pop.mp3");
let go = new Audio("happy-happy-happy-song.mp3");

let turn = "X";

let gameover = false;

// Turn change function
const ChangeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      gameover = true;
      go.play();
      document.getElementById("img").style.width = "180px";
    }
  });
};
// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    // Agar box empty hai tabhi fill hoga
    if (boxtext.innerText === "" && !gameover) {
      // Current turn print karo
      boxtext.innerText = turn;

      // Pop sound
      pop.play();

      checkwin();

      // Turn change karo
      turn = ChangeTurn();

      // Screen pe next turn show karo
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById("img").style.width = "0px";
  });
});
