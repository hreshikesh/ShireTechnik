import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  User,
  Mail,
  Loader2,
  Check,
} from "lucide-react";
import PhoneInputField from "../auth/PhoneInputField";
import {submitDownloadInfo} from "../../service/downloadService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INITIAL_FORM = { name: "", email: "", phone: "" };
const INITIAL_ERRORS = { name: "", email: "", phone: "" };

export default function DownloadFormModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  user = null,
}) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const nameInputRef = useRef(null);
  const resolvedTitle = title?.trim() || "Document";

  useEffect(() => {
    if (isOpen) {
      setForm({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
      });
      setErrors(INITIAL_ERRORS);
      setIsSuccess(false);
      setServerError("");
      setIsSubmitting(false);
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isOpen, user]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const validators = {
    name: (v) => {
      if (!v.trim()) return "Full name is required.";
      if (/\d/.test(v)) return "Name must not contain numbers.";
      if (/[^a-zA-Z\s.'-]/.test(v)) return "Name must not contain special characters.";
      return v.trim().length < 2 ? "Name too short." : "";
    },
    email: (v) => {
      if (!v.trim()) return "Email address is required.";
      return !EMAIL_REGEX.test(v.trim()) ? "Please enter a valid email." : "";
    },
    phone: (v) => {
      if (!v || v.replace(/\D/g, "").length <= 3) return "";
      const digits = v.replace(/\D/g, "");
      return digits.length < 7 || digits.length > 15 ? "Invalid phone number." : "";
    },
  };

  const validateAll = () => {
    const newErrors = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      phone: validators.phone(form.phone),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${resolvedTitle}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      await submitDownloadInfo({
        name: form.name.trim(),
        email: form.email.trim(),
        phone:
          form.phone.replace(/\D/g, "").length > 3 ? form.phone : null,
        documentTitle: resolvedTitle,
        documentUrl: pdfUrl,
      });
      setIsSuccess(true);
      triggerDownload();
    } catch (err) {
      setServerError(
        err?.response?.data?.message || "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && pdfUrl && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
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

            {isSuccess ? (
              /* ─── Success state ─── */
              <div className="relative flex flex-col items-center justify-center px-8 py-12 text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition hover:text-white"
                >
                  <X size={15} />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[60px]" />

                <motion.div
                  className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-cyan-400/[0.08]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 260 }}
                >
                  <Check size={28} className="text-cyan-400" strokeWidth={2.5} />
                </motion.div>

                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-cyan-400" />
                  <span className="text-[9px] tracking-[0.3em] text-cyan-400">
                    DOWNLOAD STARTED
                  </span>
                  <span className="h-px w-6 bg-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  Download Starting…
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Thank you,{" "}
                  <span className="text-white">{form.name}</span>! Your
                  document is downloading now.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 w-full rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  Done
                </button>
              </div>
            ) : (
              /* ─── Form state ─── */
              <>
                {/* Header */}
                <div className="relative flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Download size={17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base font-semibold text-white">
                      Download Document
                    </h2>
                    <p className="mt-0.5 truncate text-xs text-slate-500">
                      {resolvedTitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition hover:border-white/20 hover:text-white"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-4 p-5">
                  {serverError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400"
                    >
                      {serverError}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="dlf-name"
                      className="mb-1.5 block text-[10px] font-medium tracking-[0.15em] text-slate-500"
                    >
                      FULL NAME *
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
                        errors.name
                          ? "border-red-500/40"
                          : "border-white/[0.08]"
                      } ${user?.name ? "opacity-70" : ""}`}
                    >
                      <User size={15} className="shrink-0 text-slate-600" />
                      <input
                        ref={nameInputRef}
                        id="dlf-name"
                        value={form.name}
                        disabled={!!user?.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        onBlur={() =>
                          setErrors((p) => ({
                            ...p,
                            name: validators.name(form.name),
                          }))
                        }
                        placeholder="John Doe"
                        className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none disabled:cursor-not-allowed"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="dlf-email"
                      className="mb-1.5 block text-[10px] font-medium tracking-[0.15em] text-slate-500"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
                        errors.email
                          ? "border-red-500/40"
                          : "border-white/[0.08]"
                      } ${user?.email ? "opacity-70" : ""}`}
                    >
                      <Mail size={15} className="shrink-0 text-slate-600" />
                      <input
                        id="dlf-email"
                        type="email"
                        value={form.email}
                        disabled={!!user?.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        onBlur={() =>
                          setErrors((p) => ({
                            ...p,
                            email: validators.email(form.email),
                          }))
                        }
                        placeholder="you@example.com"
                        className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none disabled:cursor-not-allowed"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-[10px] font-medium tracking-[0.15em] text-slate-500">
                      MOBILE NUMBER
                      <span className="text-slate-700 normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <div
                      className={`overflow-hidden rounded-xl border transition-all focus-within:border-cyan-400/40 ${
                        errors.phone
                          ? "border-red-500/40"
                          : "border-white/[0.08]"
                      }`}
                    >
                      <PhoneInputField
                        value={form.phone}
                        onChange={(phone) =>
                          setForm((p) => ({ ...p, phone }))
                        }
                        disabled={!!user?.phone}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Download size={15} />
                        Download Now
                      </>
                    )}
                  </button>

                  <p className="mt-1 text-center text-[10px] text-slate-600">
                    Your information is only used to log this download.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}