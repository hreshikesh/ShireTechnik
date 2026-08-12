import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight } from "lucide-react";
import { sendOTP } from "../../../service/authService";
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../assets/images/logo/logofull.webp";

function LoginModal({ open, onClose }) {
  const { email, setEmail, setLoginOpen, setOtpOpen } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleContinue = async () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      const result = await sendOTP(email);

      if (!result.success) {
        setError(result.message);
        return;
      }

      setLoginOpen(false);
      setOtpOpen(true);
    } catch (err) {
      if (err.response) {
        setError("Failed to send OTP. Please try again.");
      } else if (err.request) {
        setError("Unable to reach the server. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] p-8 shadow-2xl"
          initial={{ scale: 0.92, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition hover:border-white/20 hover:text-white"
          >
            <X size={16} />
          </button>

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-25 w-30 items-center justify-center rounded-2xl  p-2">
              <img src={Logo} alt="Shiretechnik" className="h-full w-full object-contain" />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-cyan-400" />
              <span className="text-[9px] tracking-[0.3em] text-cyan-400">SHIRETECHNIK </span>
              <span className="h-px w-6 bg-cyan-400" />
            </div>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-cyan-500">Welcome Back</h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Sign in to continue using Shiretechnik.
            </p>
          </div>

          {/* Input */}
          <div
            className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all duration-300 focus-within:border-cyan-400/40 ${
              error ? "border-red-500/40" : "border-white/[0.08]"
            }`}
          >
            <Mail size={16} className="shrink-0 text-slate-600" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleContinue()}
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
            />
          </div>

          {error && (
            <p className="mt-2 text-[11px] text-red-400">{error}</p>
          )}

          {/* Button */}
          <button
            onClick={handleContinue}
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05080d]/30 border-t-[#05080d]" />
                Sending OTP...
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="mt-4 text-center text-[11px] text-slate-600">
            We'll send a One-Time Password to your email.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoginModal;