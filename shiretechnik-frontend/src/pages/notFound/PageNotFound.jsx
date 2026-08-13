import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, ArrowUpRight } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05080d] px-5 py-20 text-white sm:px-6 md:px-10">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-cyan-400" />
          <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
            ERROR — PAGE NOT FOUND
          </span>
          <span className="h-px w-10 bg-cyan-400" />
        </motion.div>

        {/* 404 code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1
            className="relative bg-gradient-to-b from-white via-slate-300 to-slate-600 bg-clip-text font-mono text-[110px] font-bold leading-none tracking-tighter text-transparent sm:text-[160px] md:text-[200px] lg:text-[240px]"
            style={{
              textShadow: "0 0 60px rgba(34,211,238,0.15)",
            }}
          >
            404
          </h1>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-2 h-px w-32 origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </motion.div>

        {/* Heading + text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Sorry, the page you are looking for doesn't exist, was moved, or is
            temporarily unavailable. Let's get you back on track.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10"
        >
          <Link
            to="/"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto"
          >
            <Home
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#071019] px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-white sm:w-auto"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 md:mt-16"
        >
          <p className="mb-5 text-[10px] tracking-[0.25em] text-slate-600">
            OR EXPLORE THESE SECTIONS
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Solutions", path: "/solutions" },
              { label: "CAE Software", path: "/solutions/cae-software" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#071019] px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
              >
                {/* Left bar */}
                <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 group-hover:h-[60%]" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-slate-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-cyan-400"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default NotFound;