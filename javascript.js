const hey = document.getElementById('heyVideo');

window.addEventListener('DOMContentLoaded', () => {
  hey.muted = true;  // must mute first for autoplay

  function playVideo() {
    hey.play().then(() => {
      console.log("hey.mp4 playing");
    }).catch(err => {
      console.log("Autoplay blocked, retrying...", err);
      setTimeout(playVideo, 100);
    });
  }

  playVideo();

  // Optional: unmute after short delay
  setTimeout(() => {
    hey.muted = false;
  }, 200);
});