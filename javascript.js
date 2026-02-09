window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('vid');

  // wait until browser is READY to play
  video.addEventListener('loadedmetadata', () => {
    video.play().catch(err => {
      console.log('Play blocked:', err);
    });
  });
});