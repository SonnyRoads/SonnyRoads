window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');

  // attempt autoplay with sound
  video.play().catch(() => {
    console.log('Autoplay with sound was blocked by browser');
  });

  // fade in after 2 seconds
  setTimeout(() => {
    video.style.opacity = '1';
  }, 2000);
});