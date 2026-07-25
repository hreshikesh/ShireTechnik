import { motion } from "framer-motion";

const CenterLogo = () => {
  return (
    <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center">
      {/* Outer Rotating Dashed Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 opacity-70"
      />
      
      {/* Inner Counter-Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-cyan-500 border-l-transparent opacity-50"
      />

      {/* Pulsing Energy Core */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-10 rounded-full bg-cyan-500 blur-[30px]"
      />

      {/* Main Logo Container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full bg-[#05070d] border border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-md"
      >
        <h2 className="text-center text-lg font-black tracking-widest text-white">
          SHIRE
          <br />
          <span className="text-cyan-400">TECHNIK</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default CenterLogo;