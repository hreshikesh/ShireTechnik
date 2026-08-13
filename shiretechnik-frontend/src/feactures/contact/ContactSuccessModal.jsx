import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactSuccessModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] p-8 text-center shadow-2xl"
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid bg */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[60px]" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition hover:border-white/20 hover:text-white"
            >
              <X size={15} />
            </button>

            {/* Icon */}
            <motion.div
              className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-cyan-400/[0.08]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260 }}
            >
              <Check size={28} className="text-cyan-400" strokeWidth={2.5} />
            </motion.div>

            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-cyan-400" />
              <span className="text-[9px] tracking-[0.3em] text-cyan-400">SUCCESS</span>
              <span className="h-px w-6 bg-cyan-400" />
            </div>

            <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
              Message Sent!
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Thank you for contacting{" "}
              <span className="text-white">Shiretechnik</span>. Our
              engineering team has received your inquiry and will get back to
              you within one business day.
            </p>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
            >
              Continue Browsing
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactSuccessModal;