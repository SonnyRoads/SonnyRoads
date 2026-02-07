(() => {
  const stage = document.querySelector(".stage");
  const startBtn = document.getElementById("startBtn");
  const video = document.getElementById("bgVideo");

  startBtn.addEventListener("click", async () => {
    stage.classList.add("started");

    try {
      video.currentTime = 0;
      video.muted = true;
      await video.play();
    } catch (err) {
      console.warn("Video play blocked:", err);
      video.setAttribute("controls", "controls");
      video.style.opacity = "1";
    }
 