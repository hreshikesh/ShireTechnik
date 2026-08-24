import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Award} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CountUp from "../../component/CountUp";
import { awardData } from "./awardData";

const BusinessAwards = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#05080d] py-20 md:py-28 lg:py-36"
    >
      {/* ── Background layers ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[160px]"
      />

      <motion.div
        animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5">
            
            <span className="text-[10px] font-medium tracking-[0.25em] text-cyan-400">
              OUR MILESTONES
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl text-cyan-300">
            Impact measured in
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              years, projects, trust.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A decade of engineering excellence. Numbers that reflect our
            commitment to precision, innovation and long-lasting partnerships.
          </p>
        </motion.div>

        {/* ── STATS GRID ── */}
        <motion.div
          style={{ y: parallaxY }}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {awardData.map((item, index) => (
              <StatCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* ── FEATURED ACHIEVEMENT BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-r from-[#071019] via-[#0a1420] to-[#071019] p-6 sm:rounded-3xl sm:p-8 md:mt-8"
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4 lg:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 sm:h-12 sm:w-12">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] text-cyan-400">
                  RECOGNITION
                </p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] sm:text-xl md:text-2xl text-cyan-500">
                  Trusted engineering partner for global industry leaders.
                </h3>
                <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  Selected by top-tier organizations for mission-critical
                  simulation, analysis and design engineering projects.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/about")}
              className="group flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
            >
             About Us
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>

        {/* ── TRUST STRIP ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8 text-[11px] tracking-[0.15em] text-slate-600 md:mt-12 md:pt-10"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ISO CERTIFIED
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            INDUSTRY RECOGNIZED
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            GLOBAL PARTNERSHIPS
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   STAT CARD — premium bento-style
   ═══════════════════════════════════════════ */
const StatCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#0a1420] to-[#071019] p-6 transition-all duration-500 hover:border-cyan-400/20 sm:p-7 md:p-8"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.08] opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100" />

      {/* Corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full">
          <path
            d="M 20 0 L 64 0 L 64 44"
            fill="none"
            stroke="rgba(34,211,238,0.2)"
            strokeWidth="1"
            className="transition-all duration-500 group-hover:stroke-cyan-400/60"
          />
        </svg>
      </div>

      {/* Metric tag */}
      <div className="relative z-10 mb-6 flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600 transition-colors duration-500 group-hover:text-cyan-400/70">
          {item.metric}
        </span>
        <span className="font-mono text-[10px] text-slate-700">
          0{index + 1}
        </span>
      </div>

      {/* Number */}
      <div className="relative z-10 flex items-baseline gap-0.5">
        <h3 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text font-mono text-5xl font-bold leading-none tracking-tighter text-transparent sm:text-6xl md:text-6xl lg:text-7xl">
          <CountUp to={item.value} duration={2.5} />
        </h3>
        <span className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-4xl lg:text-5xl">
          {item.suffix}
        </span>
      </div>

      {/* Animated line */}
      <div className="relative z-10 mt-5">
        <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Title + description */}
      <div className="relative z-10 mt-5 flex-1">
        <h4 className="text-base font-semibold tracking-[-0.01em] text-white sm:text-lg">
          {item.title}
        </h4>
        <p className="mt-2 text-xs leading-6 text-slate-500 transition-colors duration-500 group-hover:text-slate-400 sm:text-sm sm:leading-6">
          {item.description}
        </p>
      </div>

    </motion.div>
  );
};

export default BusinessAwards;