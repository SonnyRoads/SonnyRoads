document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');

  // Fade in saga.png at 2 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 2000);
});