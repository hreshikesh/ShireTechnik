import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import logo from "../../../assets/images/logo/logofull.webp";



const AboutHero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05080d] text-white">

      {/* Engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      {/* Main glow */}
      <div className="pointer-events-none absolute -right-48 top-1/2 h-[700px] w-[700px] -translate-y-1/2 animate-pulse rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-[92%] max-w-[1400px] grid-cols-1 items-center gap-16 py-32 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ================= LEFT ================= */}
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-4 text-[11px] font-medium tracking-[0.3em] text-cyan-400"
          >
            <span className="h-px w-12 bg-cyan-400" />
            ABOUT SHIRETECHNIK
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(3.2rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.055em]"
          >
            Engineering{" "}
            <span className="text-cyan-400">intelligence</span>
            <br />
            behind complex systems.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 max-w-[600px] text-base leading-8 text-slate-400 md:text-lg"
          >
            Advanced engineering and simulation consultancy specializing in
            thermal, fluid and CAE-driven design solutions.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {["CFD", "THERMAL", "CAE", "OPTIMIZATION"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] tracking-[0.2em] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT — LOGO VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/[0.06]" />
          <div className="absolute inset-[8%] rounded-full border border-cyan-400/[0.08]" />
          <div className="absolute inset-[16%] rounded-full border border-dashed border-cyan-400/[0.1]" />

          {/* Atmospheric glow behind logo */}
          <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[80px]" />

          {/* Logo container */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(34,211,238,0.05), inset 0 0 30px rgba(34,211,238,0.02)",
                "0 0 60px rgba(34,211,238,0.12), inset 0 0 40px rgba(34,211,238,0.05)",
                "0 0 30px rgba(34,211,238,0.05), inset 0 0 30px rgba(34,211,238,0.02)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071019]/90 backdrop-blur-xl md:h-52 md:w-52"
          >
            <img
              src={logo}
              alt="Shiretechnik"
              className="h-24 w-auto object-contain md:h-28"
            />
          </motion.div>

          {/* Floating service tags around the logo */}

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute right-[2%] top-[12%] rounded-xl border border-white/[0.08] bg-[#071019]/80 px-4 py-2.5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-medium tracking-[0.15em] text-cyan-400">
              CFD
            </span>
            <p className="mt-0.5 text-[8px] tracking-wider text-slate-600">
              Flow & Pressure
            </p>
          </motion.div>

          {/* Top left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="absolute left-[2%] top-[18%] rounded-xl border border-white/[0.08] bg-[#071019]/80 px-4 py-2.5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-medium tracking-[0.15em] text-cyan-400">
              THERMAL
            </span>
            <p className="mt-0.5 text-[8px] tracking-wider text-slate-600">
              Heat Transfer
            </p>
          </motion.div>

          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute bottom-[18%] left-[0%] rounded-xl border border-white/[0.08] bg-[#071019]/80 px-4 py-2.5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-medium tracking-[0.15em] text-cyan-400">
              FIRE SAFETY
            </span>
            <p className="mt-0.5 text-[8px] tracking-wider text-slate-600">
              PyroSim & Pathfinder
            </p>
          </motion.div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="absolute bottom-[12%] right-[0%] rounded-xl border border-white/[0.08] bg-[#071019]/80 px-4 py-2.5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-medium tracking-[0.15em] text-cyan-400">
              HVAC
            </span>
            <p className="mt-0.5 text-[8px] tracking-wider text-slate-600">
              Airflow Design
            </p>
          </motion.div>

          {/* Connector lines from tags to center */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 520 520"
            fill="none"
          >
            {/* Top right connector */}
            <motion.line
              x1="370" y1="100" x2="290" y2="220"
              stroke="rgba(34,211,238,0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />
            {/* Top left connector */}
            <motion.line
              x1="130" y1="130" x2="220" y2="230"
              stroke="rgba(34,211,238,0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
            {/* Bottom left connector */}
            <motion.line
              x1="110" y1="380" x2="225" y2="300"
              stroke="rgba(34,211,238,0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            />
            {/* Bottom right connector */}
            <motion.line
              x1="400" y1="400" x2="300" y2="300"
              stroke="rgba(34,211,238,0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            />

            {/* Small dots at connection points on center circle */}
            <motion.circle
              cx="290" cy="220" r="2" fill="rgba(34,211,238,0.4)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            />
            <motion.circle
              cx="220" cy="230" r="2" fill="rgba(34,211,238,0.4)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
            />
            <motion.circle
              cx="225" cy="300" r="2" fill="rgba(34,211,238,0.4)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            />
            <motion.circle
              cx="300" cy="300" r="2" fill="rgba(34,211,238,0.4)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            />
          </svg>

          {/* Technical labels */}
          <span className="absolute left-[8%] top-[5%] font-mono text-[8px] tracking-wider text-slate-700">
            SHIRETECHNIK / EST. 2015
          </span>

          <span className="absolute bottom-[5%] right-[5%] font-mono text-[8px] tracking-wider text-slate-700">
            ENGINEERING / SIMULATION
          </span>

          {/* Corner accents */}
          <div className="absolute left-[6%] top-[6%] h-4 w-4 border-l border-t border-cyan-400/20" />
          <div className="absolute bottom-[6%] right-[6%] h-4 w-4 border-b border-r border-cyan-400/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-[4%] z-20 hidden items-center gap-3 text-[9px] tracking-[0.2em] text-slate-600 md:flex"
      >
        <ArrowDownRight size={17} />
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
};

export default AboutHero;