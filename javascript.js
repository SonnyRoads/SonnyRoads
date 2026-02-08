window.addEventListener('DOMContentLoaded', () => {
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');

  // Fade in scroll after 5 seconds and play
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 5000);

  // Fade in Begin Journey button after 6 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 6000);

  // Begin Journey button click handler
  startBtn.addEventListener('click', () => {
    console.log('Journey begins!');
    // Here you can add next actions, e.g., fade to black, play video
  });
});