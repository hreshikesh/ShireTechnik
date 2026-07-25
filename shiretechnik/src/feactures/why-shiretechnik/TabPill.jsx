import { motion } from "framer-motion";

const TabPill = ({ active, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 w-full sm:w-auto text-center ${
        active ? "text-white" : "text-slate-400 hover:text-white"
      }`}
    >
      {active && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      )}
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default TabPill;