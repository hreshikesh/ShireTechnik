import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

function SuccessModal({ open, userName = "User", onFinish }) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [open, onFinish]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] p-10 text-center shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[60px]" />

            {/* Icon */}
            <motion.div
              className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-cyan-400/[0.08]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
            >
              <Check size={36} className="text-cyan-400" strokeWidth={2.5} />
            </motion.div>

            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-cyan-400" />
              <span className="text-[9px] tracking-[0.3em] text-cyan-400">SUCCESS</span>
              <span className="h-px w-6 bg-cyan-400" />
            </div>

            <h2 className="text-xl font-semibold tracking-[-0.03em]">
              Welcome,{" "}
              <span className="text-cyan-400">{userName}</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">Authentication Successful</p>

            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Redirecting...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;