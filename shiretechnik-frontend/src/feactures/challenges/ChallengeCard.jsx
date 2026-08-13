import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../hero/animations/heroVariants";

const ChallengeCard = ({ id, icon: Icon, title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
      className={`relative overflow-hidden bg-gradient-to-br from-[#071324]/80 to-[#0a192f]/40 p-5 backdrop-blur-xl border transition-all duration-500 sm:p-8 ${
        isActive
          ? "border-cyan-500/30 bg-[#0a192f]/80 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          : "border-white/5"
      }`}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
      }}
    >
      <div
        className={`absolute right-4 top-4 font-mono text-[9px] font-semibold tracking-widest transition-colors duration-500 sm:right-6 sm:top-6 sm:text-[10px] ${
          isActive ? "text-cyan-400/50" : "text-slate-500"
        }`}
      >
        SYS.{id}
      </div>

      <div
        className={`relative flex h-11 w-11 items-center justify-center border transition-colors duration-500 sm:h-14 sm:w-14 ${
          isActive
            ? "border-cyan-400/50 bg-cyan-400/20"
            : "border-cyan-500/20 bg-cyan-500/10"
        }`}
      >
        <Icon className="text-cyan-400" size={22} strokeWidth={1.5} />
        <div
          className={`absolute -bottom-1 -right-1 h-2 w-2 bg-cyan-400 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <h3
        className={`mt-6 text-lg font-bold tracking-wide transition duration-500 sm:mt-8 sm:text-xl ${
          isActive ? "text-cyan-300" : "text-white"
        }`}
      >
        {title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:mt-3 sm:text-sm">
        {description}
      </p>

      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-700 ease-out ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </motion.div>
  );
};

export default ChallengeCard;