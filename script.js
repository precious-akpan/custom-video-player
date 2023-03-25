const video = document.querySelector(".screen");
const controls = document.querySelector(".controls");
const buttons = document.querySelector(".btn");
const playButton = document.querySelector(".fa-play");
const stopButton = document.querySelector(".fa-stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

//Callback functions

const updateVideoProgress = () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
  video.ended ? updatePlayIcon() : null;
  console.log(progressBar.value);
};

function updatePlayIcon() {
  playButton.classList.toggle("fa-play");
  playButton.classList.toggle("fa-pause");
}

const playAndPause = () => {
  video.paused ? video.play() : video.pause();
  updatePlayIcon();
};
const stopPlayback = () => {
  video.currentTime = 0;
  video.pause();
};

//Event Listeners
video.addEventListener("click", playAndPause);
playButton.addEventListener("click", playAndPause);
stopButton.addEventListener("click", stopPlayback);
const setVideoProgress = () => {
  video.currentTime = (progressBar.value * video.duration) / 100;
};
progressBar.addEventListener("click", setVideoProgress);
video.addEventListener("timeupdate", updateVideoProgress);
