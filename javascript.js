// Core interaction logic: start the experience, play ambience, no loop
(function () {
  const stage = document.querySelector(".stage");
  const startBtn = document.getElementById("startBtn");
  const bgVideo = document.getElementById("bgVideo");

  // Helper to safely play video with best effort given autoplay policies
  async function playBackgroundVideo() {
    // Ensure muted to satisfy autoplay policies (no sound)
    bgVideo.muted = true;
    // volume is irrelevant when muted; leave as a safeguard
    bgVideo.volume = 0;
    // Explicitly disable looping for the intended UX
    bgVideo.loop = false;

    try {
      // Reset to start just in case
      bgVideo.pause();
      bgVideo.currentTime = 0;
      // Attempt to play
      await bgVideo.play();
    } catch (err) {
      // If autoplay is blocked for any reason, show a graceful fallback
      // Allow user to manually start via controls
      bgVideo.setAttribute("controls", "controls");
      bgVideo.style.opacity = "1";
      console.warn("Playback failed or blocked by autoplay policy:", err);
    }
  }

  startBtn.addEventListener("click", async () => {
    // Mark stage as started for visual changes (fade-in video, etc.)
    stage.classList.add("is-started");

    // Start playback with the anticiated settings
    await playBackgroundVideo();

    // If playback succeeded or controls are shown, you may offer a replay path.
    // For now, the "start" button is visually hidden via CSS interaction.
  });

  // Optional: allow Enter/Space to trigger from the stage for accessibility
  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.code === "Space") {
      e.preventDefault();
      startBtn.click();
    }
  });

  // Ensure if the video ends (since loop is false) it stays ended and doesn't replay automatically
  bgVideo.addEventListener("ended", () => {
    // Keep UI state consistent; you can reset to allow replay if desired
    // Example: stage.classList.remove("is-started");
    // bgVideo.currentTime = 0;
    // bgVideo.pause();
  });
})();
