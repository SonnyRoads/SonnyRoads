window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

  // Fade in pointing.png at 3 seconds
  setTimeout(() => {
    man.style.opacity = '1';
  }, 3000);

  // Fade in sign.mp4 at 4 seconds
  setTimeout(() => {
    sign.style.opacity = '1';
  }, 4000);

  // Fade in scroll.mp4 at 6 seconds and play
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 6000);

  // Fade in Begin Journey button at 8 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 8000);

  // Begin Journey button click handler
  startBtn.addEventListener('click', () => {
    // Step 1: fade everything out
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // Step 2: fade stage to black immediately
    stage.style.background = '#000';

    // Step 3: wait 3 seconds, then add walk.mp4 and fade it in
    setTimeout(() => {
      const walkVideo = document.createElement('video');
      walkVideo.src = 'walk.mp4';
      walkVideo.classList.add('walk-video');
      walkVideo.autoplay = true;
      walkVideo.loop = false;
      walkVideo.muted = false;
      stage.appendChild(walkVideo);

      // Smooth fade-in
      setTimeout(() => {
        walkVideo.style.opacity = '1';
      }, 100); // tiny delay for DOM render
    }, 3000); // 3-second black void
  });
});