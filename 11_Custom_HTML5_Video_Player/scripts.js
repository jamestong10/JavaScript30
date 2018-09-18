// 1. Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 2. Build out functions
function togglePlay() {
  // paused is the only one property of video.
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  const method = video.paused ? 'play' : 'pause';
  // video access method name and immediatly call it.
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '||';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProcess() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// 3. Hook up the event listeners

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// 使用 event listener 取代 setInterval
video.addEventListener('timeupdate', handleProcess);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
let mouseDown = false;
progress.addEventListener('mousedown', () => mouseDown = !mouseDown);
progress.addEventListener('mouseup', () => mouseDown = !mouseDown);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));