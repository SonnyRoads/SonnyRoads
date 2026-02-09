const hey = document.getElementById('heyVideo');

// ---------- Autoplay fix for modern browsers ----------
window.addEventListener('load', () => {
  hey.muted = true;        // mute first
  hey.play().catch(e => console.log('Autoplay blocked', e));

  setTimeout(() => {
    hey.muted = false;     // unmute quickly
  }, 100);
});

// ---------- Fade-in at 3 seconds ----------
setTimeout(() => {
  hey.style.opacity = 1;
}, 3000);