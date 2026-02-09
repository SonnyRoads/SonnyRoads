<script>
window.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('.stage');
  const scroll = document.querySelector('.scroll-video');
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const startBtn = document.querySelector('.medieval-button');

  // ---------- INTRO SEQUENCE ----------
  setTimeout(() => man.style.opacity = '1', 3000);
  setTimeout(() => sign.style.opacity = '1', 5000);
  setTimeout(() => {
    scroll.style.opacity = '1';
    scroll.play();
  }, 8000);
  setTimeout(() => startBtn.style.opacity = '1', 10000);

  // ---------- BUTTON CLICK ----------
  startBtn.addEventListener('click', () => {
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // ---------- FIRST VIDEO SEQUENCE ----------
    setTimeout(() => {
      playVideo('hey.mp4', 1.25, () => {

        setTimeout(() => {
          playVideo('mission.mp4', 1.35, () => {

            setTimeout(() => {
              playVideo('gate.mp4', 1.45, () => {

                // ---------- NEW EVENT VIDEO ----------
                setTimeout(() => {
                  playVideo('begins.mp4', 1.45);
                }, 2000); // 2-second black gap before begins.mp4

              });
            }, 2000); // black gap before gate.mp4

          });
        }, 2000); // black gap before mission.mp4

      });
    }, 2000); // black gap before hey.mp4
  });

  // ---------- VIDEO PLAYER HELPER ----------
  function playVideo(src, scale, onEnd) {
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.playsInline = true;
    video.muted = false; // enable sound

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
</script>