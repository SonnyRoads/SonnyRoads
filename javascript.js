const stage = document.querySelector(".stage");
const startBtn = document.getElementById("startBtn");
const bgVideo = document.getElementById("bgVideo");

async function start() {
  stage.classList.add("is-started");

  try {
    bgVideo.muted = true;
    bgVideo.playsInline = true;
    bgVideo.currentTime = 0;
    await bgVideo.play();
  } catch (e) {
    console.warn("Video did not play:", e);
    // Fallback: show controls so you can manually start if a browser blocks playback
    bgVideo.setAttribute("controls", "controls");
    bgVideo.style.opacity = "0.95";
  }
}

startBtn.addEventListener("click", start);
