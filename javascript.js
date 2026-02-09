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
    video.muted = true; // mute first for autoplay to work
    video.play().catch(e => console.log('Autoplay blocked, retrying...', e));
  });

  // Unmute quickly (after 100ms) to allow sound
  setTimeout(() => {
    [hey, gate, mission].forEach(video => video.muted = false);
  }, 100);
});

// ---------- Fade-ins ----------
fadeIn(hey, 3000);
fadeIn(gate, 4000);
fadeIn(mission, 6000);
fadeIn(beginBtn, 10000);

// ---------- Videos stay on screen; no removal needed ----------