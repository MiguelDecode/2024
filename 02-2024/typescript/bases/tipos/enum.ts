(() => {
  enum AudioLevel {
    min = 1, // 0
    medium, // 1
    max = 10, // 2
  }

  let currentAudio = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
