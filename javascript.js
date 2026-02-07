(function () {
  const scroll = document.getElementById("scrollVideo");

  // Safety reset
  scroll.pause();
  scroll.currentTime = 0;

  // Show + play scroll after EXACTLY 5 seconds
  setTimeout(() => {
    scroll.classList.add("is-visible");

    scroll.play().catch(err => {
      console.warn("Scroll playback blocked:", err);
    });
  }, 5000);
})();