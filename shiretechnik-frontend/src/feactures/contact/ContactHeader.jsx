import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ContactHeader() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#05080d] pb-0 pt-14 text-white md:pt-24 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600"
        >
          <button
            onClick={() => navigate("/")}
            className="transition hover:text-cyan-400"
          >
            Home
          </button>
          <ChevronRight size={11} />
          <span className="text-cyan-400">Contact</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-cyan-400" />
          <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
            GET IN TOUCH
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Contact <span className="text-cyan-400">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-5"
        >
          Have a question, project inquiry, or need engineering consultation?
          Reach out — our team is ready to help.
        </motion.p>

        {/* Underline divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 origin-left md:mt-14"
        >
          <div className="h-px w-full bg-gradient-to-r from-cyan-400/50 via-cyan-400/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHeader;