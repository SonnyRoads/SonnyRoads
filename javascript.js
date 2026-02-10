document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');

  // Fade-in version (comment out for testing)
  // setTimeout(() => {
  //   startBtn.style.opacity = '1';
  // }, 2000);

  // Click event for future use
  startBtn.addEventListener('click', () => {
    console.log("Saga button clicked!");
    // Trigger videos or next sequence here
  });
});