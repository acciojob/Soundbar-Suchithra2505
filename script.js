//your JS code here. If required.
let audio;

function playAudio(soundFileName) {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  audio = new Audio(`sounds/${soundFileName}`);
  audio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
