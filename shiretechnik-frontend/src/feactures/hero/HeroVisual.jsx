import AnimatedRing from "./components/AnimatedRing";
import CenterPanel from "./components/CenterPanel";
import FloatingCard from "./components/FloatingCard";
import StatusCard from "./components/StatusCard";
import TechBadge from "./components/TechBadge";
import { motion } from "framer-motion";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative hidden w-full max-w-[600px] aspect-square items-center justify-center mx-auto lg:flex scale-90 xl:scale-100"
    >
      <AnimatedRing />
      <CenterPanel />

      {/* Positioned via percentages to maintain layout scaling */}
      <FloatingCard
        title="Project Success"
        value="97%"
        className="left-[5%] top-[15%]"
      />

      <FloatingCard
        title="Years Exp."
        value="20+"
        className="bottom-[15%] right-[5%]"
      />

      <TechBadge text="CFD_SYS" className="bottom-[25%] left-[10%]" />
      <TechBadge text="FEA_RUN" className="right-[15%] top-[25%]" />
      <TechBadge text="OPT_AI" className="bottom-[10%] right-[30%]" />

      <StatusCard />
    </motion.div>
  );
};

export default HeroVisual;