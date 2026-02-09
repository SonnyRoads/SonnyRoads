// --- Select all video sections --- //
const videoSections = document.querySelectorAll(".video-section");

// --- IntersectionObserver for fade-in --- //
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

// --- Observe all existing video sections --- //
videoSections.forEach((section) => observer.observe(section));

// --- Function to insert black gap dynamically --- //
function insertBlackGap(afterElement, durationSec = 2) {
  const gap = document.createElement("div");
  gap.className = "black-gap";
  gap.style.height = `${durationSec * 100}vh`; // height relative to viewport scroll
  afterElement.parentNode.insertBefore(gap, afterElement.nextSibling);
  return gap;
}

// --- Add future.mp4 after reborn.mp4 --- //
const rebornSection = document.querySelector("#reborn");

// Insert 2-second black gap
const blackGap = insertBlackGap(rebornSection, 2);

// Create future video section
const futureSection = document.createElement("section");
futureSection.id = "future";
futureSection.className = "video-section fade-in";

// Create video element
const futureVideo = document.createElement("video");
futureVideo.autoplay = true;
futureVideo.muted = true;
futureVideo.loop = true;
futureVideo.playsInline = true;

// Add source element
const source = document.createElement("source");
source.src = "future.mp4";
source.type = "video/mp4";

// Append source → video → section
futureVideo.appendChild(source);
futureSection.appendChild(futureVideo);

// Append after black gap
blackGap.after(futureSection);

// Observe the new section for fade-in
observer.observe(futureSection);

// --- Ensure the video actually starts when ready --- //
futureVideo.addEventListener("loadedmetadata", () => {
  futureVideo.play().catch((err) => {
    console.log("Autoplay prevented:", err);
  });
});