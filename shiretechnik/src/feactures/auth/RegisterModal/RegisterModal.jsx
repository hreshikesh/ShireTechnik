import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, ArrowRight, Mail } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { register } from "../../../service/authService";
import useAuth from "../../../hooks/useAuth";
import PhoneInputField from "../PhoneInputField";
import Logo from "../../../assets/images/logo/logofull.webp";

const NAME_MAX_LENGTH = 20;
const COMPANY_MAX_LENGTH = 40;

function RegisterModal({ open, loading }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState({});
  const { login, setRegisterOpen, setSuccessOpen } = useAuth();

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setForm((prev) => ({
        ...prev,
        name: value.replace(/[^a-zA-Z\s]/g, "").slice(0, NAME_MAX_LENGTH),
      }));
      return;
    }

    if (name === "company") {
      setForm((prev) => ({
        ...prev,
        company: value.replace(/[^a-zA-Z0-9\s&.,-]/g, "").slice(0, COMPANY_MAX_LENGTH),
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name is too short.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    const rawDigits = form.phone ? form.phone.replace(/\D/g, "") : "";
    if (!form.phone || rawDigits.length <= 2) {
      newErrors.phone = "Phone number is required.";
    } else {
      try {
        if (!isValidPhoneNumber(form.phone)) newErrors.phone = "Enter a valid phone number.";
      } catch {
        newErrors.phone = "Enter a valid phone number.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function extractUser(result) {
    if (!result || typeof result !== "object") return null;
    if (result.userResponse && typeof result.userResponse === "object") return result.userResponse;
    if (result.user && typeof result.user === "object") return result.user;
    if (result.data && typeof result.data === "object") return result.data;
    if (result.name || result.email) return result;
    return null;
  }

  const handleRegister = async () => {
    if (!validateForm()) return;

    const result = await register(form);

    if (!result?.success) {
      setErrors((prev) => ({
        ...prev,
        form: result.message || "Registration failed. Please try again.",
      }));
      return;
    }

    const userData = extractUser(result);

    if (!userData) {
      setErrors((prev) => ({
        ...prev,
        form: "Registered, but couldn't load your profile. Please try logging in.",
      }));
      return;
    }

    if (result.token) localStorage.setItem("token", result.token);
    login(userData);
    setRegisterOpen(false);
    setSuccessOpen(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] p-8 shadow-2xl"
          initial={{ scale: 0.92, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
              <span className="text-[9px] tracking-[0.3em] text-cyan-400">NEW ACCOUNT</span>
              <span className="h-px w-6 bg-cyan-400" />
            </div>
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Complete Your Profile</h2>
            <p className="mt-1.5 text-sm text-slate-500">Just one last step before you continue.</p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-3">
            {/* Name */}
            <div>
              <div
                className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${errors.name ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
              >
                <User size={16} className="shrink-0 text-slate-600" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={NAME_MAX_LENGTH}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                />
                <span className="text-[10px] text-slate-700">
                  {form.name.length}/{NAME_MAX_LENGTH}
                </span>
              </div>
              {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <div
                className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${errors.email ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
              >
                <Mail size={16} className="shrink-0 text-slate-600" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                />
              </div>
              {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <div className={errors.phone ? "rounded-xl border border-red-500/40" : ""}>
                <PhoneInputField
                  value={form.phone}
                  onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
                />
              </div>
              {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
            </div>

            {/* Company */}
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40">
              <Building2 size={16} className="shrink-0 text-slate-600" />
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={form.company}
                onChange={handleChange}
                maxLength={COMPANY_MAX_LENGTH}
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
              />
            </div>
          </div>

          {errors.form && (
            <p className="mt-3 text-center text-[11px] text-red-400">{errors.form}</p>
          )}

          {/* Submit */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05080d]/30 border-t-[#05080d]" />
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default RegisterModal;