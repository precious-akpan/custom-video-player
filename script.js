const video = document.querySelector(".screen");
const controls = document.querySelector(".controls");
const buttons = document.querySelector(".btn");
const playButton = document.querySelector(".fa-play");
const stopButton = document.querySelector(".fa-stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

console.log([video]);

//Callback functions

const updateVideoProgress = () => {};
const playAndPause = () => {
  video.paused ? video.play() : video.pause();
  playButton.classList.toggle("fa-play");
  playButton.classList.toggle("fa-pause");
};
const stopPlayback = () => {};

//Event Listeners
video.addEventListener("click", playAndPause);
playButton.addEventListener("click", playAndPause);
stopButton.addEventListener("click", stopPlayback);

video.addEventListener("timeupdate", updateVideoProgress);
