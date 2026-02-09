window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('heyVideo');

  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;

  const tryPlay = () => {
    video.play().catch(() => {
      // Retry until browser allows playback
      setTimeout(tryPlay, 100);
    });
  };

  video.addEventListener('canplay', tryPlay);
});