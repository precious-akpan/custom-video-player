const video = document.querySelector(".screen");
const controls = document.querySelector(".controls");
const buttons = document.querySelector(".btn");
const playButton = document.querySelector(".fa-play");
const stopButton = document.querySelector(".fa-stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

console.log([progressBar]);
let isPlaying = false;

const playAndPause = () => {
  isPlaying = !isPlaying;
  isPlaying ? video.play() : video.pause();
  playButton.classList.toggle("fa-play");
  playButton.classList.toggle("fa-pause");
};

playButton.addEventListener("click", playAndPause);
const pause = () => {
  video.pause();
  playButton.classList.toggle("fa-play");
  playButton.classList.toggle("fa-pause");
};

//Event Listeners
video.addEventListener("click", playAndPause);
