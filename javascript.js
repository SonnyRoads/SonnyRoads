window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

  // Fade in man at 3 seconds
  setTimeout(() => {
    man.style.opacity = '1';
  }, 3000);

  // Fade in sign.mp4 at 4 seconds
  setTimeout(() => {
    sign.style.opacity = '1';
  }, 4000);

  // Fade in scroll.mp4 at 6 seconds
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 6000);

  // Fade in Begin Journey button at 8 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 8000);

  // Button click handler
  startBtn.addEventListener('click', () => {
    // Fade out all elements
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // Stage black
    stage.style.background = '#000';

    // Wait 3s, then add walk.mp4 at half-screen size
    setTimeout(() => {
      const walkVideo = document.createElement('video');
      walkVideo.src = 'walk.mp4';
      walkVideo.classList.add('walk-video');
      walkVideo.autoplay = true;
      walkVideo.loop = false;
      walkVideo.muted = false;
      stage.appendChild(walkVideo);

      // Fade in walk.mp4
      setTimeout(() => {
        walkVideo.style.opacity = '1';
      }, 100); // tiny delay for DOM render
    }, 3000); // 3-second black void
  });
});