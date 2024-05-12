const progress = document.getElementById("progress");

const handlerProgress = () => {
  // Generate a random value between 0 and 99
  const amount = Math.floor(Math.random() * 100);

  progress.style.setProperty("--progress", `${amount}%`);
};

progress.addEventListener("click", handlerProgress);
