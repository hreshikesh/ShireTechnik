// A highly polished easing curve (similar to Apple's fluid interface easing)
const premiumEase = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40, // Reduced from 60 for a tighter, more precise movement
    scale: 0.96, // Slight scale-down
    filter: "blur(12px)", // Gives a "monitor powering on" or holographic focus effect
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1, // Slightly longer duration, but the fast ease makes it feel snappy
      ease: premiumEase,
    },
  },
};

export const staggerContainer = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Tighter stagger for a faster, cascading data-load feel
      delayChildren: 0.15,
    },
  },
};

// Optional: Add a specific variant for the HUD visual elements to "glitch" or snap in
export const snapIn = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};