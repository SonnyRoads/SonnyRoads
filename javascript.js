document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");

  console.log("JS LOADED");

  // Safety: force visibility after 2s
  setTimeout(() => {
    btn.style.opacity = "1";
    btn.style.display = "block";
  }, 2000);
});