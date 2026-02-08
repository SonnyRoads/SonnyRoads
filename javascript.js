window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man'); // pointing.png
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

  // Initial cinematic fades
  setTimeout(() => man.style.opacity = '1', 3000);
  setTimeout(() => sign.style.opacity = '1', 4000);
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 6000);
  setTimeout(() => startBtn.style.opacity = '1', 8000);

  startBtn.addEventListener('click', () => {
    // Fade out intro elements
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    stage.style.background = '#000';

    // ---------- WALK ----------
    setTimeout(() => {
      const walkVideo = document.createElement('video');
      walkVideo.src = 'walk.mp4';
      walkVideo.className = 'walk-video';
      walkVideo.autoplay = true;
      walkVideo.playsInline = true;

      stage.appendChild(walkVideo);
      requestAnimationFrame(() => walkVideo.style.opacity = '1');

      walkVideo.addEventListener('ended', () => {
        walkVideo.style.opacity = '0';

        setTimeout(() => {
          walkVideo.remove();

          // ---------- BLACK VOID (1s) ----------
          setTimeout(() => {
            const gateVideo = document.createElement('video');
            gateVideo.src = 'walkgate.mp4';
            gateVideo.className = 'walk-video';
            gateVideo.autoplay = true;
            gateVideo.playsInline = true;

            stage.appendChild(gateVideo);
            requestAnimationFrame(() => gateVideo.style.opacity = '1');

            gateVideo.addEventListener('ended', () => {
              gateVideo.style.opacity = '0';

              setTimeout(() => {
                gateVideo.remove();

                // ---------- BLACK VOID (1s) ----------
                setTimeout(() => {
                  const lightningVideo = document.createElement('video');
                  lightningVideo.src = 'lightning.mp4';
                  lightningVideo.className = 'walk-video';
                  lightningVideo.autoplay = true;
                  lightningVideo.playsInline = true;

                  stage.appendChild(lightningVideo);
                  requestAnimationFrame(() => lightningVideo.style.opacity = '1');

                }, 1000); // darkness before lightning

              }, 800); // fade out walkgate
            });

          }, 1000); // darkness before walkgate

        }, 800); // fade out walk
      });

    }, 3000); // initial black after click
  });
});