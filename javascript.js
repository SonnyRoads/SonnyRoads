const hey = document.getElementById('heyVideo');

window.addEventListener('DOMContentLoaded', () => {
  function playVideo() {
    hey.muted = true;  // mute first for autoplay
    hey.play().then(() => {
      console.log("hey.mp4 is playing");
    }).catch(err => {
      console.log("Retrying play due to browser block", err);
      setTimeout(playVideo, 100);
    });

    // Optional: unmute after short delay
    setTimeout(() => { hey.muted = false; }, 200);
  }

  playVideo();
});