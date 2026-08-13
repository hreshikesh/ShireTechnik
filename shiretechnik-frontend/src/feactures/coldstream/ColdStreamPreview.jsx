import { useState } from "react";
import { motion } from "framer-motion";
import gif from "../../assets/gif/gear.gif";

const ColdStreamPreview = () => {
  const [isActive, setIsActive] = useState(false);
  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex h-full w-full items-center justify-center lg:justify-end"
    >
      {/* Ambient Blue Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/20 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: "1000px" }}
        className="relative w-full max-w-[600px]"
      >
        {/* Holographic Terminal Frame */}
        <div
          onMouseEnter={activate}
          onMouseLeave={deactivate}
          onTouchStart={activate}
          onTouchEnd={deactivate}
          onTouchCancel={deactivate}
          className="relative overflow-hidden border border-cyan-500/30 bg-[#071324]/80 p-2 backdrop-blur-2xl sm:p-4"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
          }}
        >
          {/* Top Terminal Bar */}
          <div className="mb-2 flex items-center justify-between px-2 sm:mb-4">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-slate-600" />
              <div className="h-2 w-2 rounded-full bg-cyan-500/50" />
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-widest text-cyan-500 sm:text-[10px]">
              SIMULATION_ENV // LIVE
            </span>
          </div>

          {/*
            Media Container — fixed aspect ratio instead of relying on the
            image's natural size. This is what was making the GIF render
            tiny: with no height set, "object-cover" had nothing to fill.
          */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black sm:aspect-[16/11]">
            <img
              src={gif}
              alt="ColdStream Simulation Rendering"
              className={`absolute inset-0 h-full w-full object-cover mix-blend-screen transition-all duration-700 ${
                isActive ? "scale-105 opacity-100" : "opacity-80"
              }`}
            />

            {/* Scanline Overlay Effect */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />

            {/* Animated Laser Scanner */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-0 h-[2px] w-full bg-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />
          </div>
        </div>

        {/* Floating Targeting Nodes */}
        <div className="absolute -left-4 top-1/4 hidden h-[1px] w-8 bg-cyan-500/50 sm:block" />
        <div className="absolute -right-4 bottom-1/4 hidden h-[1px] w-8 bg-cyan-500/50 sm:block" />
      </motion.div>
    </motion.div>
  );
};

export default ColdStreamPreview;