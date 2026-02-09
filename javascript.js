const hey = document.getElementById('heyVideo');

// ---------- Load and play robustly ----------
window.addEventListener('DOMContentLoaded', () => {
  hey.muted = true;         // mute first for autoplay
  hey.play().then(() => {
    console.log("hey.mp4 started autoplaying");
  }).catch(e => {
    console.log("Autoplay failed, retrying...", e);
    // Retry after small delay
    setTimeout(() => hey.play(), 100);
  });

  // Fade in at 3s
  setTimeout(() => {
    hey.style.opacity = 1;
  }, 3000);

  // Unmute after fade-in to allow sound
  setTimeout(() => {
    hey.muted = false;
  }, 3100);
});