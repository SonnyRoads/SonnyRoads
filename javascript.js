const hey = document.getElementById('heyVideo');

window.addEventListener('DOMContentLoaded', () => {
  // Attempt to play immediately
  hey.muted = false;  // Try with sound
  hey.play().then(() => {
    console.log("hey.mp4 is playing");
  }).catch(e => {
    console.log("Autoplay failed, muting and retrying...", e);
    hey.muted = true;
    hey.play();
  });
});