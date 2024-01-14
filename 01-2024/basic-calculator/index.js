const screen = document.getElementById("screen");
const buttons = document.getElementById("buttons");
const btnClear = document.getElementById("clear");
const btnEqual = document.getElementById("equal");

const resetScreen = () => {
  screen.value = "";
};

const calculateResult = () => {
  screen.value = eval(screen.value);
};

const handleButtons = (event) => {
  if (event.target === btnEqual) {
    calculateResult();
    return;
  } else if (event.target === btnClear) {
    resetScreen();
    return;
  } else if (event.target.classList.contains("btn")) {
    screen.value += event.target.textContent;
  }
};

buttons.addEventListener("click", handleButtons);
