window.addEventListener('DOMContentLoaded', () => {
  const man = document.querySelector('.man');
  const sign = document.querySelector('.sign-container');
  const scroll = document.querySelector('.scroll-video');
  const startBtn = document.querySelector('.start');
  const stage = document.querySelector('.stage');

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
    // Fade out intro elements
    man.style.opacity = '0';
    sign.style.opacity = '0';
    scroll.style.opacity = '0';
    startBtn.style.opacity = '0';

    // ---------- SEQUENTIAL VIDEO PLAY WITH CINEMATIC BLACK GAPS ----------
    setTimeout(() => {
      playVideo('walk.mp4', 1.25, () => {

        setTimeout(() => {
          playVideo('walkgate.mp4', 1.35, () => {

            setTimeout(() => {
              playVideo('lightning.mp4', 1.45, () => {

                setTimeout(() => {
                  playVideo('bang.mp4', 1.45, () => {

                    // ---------- 2s Black Gap → reborn.mp4 ----------
                    blackGap(2, () => {
                      playVideo('reborn.mp4', 1.45, () => {

                        // ---------- 2s Black Gap → future.mp4 ----------
                        blackGap(2, () => {
                          playVideo('future.mp4', 1.45, () => {
                            console.log('future.mp4 finished');
                          }, true); // fail-safe for sound
                        });

                      });
                    });

                  });
                }, 2000);

              });
            }, 2000);

          });
        }, 2000);

      });
    }, 2000);
  });

  // ---------- VIDEO PLAYER HELPER ----------
  /**
   * Plays a video with fade-in/out
   * @param {string} src - video file path
   * @param {number} scale - scale factor for transform
   * @param {function} onEnd - callback after video ends
   * @param {boolean} allowSoundFailSafe - if true, mutes video if autoplay with sound blocked
   */
  function playVideo(src, scale, onEnd, allowSoundFailSafe = false) {
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.playsInline = true;
    video.muted = false; // enable sound by default
    video.loop = false;  // play once

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

    // Fade in
    requestAnimationFrame(() => video.style.opacity = '1');

    // Fail-safe for sound
    if (allowSoundFailSafe) {
      video.play().catch(() => {
        console.log(`Autoplay blocked for ${src}, muting video...`);
        video.muted = true;
        video.play();
      });
    }

    // Fade out and cleanup on end
    video.addEventListener('ended', () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.remove();
        if (onEnd) onEnd();
      }, 800);
    });
  }

  // ---------- CINEMATIC BLACK GAP HELPER ----------
  /**
   * Shows a black overlay for a given duration, then calls onEnd
   * @param {number} durationSec - duration in seconds
   * @param {function} onEnd - callback after gap ends
   */
  function blackGap(durationSec = 2, onEnd) {
    const black = document.createElement('div');
    Object.assign(black.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: '0',
      transition: `opacity 0.2s ease`,
      zIndex: '10'
    });
    stage.appendChild(black);

    // Fade in
    requestAnimationFrame(() => black.style.opacity = '1');

    // Wait full duration, then fade out
    setTimeout(() => {
      black.style.opacity = '0';
      setTimeout(() => {
        black.remove();
        if (onEnd) onEnd();
      }, 200); // match fade out duration
    }, durationSec * 1000);
  }

});