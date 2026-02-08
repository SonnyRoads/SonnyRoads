(function () {
  const sign = document.getElementById("sign");
  const sound = document.getElementById("signSound");

  // Create blackout overlay
  const blackout = document.createElement("div");
  blackout.className = "blackout";
  document.body.appendChild(blackout);

  // Activate sign after 6 seconds
  setTimeout(() => {
    sign.classList.add("is-active");
  }, 6000);

  // Click interaction
  sign.addEventListener("click", () => {
    if (!sign.classList.contains("is-active")) return;

    // Prevent double clicks
    sign.classList.remove("is-active");

    // Play sound once
    try {
      sound.currentTime = 0;
      sound.play();
    } catch (e) {}

    // Fade to black
    setTimeout(() => {
      blackout.classList.add("is-visible");
    }, 150);
  });
})();