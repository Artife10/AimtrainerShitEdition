const button = document.getElementById("button");
const countDownElement = document.getElementById("score");
const HighScore = document.getElementById("szar");

let countDownTime = 4;
let score = 0;
let highScore = 0;
let interval;

function startCountdown() {
    clearInterval(interval);
    countDownTime = 6;
    countDownElement.textContent = `Score: ${score} | Time: ${countDownTime} seconds remaining`;



    interval = setInterval(function () {
        countDownTime--;
        countDownElement.textContent = `Score: ${score} | Time: ${countDownTime} seconds remaining`;

        if (countDownTime <= 0) {
            clearInterval(interval);
            updateHighScore();
            countDownElement.textContent = `Time is up! Score reset.`;
            score = 0;
        }
    }, 150);
}

function shoot() {
    if (countDownTime > 0) {
        score++;
        countDownElement.textContent = `Score: ${score} | Time: ${countDownTime} seconds remaining`;

        const randomTop = Math.random() * 600;
        const randomLeft = Math.random() * 600;

        button.style.top = randomTop + "px";
        button.style.left = randomLeft + "px";

        startCountdown();
    } else {
        updateHighScore();
        score = 0;
        countDownElement.textContent = `Score: ${score} | Time: ${countDownTime} seconds remaining`;
        startCountdown();
    }
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        HighScore.textContent = `High Score: ${highScore}`;
    }
}

button.addEventListener("click", shoot);
startCountdown();
