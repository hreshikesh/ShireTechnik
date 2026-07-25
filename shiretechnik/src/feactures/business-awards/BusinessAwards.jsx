import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "../../component/SplitText";
import { awardData } from "./awardData";
import AwardBubble from "./AwardBubble";
import CenterLogo from "./CenterLogo";
import ConnectionLines from "./ConnectionLines";
import BlueprintBackground from "./BlueprintBackground";

const BusinessAwards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax subtle shift for the entire nexus
  const yShift = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#05070d]"
    >
      <BlueprintBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Global Impact
          </p>
          <SplitText
            text="Achievements & Milestones"
            className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white"
          />
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 mx-auto md:mx-0">
            Pioneering engineering excellence worldwide through continuous innovation, 
            relentless passion, and unshakeable partnerships.
          </p>
        </div>

        {/* The Cyber-Nexus Grid */}
        <motion.div 
          style={{ y: yShift }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Desktop Connection Lines (Hidden on mobile) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <ConnectionLines />
          </div>

          {/* 3x3 Matrix Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 md:gap-8 lg:gap-12 items-center place-items-center">
            
            {/* Top Left */}
            <div className="md:col-start-1 md:row-start-1 w-full">
              <AwardBubble item={awardData[0]} delay={0.2} index={0} />
            </div>

            {/* Top Right */}
            <div className="md:col-start-3 md:row-start-1 w-full">
              <AwardBubble item={awardData[1]} delay={0.4} index={1} />
            </div>

            {/* Center Core */}
            <div className="md:col-start-2 md:row-start-2 relative z-20 my-10 md:my-0">
              <CenterLogo />
            </div>

            {/* Bottom Left */}
            <div className="md:col-start-1 md:row-start-3 w-full">
              <AwardBubble item={awardData[2]} delay={0.6} index={2} />
            </div>

            {/* Bottom Right */}
            <div className="md:col-start-3 md:row-start-3 w-full">
              <AwardBubble item={awardData[3]} delay={0.8} index={3} />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessAwards;