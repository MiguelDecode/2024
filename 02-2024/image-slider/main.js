const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slider = document.querySelector(".slider");

const nextSlider = () => {
  const slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
};

const prevSlider = () => {
  const slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
};

nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);
