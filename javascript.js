// ---------- Helper to fade in element ----------
function fadeIn(element, delay) {
  setTimeout(() => {
    element.style.opacity = 1;
  }, delay);
}

// ---------- Grab elements ----------
const hey = document.getElementById('heyVideo');
const gate = document.getElementById('gateVideo');
const mission = document.getElementById('missionVideo');
const beginBtn = document.getElementById('beginBtn');

// ---------- Auto fade-ins ----------
fadeIn(hey, 3000);       // hey.mp4 at 3s
fadeIn(gate, 4000);      // gate.mp4 at 4s
fadeIn(mission, 6000);   // mission.mp4 at 6s
fadeIn(beginBtn, 10000); // Begin Journey at 10s

// ---------- Enable sound after fade-in ----------
setTimeout(() => { hey.muted = false; }, 3000);
setTimeout(() => { gate.muted = false; }, 4000);
setTimeout(() => { mission.muted = false; }, 6000);

// ---------- Optional: keep videos on screen (no removal needed) ----------