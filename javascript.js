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

  // Fade in scroll.mp4 at 6 seconds and start playing
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
    console.log('Journey begins!');
    // Here you can add your next actions (e.g., fade to black, play next video)
  });
});