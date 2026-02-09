window.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('.stage');
  const startBtn = document.querySelector('.medieval-button');

  // ---------- Helper to play a single video ----------
  function playVideo(src, scale = 1) {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = src;
      video.autoplay = true;
      video.playsInline = true;
      video.muted = false;

      Object.assign(video.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: 'auto',
        opacity: '0',
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: 'opacity 0.8s ease',
        zIndex: '5',
        background: 'black'
      });

      stage.appendChild(video);
      requestAnimationFrame(() => video.style.opacity = '1');

      video.addEventListener('ended', () => {
        video.style.opacity = '0';
        setTimeout(() => {
          video.remove();
          resolve();
        }, 800); // Fade out duration
      });
    });
  }

  // ---------- Define video sequence ----------
  const videos = [
    { src: 'hey.mp4', scale: 1.25, startDelay: 3000 },   // 3s after start
    { src: 'gate.mp4', scale: 1.35, startDelay: 2000 },  // 2s gap
    { src: 'mission.mp4', scale: 1.45, startDelay: 2000 } // 2s gap
  ];

  const buttonDelay = 2000; // Delay after last video before button appears

  // ---------- Play sequence ----------
  async function playSequence() {
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      await new Promise(res => setTimeout(res, video.startDelay));
      await playVideo(video.src, video.scale);
    }
    // Show button after last video + delay
    setTimeout(() => {
      startBtn.style.opacity = '1';
    }, buttonDelay);
  }

  // ---------- Start the cinematic sequence ----------
  playSequence();
});