//your JS code here. If required.
let audio;

function playAudio(filename) {
  stopAudio(); // Stop any currently playing audio before starting a new one
  audio = new Audio(`sounds/${filename}`);
  audio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}