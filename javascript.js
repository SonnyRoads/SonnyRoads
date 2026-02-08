window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

  // ---------- INTRO SEQUENCE ----------
  setTimeout(() => man.style.opacity = '1', 3000);      // pointing.png
  setTimeout(() => sign.style.opacity = '1', 5000);     // sign.mp4
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 8000);                                             // scroll.mp4
  setTimeout(() => startBtn.style.opacity = '1', 10000); // button

  // ---------- BUTTON CLICK ----------
  startBtn.addEventListener('click', () => {
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // ---------- BLACK (2s) ----------
    setTimeout(() => {
      playVideo('walk.mp4', 1.25, () => {

        // ---------- BLACK (2s) ----------
        setTimeout(() => {
          playVideo('walkgate.mp4', 1.35, () => {

            // ---------- BLACK (2s) ----------
            setTimeout(() => {
              playVideo('lightning.mp4', 1.45, () => {

                // ---------- BLACK (2s) ----------
                setTimeout(() => {
                  playVideo('bang.mp4', 1.45);
                }, 2000);

              });
            }, 2000);

          });
        }, 2000);

      });
    }, 2000);
  });

  // ---------- VIDEO PLAYER HELPER ----------
  function playVideo(src, scale, onEnd) {
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.playsInline = true;

    Object.assign(video.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: 'auto',
      opacity: '0',
      transform: `translate(-50%, -50%) scale(${scale})`,
      transition: 'opacity 0.8s ease',
      zIndex: '5'
    });

    stage.appendChild(video);
    requestAnimationFrame(() => video.style.opacity = '1');

    video.addEventListener('ended', () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.remove();
        if (onEnd) onEnd();
      }, 800);
    });
  }
});