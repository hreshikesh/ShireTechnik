import { AnimatePresence, motion } from "framer-motion";
import SplitText from "../../component/SplitText";
import SpotlightCard from "../../component/SpotlightCard";
import MagneticButton from "../../component/Magnet";
import { ArrowRight, MessageSquare } from "lucide-react";

import FeatureList from "./FeatureList";
import StatsStrip from "./StatsStrip";

const ContentPanel = ({ data }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={data.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* Image Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <SpotlightCard
            className="rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/10 bg-[#070D18]"
            spotlightColor="rgba(34,211,238,.2)"
          >
            <div className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden">
              <img
                src={data.image}
                alt={data.heading}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/60 via-transparent to-transparent" />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <SplitText
            text={data.heading}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            delay={40}
            duration={0.7}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {data.description}
          </motion.p>

          <FeatureList features={data.features} />

          <StatsStrip stats={data.stats} />

          {/* Action Buttons with Proper Interactive Styling */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <a
                href="#learn-more"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08]"
              >
                <MessageSquare size={16} className="text-cyan-400" />
                <span>Contact Us</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentPanel;