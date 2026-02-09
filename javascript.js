// Select all video sections in order
const videoSections = document.querySelectorAll(".video-section");

// Function to add a black gap dynamically
function insertBlackGap(afterElement, durationSec = 2) {
  const gap = document.createElement("div");
  gap.className = "black-gap";
  gap.style.height = `${durationSec * 100}vh`; // adjust for scroll-based timing
  afterElement.parentNode.insertBefore(gap, afterElement.nextSibling);
  return gap;
}

// IntersectionObserver for fade-in
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

// Observe existing videos
videoSections.forEach((section) => observer.observe(section));

// --- Add future.mp4 dynamically after reborn.mp4 --- //
const rebornSection = document.querySelector("#reborn");

// Insert 2-second black gap
insertBlackGap(rebornSection, 2);

// Create future video section
const futureSection = document.createElement("section");
futureSection.id = "future";
futureSection.className = "video-section fade-in";

// Add video element inside
const futureVideo = document.createElement("video");
futureVideo.autoplay = true;
futureVideo.muted = true;
futureVideo.loop = true;
futureVideo.playsInline = true;

const source = document.createElement("source");
source.src = "future.mp4";
source.type = "video/mp4";

// Append source → video → section
futureVideo.appendChild(source);
futureSection.appendChild(futureVideo);

// Append after black gap
rebornSection.nextSibling.after(futureSection);

// Observe the new section
observer.observe(futureSection);

// Make sure future video starts playing
futureVideo.play().catch((err) => {
  console.log("Autoplay prevented:", err);
});