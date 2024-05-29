const songsList = [
  {
    name: "Jazz In París",
    artist: "Media Right Productions",
    src: "assets/1.mp3",
    cover: "assets/1.jpg",
  },
  {
    name: "Blue Skies",
    artist: "Silent Partner",
    src: "assets/2.mp3",
    cover: "assets/2.jpg",
  },
  {
    name: "Crimson Fly",
    artist: "Huma-Huma",
    src: "assets/3.mp3",
    cover: "assets/3.jpg",
  },
];

const artistName = document.querySelector(".artist-name");
const musicName = document.querySelector(".song-name");
const fillBar = document.querySelector(".fill-bar");
const time = document.querySelector(".time");
const cover = document.getElementById("cover");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prog = document.querySelector(".progress-bar");

let song = new Audio();

let currentSong = 0;
let playing = false;

const loadSong = (index) => {
  const { name, artist, src, cover: thumb } = songsList[index];

  artistName.innerText = artist;
  musicName.innerText = name;
  song.src = src;
  cover.style.backgroundImage = `url(${thumb})`;
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(
    2,
    "0"
  )}`;
};

const updateProgress = () => {
  if (song.duration) {
    const duration = formatTime(song.duration);
    const currentTime = formatTime(song.currentTime);

    const pos = (song.currentTime / song.duration) * 100;

    fillBar.style.width = `${pos}%`;

    time.innerText = `${currentTime} - ${duration}`;
  }
};

const togglePlayPause = () => {
  if (playing) {
    song.pause();
  } else {
    song.play();
  }

  playing = !playing;
  playBtn.classList.toggle("fa-pause", playing);
  playBtn.classList.toggle("fa-play", !playing);
  cover.classList.toggle("active", playing);
};

const playMusic = () => {
  loadSong(currentSong);
  song.play();
  playing = true;
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
  cover.classList.add("active");
};

const seek = (event) => {
  const pos = (event.offsetX / prog.clientWidth) * song.duration;

  song.currentTime = pos;
};

const nextSong = () => {
  currentSong = (currentSong + 1) % songsList.length;
  playMusic();
};

const prevSong = () => {
  currentSong = (currentSong - 1 + songsList.length) % songsList.length;
  playMusic();
};

document.addEventListener("DOMContentLoaded", () => {
  loadSong(currentSong);
  song.addEventListener("timeupdate", updateProgress);
  song.addEventListener("ended", nextSong);
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  playBtn.addEventListener("click", togglePlayPause);
  prog.addEventListener("click", seek);
});
