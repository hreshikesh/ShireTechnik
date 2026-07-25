import { useState } from "react";
import { motion } from "framer-motion";

const FeatureChip = ({ sysId, title, description, icon: Icon }) => {
  // Manual active state so the hover treatment works on tap/touch too,
  // not just mouse hover (group-hover alone is unreliable on mobile).
  const [isActive, setIsActive] = useState(false);

  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
      onHoverStart={activate}
      onHoverEnd={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // Always column layout — this chip lives inside a 2-column grid
      // in a narrow sidebar, so a viewport-based sm:flex-row breakpoint
      // would squish it on desktop even though the rendered width is small.
      className="relative flex h-full w-full cursor-pointer flex-col overflow-hidden border border-cyan-500/10 bg-[#0a192f]/50 p-4 backdrop-blur-md sm:p-5"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
      }}
    >
      {/* Background Hover Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Animated Left Border */}
      <div
        className={`absolute left-0 top-0 h-full w-[2px] transition-colors duration-300 ${
          isActive ? "bg-cyan-400" : "bg-cyan-900"
        }`}
      />

      {/* Icon Module */}
      <div
        className={`mb-3 flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300 sm:mb-4 sm:h-12 sm:w-12 ${
          isActive
            ? "border-cyan-500/20 bg-cyan-400/20"
            : "border-cyan-500/20 bg-cyan-500/10"
        }`}
      >
        <Icon className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`font-mono text-[9px] font-bold tracking-widest transition-colors duration-300 sm:text-[10px] ${
              isActive ? "text-cyan-400" : "text-slate-500"
            }`}
          >
            {sysId}
          </span>
          <h3 className="text-xs font-bold tracking-wide text-white sm:text-base">
            {title}
          </h3>
        </div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-400 sm:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureChip;