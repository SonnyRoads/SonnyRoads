window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');

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

  // Optional: click handler for button
  startBtn.addEventListener('click', () => {
    console.log('Journey begins!');
    // Next steps: fade to black, play video, etc.
  });
});