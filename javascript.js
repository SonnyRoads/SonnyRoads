window.addEventListener('DOMContentLoaded', () => {
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');

  // Fade in scroll after 5 seconds and start playing
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 5000);

  // Fade in Begin Journey button after 6 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 6000);

  // Optional: button click handler
  startBtn.addEventListener('click', () => {
    console.log('Journey begins!');
    // Here you can add your next step (e.g., fade to black, play next video)
  });
}); 