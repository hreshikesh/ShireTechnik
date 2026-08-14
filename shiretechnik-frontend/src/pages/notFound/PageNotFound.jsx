import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, ArrowUpRight } from "lucide-react";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05080d] px-5 py-16 text-white sm:px-6 md:px-10">
      <SEO {...seoPages.notFound} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-cyan-400/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-500/[0.04] blur-[140px] [animation-delay:2s]" />

      {/* Corner accents */}
      <span className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-cyan-400/20 sm:left-8 sm:top-8 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-5 top-5 h-6 w-6 border-r border-t border-cyan-400/20 sm:right-8 sm:top-8 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 border-b border-l border-cyan-400/20 sm:bottom-8 sm:left-8 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-cyan-400/20 sm:bottom-8 sm:right-8 sm:h-8 sm:w-8" />

      {/* Top status label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 sm:top-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-[#071019]/80 px-3 py-1.5 backdrop-blur-sm sm:px-4"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-slate-400 sm:text-[10px]">
            ERROR / 404 / PAGE NOT FOUND
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* 404 with side buttons layout */}
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:gap-4">
          {/* LEFT BUTTON — Desktop / Below on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-2 flex w-full justify-center lg:order-1 lg:w-auto lg:flex-1 lg:justify-end"
          >
            <button
              onClick={() => navigate(-1)}
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019]/80 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-[#0a1420] sm:px-6 sm:py-5"
            >
              {/* Icon container */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 sm:h-11 sm:w-11">
                <ArrowLeft
                  size={16}
                  className="text-slate-400 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-cyan-400"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-[0.25em] text-slate-600 sm:text-[10px]">
                  PREVIOUS
                </span>
                <span className="text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                  Go Back
                </span>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
            </button>
          </motion.div>

          {/* CENTER — 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 flex-shrink-0 lg:order-2"
          >
            {/* Ambient glow behind 404 */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-cyan-400/10 blur-[60px] sm:h-48 sm:w-48" />
            </div>

            <h1
              className="relative bg-gradient-to-b from-white via-slate-300 to-slate-700 bg-clip-text font-mono text-[100px] font-bold leading-none tracking-tighter text-transparent sm:text-[150px] md:text-[180px] lg:text-[200px] xl:text-[220px]"
              style={{
                textShadow: "0 0 60px rgba(34,211,238,0.15)",
              }}
            >
              404
            </h1>

            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-2 flex items-center justify-center gap-2 sm:mt-3 sm:gap-3"
            >
              <span className="h-px w-6 bg-cyan-400/40 sm:w-10" />
              <span className="font-mono text-[8px] tracking-[0.3em] text-slate-500 sm:text-[10px]">
                LOST IN SIMULATION
              </span>
              <span className="h-px w-6 bg-cyan-400/40 sm:w-10" />
            </motion.div>
          </motion.div>

          {/* RIGHT BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-3 flex w-full justify-center lg:w-auto lg:flex-1 lg:justify-start"
          >
            <Link
              to="/"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:px-6 sm:py-5"
            >
              {/* Icon container */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/20 sm:h-11 sm:w-11">
                <Home
                  size={16}
                  className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-400/60 sm:text-[10px]">
                  RETURN
                </span>
                <span className="text-sm font-semibold text-white sm:text-base">
                  Back to Home
                </span>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-10 max-w-md text-center text-xs leading-6 text-slate-500 sm:mt-12 sm:max-w-lg sm:text-sm sm:leading-7"
        >
          The page you're looking for doesn't exist, was moved, or is
          temporarily unavailable. Let's get you back on track.
        </motion.p>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 sm:mt-14"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />
            <p className="font-mono text-[9px] tracking-[0.3em] text-slate-600 sm:text-[10px]">
              OR EXPLORE
            </p>
            <span className="h-px w-8 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
            {[
              { label: "Solutions", path: "/solutions", number: "01" },
              { label: "CAE Software", path: "/solutions/cae-software", number: "02" },
              { label: "About Us", path: "/about", number: "03" },
              { label: "Contact", path: "/contact", number: "04" },
            ].map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + idx * 0.08 }}
              >
                <Link
                  to={link.path}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#071019]/60 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03] sm:p-4"
                >
                  {/* Left bar */}
                  <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 group-hover:h-[60%]" />

                  {/* Number */}
                  <span className="mb-1.5 font-mono text-[9px] tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-cyan-400 sm:mb-2 sm:text-[10px]">
                    {link.number}
                  </span>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="flex-shrink-0 text-slate-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400 group-hover:opacity-100 sm:size-[13px]"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-slate-700 sm:text-[9px]">
          SHIRETECHNIK
        </span>
      </motion.div>
    </main>
  );
}

export default NotFound;