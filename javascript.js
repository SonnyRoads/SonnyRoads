const stage = document.querySelector(".stage");
const startBtn = document.getElementById("startBtn");
const bgVideo = document.getElementById("bgVideo");

async function start() {
  stage.classList.add("is-started");

  try {
    bgVideo.muted = true;
    bgVideo.currentTime = 0;
    await bgVideo.play();
  } catch (e) {
    console.warn("Video did not play:", e);
  }
}

startBtn.addEventListener("click", start);
