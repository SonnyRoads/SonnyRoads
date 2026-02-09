window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('vid');

  video.addEventListener('loadedmetadata', () => {
    video.play().catch(err => {
      console.log('Play blocked:', err);
    });
  });

  setTimeout(() => {
    video.style.opacity = '1';
  }, 2000);
});