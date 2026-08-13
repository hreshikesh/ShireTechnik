import { motion } from "framer-motion";

const FloatingCard = ({ title, value, className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-20 min-w-[140px] border-l-2 border-cyan-400 bg-[#0a192f]/80 p-4 backdrop-blur-xl ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"
      }}
    >
      <h2 className="font-mono text-3xl font-bold text-white tracking-tighter">
        {value}
      </h2>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
        {title}
      </p>
    </motion.div>
  );
};

export default FloatingCard;