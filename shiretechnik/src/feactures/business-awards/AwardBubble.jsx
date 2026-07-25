import { motion } from "framer-motion";
import CountUp from "../../component/CountUp";

const AwardBubble = ({ item, delay, index }) => {
  // Determine floating direction based on index to make them feel organic
  const floatY = index % 2 === 0 ? [-8, 8, -8] : [8, -8, 8];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      animate={{ y: floatY }}
      className="group relative w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-[#091321]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 hover:border-cyan-500/50 transition-colors duration-500 cursor-default"
      style={{
        animation: `float-organic ${4 + index}s ease-in-out infinite`
      }}
    >
      {/* Animated Laser Scanner Effect on Hover */}
      <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-y-full group-hover:opacity-100" />
      
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-cyan-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <CountUp to={item.value} duration={2.5} />
          <span className="text-cyan-400">{item.suffix || "+"}</span>
        </h2>
        
        <div className="mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        <p className="mt-4 text-sm sm:text-base font-medium text-slate-300 uppercase tracking-wide">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
};

export default AwardBubble;