const video = document.querySelector(".screen");
const playButton = document.querySelector(".fa-play");
const stopButton = document.querySelector(".fa-stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

//Callback functions

const updateVideoProgress = () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
  video.ended ? updatePlayIcon() : null;

  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);

  if (seconds < 10) seconds = `0${seconds}`;

  if (minutes < 60) minutes = `0${minutes}`;

  timeStamp.innerHTML = `${minutes}:${seconds}`;
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
