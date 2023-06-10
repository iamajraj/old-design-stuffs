// board
const blockSize = 25;
const rows = 20;
const cols = 20;

let board;
let context;

// snake
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

// food
let foodX;
let foodY;

// food eaten
let score = 0;

// Game over
let gameOver = false;

window.onload = () => {
    board = document.getElementById("canvas");

    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFoods();
    document.addEventListener("keyup", changeDirection);
    document.querySelector("button").addEventListener("click", () => {
        gameOver = false;
        snakeX = blockSize * 5;
        snakeY = blockSize * 5;
        velocityX = 0;
        velocityY = 0;
        snakeBody = [];
        score = 0;
    });
    setInterval(update, 1000 / 10);
};

function update() {
    if (gameOver) {
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        score++;
        placeFoods();
        document.querySelector("span").textContent = `Score ${score}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(
            snakeBody[i][0],
            snakeBody[i][1],
            blockSize,
            blockSize
        );
    }

    // game over
    if (
        snakeX < 0 ||
        snakeX > cols * blockSize - 1 ||
        snakeY < 0 ||
        snakeY > rows * blockSize - 1
    ) {
        gameOver = true;
        alert("Game over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game over");
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFoods() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
