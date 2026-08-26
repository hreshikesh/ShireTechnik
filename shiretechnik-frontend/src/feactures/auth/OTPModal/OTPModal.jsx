import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Mail } from "lucide-react";
import { verifyOTP } from "../../../service/authService";
import useAuth from "../../../hooks/useAuth";
import OTPInput from "../OTPInput/OTPInput";
import Logo from "../../../assets/images/logo/logofull.webp";

function OTPModal({ open, email, otp, setOtp, loading, onClose, onResend }) {
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resendKey, setResendKey] = useState(0);

  const { login, setOtpOpen, setRegisterOpen, setSuccessOpen } = useAuth();

  useEffect(() => {
    if (!open) return;
    setTimer(30);
    setError("");

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, resendKey]);

  const handleResend = () => {
    setError("");
    setResendKey((prev) => prev + 1);
    onResend();
  };

  const handleVerify = async () => {
    setError("");
    const code = Array.isArray(otp) ? otp.join("") : String(otp);

    if (code.length !== 6) {
      setError("Enter the complete 6-digit code.");
      return;
    }

    if (verifying || loading) return;

    try {
      setVerifying(true);
      const result = await verifyOTP(email, code);

      if (!result?.success) {
        setError(result?.message || "Invalid verification code.");
        return;
      }

      if (!result.newUser) {
        if (result.token) {
          sessionStorage.setItem("token", result.token);
        }
        login(result.userResponse);
        setOtpOpen(false);
        setSuccessOpen(true);
        return;
      }

      setOtpOpen(false);
      setRegisterOpen(true);
    } catch (err) {
      setError(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setVerifying(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] p-8 shadow-2xl"
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
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
              <div className="flex h-25 w-30 items-center justify-center rounded-2xl p-2">
                <img
                  src={Logo}
                  alt="SandebTech"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-6 text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-cyan-400" />
                <span className="text-[9px] tracking-[0.3em] text-cyan-400">
                  VERIFY EMAIL
                </span>
                <span className="h-px w-6 bg-cyan-400" />
              </div>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-cyan-400">
                Check Your Inbox
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                We've sent a 6-digit code to{" "}
                <span className="text-white">{email}</span>
              </p>
            </div>

            {/* Info pills */}
            <div className="mb-6 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#05080d] px-3 py-1.5">
                <Mail size={11} className="text-cyan-400" />
                <span className="text-[10px] text-slate-500">
                  Check your spam folder if not visible
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#05080d] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="text-[10px] text-slate-500">
                  OTP valid for 5 minutes
                </span>
              </div>
            </div>

            {/* OTP input */}
            <OTPInput value={otp} onChange={setOtp} />

            {error && (
              <p className="mt-3 text-center text-[11px] text-red-400">{error}</p>
            )}

            {/* Resend */}
            <div className="mt-5 text-center text-[12px]">
              {timer > 0 ? (
                <span className="text-slate-600">
                  Resend OTP in{" "}
                  <span className="font-mono text-cyan-400">
                    00:{timer.toString().padStart(2, "0")}
                  </span>
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-cyan-400 underline underline-offset-2 transition hover:text-cyan-300"
                >
                  Resend OTP
                </button>
              )}
            </div>

            {/* Verify button */}
            <button
              onClick={handleVerify}
              disabled={loading || verifying}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading || verifying ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05080d]/30 border-t-[#05080d]" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify OTP
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OTPModal;