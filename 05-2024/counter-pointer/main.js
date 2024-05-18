const COLORS = ["#e00", "#0e0", "#00e", "#e0e", "#ee0", "#0ee"];
const digits = document.getElementById("digits");
const counter = document.querySelector(".counter");

let count = 0;
let currentTheme = null;

const updateCounter = () => {
  digits.textContent = count.toString().padStart(6, "0");
};

const incrementCounter = () => {
  count++;
  updateCounter();
};

const resetCounter = (event) => {
  event.preventDefault();
  count = 0;
  updateCounter();
};

const changeTheme = () => {
  currentTheme = (currentTheme + 1) % COLORS.length
  counter.style.setProperty('--color', COLORS[currentTheme])
};

// Listen the move of the mouse on the screen
document.addEventListener("pointermove", incrementCounter);

// Listen right click and reset the counter
document.addEventListener("contextmenu", resetCounter);

// Change the color of the counter
document.addEventListener('click', changeTheme)
