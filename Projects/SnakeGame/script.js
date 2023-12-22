// Define HTML elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
const bonusSound = new Audio('music/red-egg-sound.mp3');
const bonusFoodSound = new Audio('music/eat-red-egg.mp3');

// Define game variables
let currentScore = 0;
let whiteEggCount = 0;
let redEgg = null;
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let redEggInterval;
let gameSpeedDelay = 350;
let gameStarted = false;

// Draw game map, snake, food
function draw() {
  board.innerHTML = '';
  drawSnake();
  drawFood();
  updateScore();
}

// Draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

// Set the position of snake or food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// Draw food function
function drawFood() {
  if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    const imgElement = document.createElement('img');
    imgElement.src = food.color === 'red' ? './images/bonus-egg.png' : './images/white-egg.png';
    foodElement.appendChild(imgElement);
    setPosition(foodElement, food);
    board.appendChild(foodElement);

    if (redEgg) {
      const redFoodElement = createGameElement('div', 'food');
      const redImgElement = document.createElement('img');
      redImgElement.src = './images/bonus-egg.png';
      redFoodElement.appendChild(redImgElement);
      setPosition(redFoodElement, redEgg);
      board.appendChild(redFoodElement);
    }
  }
}

// Generate food
function generateFood() {
  let x, y;
  do {
    x = Math.floor(Math.random() * gridSize) + 1;
    y = Math.floor(Math.random() * gridSize) + 1;
  } while (isPositionInSnake(x, y));
  return { x, y, color: 'white', points: 1 };
}

function generateRedEgg() {
  bonusSound.play();
  let x, y;
  do {
    x = Math.floor(Math.random() * gridSize) + 1;
    y = Math.floor(Math.random() * gridSize) + 1;
  } while (isPositionInSnake(x, y));
  return { x, y, color: 'red', points: 5 };
}

function isPositionInSnake(x, y) {
  return snake.some(segment => segment.x === x && segment.y === y);
}

// Moving the snake
function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  snake.unshift(head);  // Add the new head to the beginning of the snake array

  if (head.x === food.x && head.y === food.y) {
    foodSound.play();
    currentScore += food.points; // Add the points of the white egg to the score
    food = generateFood();
    whiteEggCount++;
    if (whiteEggCount >= 10) {
      redEgg = generateRedEgg();
      whiteEggCount = 0;
      redEggInterval = setTimeout(() => {
        redEgg = null;
      }, 6000); // Remove the red egg after 10 seconds
    }
    increaseSpeed();
    clearInterval(gameInterval); // Clear past interval
    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else if (redEgg && head.x === redEgg.x && head.y === redEgg.y) {
    bonusFoodSound.play();
    bonusSound.pause();
    bonusSound.currentTime = 0;
    currentScore += redEgg.points; // Add the points of the red egg to the score
    redEgg = null;
  } else {
    snake.pop();
  }
}

// Start game function
function startGame() {
  gameStarted = true; // Keep track of a running game
  document.getElementById('game-board').style.backgroundImage = "url('./images/game-board-bg.png')";
  instructionText.style.display = 'none';
  logo.style.display = 'none';
  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
}

// Keypress event listener
function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === 'Space') ||
    (!gameStarted && event.key === ' ')
  ) {
    startGame();
    musicSound.play();
    musicSound.loop = true;
    musicSound.volume = 0.3;
  } else {
    moveSound.play();
    let newDirection;
    switch (event.key) {
      case 'ArrowUp':
        newDirection = 'up';
        break;
      case 'ArrowDown':
        newDirection = 'down';
        break;
      case 'ArrowLeft':
        newDirection = 'left';
        break;
      case 'ArrowRight':
        newDirection = 'right';
        break;
    }
    // Check if new direction is not directly opposite to current direction
    if (
        (newDirection === 'up' && direction !== 'down') ||
        (newDirection === 'down' && direction !== 'up') ||
        (newDirection === 'left' && direction !== 'right') ||
        (newDirection === 'right' && direction !== 'left')
      ) {
        direction = newDirection;
        moveSound.play();
      }
  }
}

document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
  if (gameSpeedDelay > 300) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 200) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 0.5;
  }
}

function checkCollision() {
  const head = snake[0];

  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    resetGame();
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  document.getElementById('game-board').style.backgroundImage = "none";
  clearInterval(redEggInterval);
  redEgg = null;
  gameOverSound.play();
  musicSound.pause();
  bonusSound.pause();
  bonusSound.currentTime = 0;
  updateHighScore();
  stopGame();
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = 'right';
  gameSpeedDelay = 350;  
  updateScore();
  currentScore = 0;
  whiteEggCount = 0;
}

function updateScore() {
  score.textContent = currentScore.toString().padStart(3, '0');
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = 'block';
  logo.style.display = 'block';
}

function updateHighScore() {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = highScore.toString().padStart(3, '0');
  }
  highScoreText.style.display = 'block';
}