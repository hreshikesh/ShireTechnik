import { useEffect } from "react";
import { animate, stagger } from "animejs";

const useTextReveal = (selector) => {
  useEffect(() => {
    animate(selector, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(120),
      duration: 900,
      easing: "easeOutExpo",
    });
  }, [selector]);
};

export default useTextReveal;