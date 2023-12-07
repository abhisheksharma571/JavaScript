let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let chooseXBtn = document.querySelector("#turnX")
let chooseOBtn = document.querySelector("#turnO")
let chooseTurnBtns = document.querySelectorAll(".choosePlayerBtn")

let turnO; //playerX, playerO
let count = 0; //To Track Draw

resetBtn.style.visibility = "hidden";

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Disable boxes at the start
boxes.forEach((box) => {
    box.disabled = true;
  });

  const setTurnO = ()=>{
    turnO = true;
    hideChooseTurnButtons();
    showResetButton();
    enableBoxes(); // Enable boxes when turn button is clicked
}

const setTurnX = ()=>{
    turnO = false;
    hideChooseTurnButtons();
    showResetButton();
    enableBoxes(); // Enable boxes when turn button is clicked
}

const resetGame = () => {
    count = 0;
    turnO = null;
    disableBoxes(); // Disable boxes when game is reset
    msgContainer.classList.add("hide");
    showChooseTurnButtons();
    hideResetButton();
  
    // Clear the text inside the boxes
    boxes.forEach((box) => {
      box.innerText = "";
    });
  };

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === null) {
        // If neither turnX nor turnO button has been clicked, do not start the game
        return;
      }
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  turnO =null;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  turnO = null;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

const hideChooseTurnButtons = () => {
    chooseTurnBtns.forEach(btn => btn.style.visibility = "hidden");
  };
  
  const showChooseTurnButtons = () => {
    chooseTurnBtns.forEach(btn => btn.style.visibility = "visible");
  };
  
  const hideResetButton = () => {
    resetBtn.style.visibility = "hidden";
  };
  
  const showResetButton = () => {
    resetBtn.style.visibility = "visible";
  };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
chooseOBtn.addEventListener("click", setTurnO);
chooseXBtn.addEventListener("click", setTurnX);

showChooseTurnButtons();
hideResetButton();