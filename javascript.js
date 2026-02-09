function fadeIn(element, delay) {
  setTimeout(() => { element.style.opacity = 1; }, delay);
}

// Grab elements
const hey = document.getElementById('heyVideo');
const gate = document.getElementById('gateVideo');
const mission = document.getElementById('missionVideo');
const beginBtn = document.getElementById('beginBtn');

// ---------- Autoplay fix for modern browsers ----------
window.addEventListener('load', () => {
  [hey, gate, mission].forEach(video => {
    video.muted = true;  // mute first for autoplay
    video.play().catch(e => console.log('Autoplay blocked, retrying...', e));
  });

  setTimeout(() => {
    [hey, gate, mission].forEach(video => video.muted = false);
  }, 100);
});

// ---------- Fade-ins ----------
fadeIn(hey, 3000);       // hey.mp4 at 3s
fadeIn(gate, 4000);      // gate.mp4 at 4s
fadeIn(mission, 6000);   // mission.mp4 at 6s
fadeIn(beginBtn, 10000); // Begin Journey at 10s