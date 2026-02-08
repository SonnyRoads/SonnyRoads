window.addEventListener("DOMContentLoaded", () => {
  const man = document.querySelector(".man");
  const sign = document.querySelector(".sign-container");
  const scroll = document.querySelector(".scroll-video");
  const start = document.querySelector(".start");
  const stage = document.querySelector(".stage");

  // Fade timings
  setTimeout(() => man.style.opacity = "1", 3000);
  setTimeout(() => sign.style.opacity = "1", 4000);
  setTimeout(() => {
    scroll.style.opacity = "1";
    scroll.play();
  }, 6000);
  setTimeout(() => start.style.opacity = "1", 8000);

  start.addEventListener("click", () => {
    man.style.opacity = "0";
    sign.style.opacity = "0";
    scroll.style.opacity = "0";
    start.style.opacity = "0";

    setTimeout(() => {
      stage.innerHTML = "";

      const walk = document.createElement("video");
      walk.src = "walk.mp4";
      walk.autoplay = true;
      walk.muted = true;
      walk.playsInline = true;
      walk.style.position = "absolute";
      walk.style.top = "50%";
      walk.style.left = "50%";
      walk.style.transform = "translate(-50%, -50%)";
      walk.style.width = "50%";
      walk.style.height = "auto";

      stage.appendChild(walk);
    }, 3000);
  });
});