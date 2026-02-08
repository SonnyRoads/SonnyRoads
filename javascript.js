window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man'); // pointing.png
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

  // Fade timings
  setTimeout(() => man.style.opacity = '1', 3000);
  setTimeout(() => sign.style.opacity = '1', 4000);
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 6000);
  setTimeout(() => startBtn.style.opacity = '1', 8000);

  // Begin Journey click
  startBtn.addEventListener('click', () => {
    // Fade everything out
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // Total black
    stage.style.background = '#000';

    // --- WALK VIDEO ---
    setTimeout(() => {
      const walkVideo = document.createElement('video');
      walkVideo.src = 'walk.mp4';
      walkVideo.className = 'walk-video';
      walkVideo.autoplay = true;
      walkVideo.muted = false;
      walkVideo.playsInline = true;

      stage.appendChild(walkVideo);

      // Fade in walk.mp4
      requestAnimationFrame(() => {
        walkVideo.style.opacity = '1';
      });

      // When walk.mp4 ends → transition
      walkVideo.addEventListener('ended', () => {
        // Fade out walk.mp4
        walkVideo.style.opacity = '0';

        // Remove after fade
        setTimeout(() => {
          walkVideo.remove();

          // --- 1 SECOND BLACK VOID ---
          setTimeout(() => {
            const gateVideo = document.createElement('video');
            gateVideo.src = 'walkgate.mp4';
            gateVideo.className = 'walk-video';
            gateVideo.autoplay = true;
            gateVideo.muted = false;
            gateVideo.playsInline = true;

            stage.appendChild(gateVideo);

            // Fade in walkgate.mp4
            requestAnimationFrame(() => {
              gateVideo.style.opacity = '1';
            });

          }, 1000); // 1 second black transition

        }, 800); // fade-out duration
      });

    }, 3000); // initial black void after click
  });
});