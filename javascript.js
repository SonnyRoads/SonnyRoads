const hey = document.getElementById('heyVideo');

window.addEventListener('DOMContentLoaded', () => {
  hey.muted = true; // mute first to allow autoplay
  hey.play().then(() => {
    console.log("hey.mp4 is playing");
  }).catch(e => {
    console.log("Autoplay blocked, retrying...", e);
    setTimeout(() => hey.play(), 100);
  });

  // Optional: unmute after short delay if browser allows
  setTimeout(() => { hey.muted = false; }, 100);
});