import PrimaryButton from "../../shared/PrimaryButton";
import SecondaryButton from "../../shared/SecondaryButton";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/heroVariants";

const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="relative z-10"
    >
      <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
        <span className="h-[1px] w-8 bg-cyan-500" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Engineering Simulation Experts
        </span>
      </motion.div>

      <motion.h1 variants={fadeUp} className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Engineering{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Innovation
        </span>{" "}
        Through Intelligent CAE.
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Advanced engineering simulation, thermal analysis, optimization and digital engineering services that accelerate structural innovation.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
        <PrimaryButton>Explore Services</PrimaryButton>
        <SecondaryButton>Book Appointment</SecondaryButton>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;