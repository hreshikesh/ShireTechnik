import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo/logoModel.webp";

const PageLoader = ({ show = true }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05080d]"
        >
          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
          />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-400/[0.06] blur-[140px]" />

          {/* Content */}
          <div className="relative flex flex-col items-center">
            {/* Logo with pulsing glow */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Pulsing glow ring behind logo */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl"
              />

              {/* Logo image */}
              <img
                src={logo}
                alt="Shiretechnik"
                className="relative h-20 w-auto object-contain sm:h-24"
              />
            </motion.div>

            {/* Rotating ring around logo */}
            <div className="relative -mt-[92px] h-[92px] w-[92px] sm:-mt-[104px] sm:h-[104px] sm:w-[104px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400/40"
              />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-px w-6 bg-cyan-400/40" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/80">
                LOADING
              </span>
              <span className="h-px w-6 bg-cyan-400/40" />
            </motion.div>

            {/* Animated dots */}
            <div className="mt-3 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                />
              ))}
            </div>

            {/* Bottom brand watermark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-32 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="font-mono text-[9px] tracking-[0.35em] text-slate-700">
                SHIRETECHNIK / ENGINEERING SIMULATION
              </span>
            </motion.div>
          </div>

          {/* Corner accents */}
          <span className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l border-t border-cyan-400/20" />
          <span className="pointer-events-none absolute right-6 top-6 h-6 w-6 border-r border-t border-cyan-400/20" />
          <span className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-b border-l border-cyan-400/20" />
          <span className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b border-r border-cyan-400/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;