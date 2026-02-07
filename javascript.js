const stage = document.querySelector(".stage");
const startBtn = document.getElementById("startBtn");
const bgVideo = document.getElementById("bgVideo");

startBtn.addEventListener("click", async () => {
  stage.classList.add("is-started");

  try {
    bgVideo.muted = true;
    bgVideo.playsInline = true;
    bgVideo.currentTime = 0;
    await bgVideo.play();
  } catch (e) {
    console.warn("Video did not play:", e);
    bgVideo.setAttribute("controls", "controls");
    bgVideo.style.opacity = "0.95";
  }
});
