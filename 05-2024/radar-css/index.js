const radar = document.querySelector(".radar");
const muted = document.querySelector(".mute input");
const beep = new Audio(
  "https://cdn.freesound.org/previews/584/584179_1038806-lq.mp3"
);

const addDot = () => {
  if (Math.random() > 0.5) return;
  const dot = document.createElement("div");
  dot.classList.add("dot");
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const size = 10 + Math.floor(Math.random() * 10);
  dot.style.setProperty("--x", `${x}%`);
  dot.style.setProperty("--y", `${y}%`);
  dot.style.setProperty("--size", `${size}px`);

  radar.appendChild(dot);
  setTimeout(() => dot.remove(), 2000);
};

const playBeep = () => {
  if (muted.checked) return;
  beep.currentTime = 0;
  beep.play();
};

setInterval(() => {
  playBeep();
  addDot();
}, 1250);
