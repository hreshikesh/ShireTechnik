import { motion } from "framer-motion";

const TabButton = ({ active, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 text-lg font-medium text-white"
    >
      {title}

      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-cyan-400"
        />
      )}
    </button>
  );
};

export default TabButton;