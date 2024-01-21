const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

const timerDisplay = document.getElementById("timer");
let isRunning = false;

let chrono;
let minutes = 25;
let seconds = 0;

const drawClock = () => {
  const formatMinutes = String(minutes).padStart(2, 0);
  const formatSeconds = String(seconds).padStart(2, 0);

  timerDisplay.innerHTML = `${formatMinutes}:${formatSeconds}`;
};

const updateClock = () => {
  if (minutes === 0 && seconds === 0) {
    resetTimer();
    console.log("Your study time is finished, take a break");
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  drawClock();
};

const startTimer = () => {
  if (!isRunning) {
    chrono = setInterval(() => {
      updateClock();
    }, 5);
  }
};

const stopTimer = () => {
  isRunning = false;
  clearInterval(chrono);
};

const resetTimer = () => {
  stopTimer();
  minutes = 25;
  seconds = 0;
  timerDisplay.innerHTML = "25:00";
};

btnStart.addEventListener("click", startTimer);

btnStop.addEventListener("click", stopTimer);

btnReset.addEventListener("click", resetTimer);
