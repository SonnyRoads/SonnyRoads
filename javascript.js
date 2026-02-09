const hey = document.getElementById('heyVideo');

window.addEventListener('DOMContentLoaded', () => {
  function playVideo() {
    hey.muted = true; // mute first for autoplay
    hey.play().then(() => {
      console.log("hey.mp4 is playing");
    }).catch(e => {
      console.log("Autoplay blocked, retrying...", e);
      setTimeout(playVideo, 100);
    });

    // Unmute quickly (optional)
    setTimeout(() => { hey.muted = false; }, 100);
  }

  playVideo();
});