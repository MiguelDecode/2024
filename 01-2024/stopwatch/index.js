const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerElement = document.getElementById("timer");

let timer;

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;

const drawClock = () => {
  const formatHours = String(hours).padStart(2, "0");
  const formatMinutes = String(minutes).padStart(2, "0");
  const formatSeconds = String(seconds).padStart(2, "0");
  const formatMiliSeconds = String(miliSeconds).padStart(2, "0");

  timerElement.innerHTML = `${formatHours}:${formatMinutes}:${formatSeconds}:${formatMiliSeconds}`;
};

const startClock = () => {
  timer = setInterval(() => {
    miliSeconds++;
    if (miliSeconds === 100) {
      seconds++;
      miliSeconds = 0;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }

    drawClock();
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopClock = () => {
  clearInterval(timer);

  stopBtn.disabled = true;
  startBtn.disabled = false;
};

const resetClock = () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;

  clearInterval(timer);
  drawClock();

  stopBtn.disabled = false;
  startBtn.disabled = false;
};

const handleClicks = (event) => {
  if (event.target === startBtn) startClock();
  if (event.target === stopBtn) stopClock();
  if (event.target === resetBtn) resetClock();
};

document.addEventListener("click", handleClicks);
