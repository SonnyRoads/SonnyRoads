window.addEventListener('DOMContentLoaded', () => {
  const vid = document.getElementById('vid');

  // try to play immediately (with sound if browser allows)
  vid.play().catch(() => {});

  // fade in after 2 seconds
  setTimeout(() => {
    vid.style.opacity = '1';
  }, 2000);
});