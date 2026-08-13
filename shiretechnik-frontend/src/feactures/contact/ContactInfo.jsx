import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useAuth } from "../../context/AuthContext";
import { submitContact } from "../../service/contactApi";
import PhoneInputField from "../auth/PhoneInputField";
import ContactSuccessModal from "./ContactSuccessModal";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 80-49536469"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@shiretechnik.com"],
  },
  {
    icon: MapPin,
    label: "Office",
    lines: [
      "SHIRETECHNIK PVT LTD",
      "166 5th Cross KEB Layout Sanjaynagar",
      "Bangalore (Bengaluru) - 560094, India",
    ],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Monday – Friday", "9:00 AM – 6:00 PM IST"],
  },
];

const subjectOptions = [
  "Shipflow, software/consultancy",
  "CAESES",
  "HVAC CFD Work",
  "Fire and Evacuation",
  "Training",
  "Other",
];

const fixedSubjects = [
  "Shipflow, software/consultancy",
  "CAESES",
  "HVAC CFD Work",
  "Fire and Evacuation",
  "Training",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

function ContactInfo() {
  const { user, requireAuth } = useAuth();
  const location = useLocation();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setForm((prev) => ({ ...prev, name: value.replace(/[0-9]/g, "") }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone || !isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.subject?.trim()) {
      newErrors.subject = "Please select or specify a subject.";
    }

    if (form.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    setSubmitError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        subject: form.subject,
        message: form.message,
      });
      setForm(initialForm);
      setErrors({});
      setShowSuccess(true);
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
          "Failed to submit. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requireAuth(submitForm);
  };

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      ...(user && {
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        company: user.company || prev.company,
      }),
      ...(location.state?.subject && { subject: location.state.subject }),
      ...(location.state?.message && { message: location.state.message }),
    }));
  }, [user, location.state]);

  const isFixedSubject = fixedSubjects.includes(form.subject);
  const selectValue = isFixedSubject ? form.subject : form.subject ? "Other" : "";

  return (
    <section className="relative overflow-hidden bg-[#05080d] py-16 text-white md:py-24 lg:py-32">
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* ── LEFT PANEL ── */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
                CONTACT
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              We'd Love to{" "}
              <span className="text-cyan-400">Hear From You</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Whether you have a project inquiry, require engineering
              consultation, or would like to know more about our solutions,
              our team is ready to assist you.
            </p>

            {/* Info cards */}
            <div className="mt-10 flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.15em] text-slate-600">
                        {item.label.toUpperCase()}
                      </p>
                      {item.lines.map((line, i) => (
                        <p
                          key={i}
                          className={`mt-1 text-sm leading-6 ${
                            i === 0 ? "font-medium text-white" : "text-slate-400"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT PANEL — FORM ── */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="mb-7">
              <p className="text-[10px] tracking-[0.3em] text-cyan-400">INQUIRY FORM</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Send an Inquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Name */}
              <div>
                <div
                  className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
                    errors.name ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
                >
                  <User size={16} className="shrink-0 text-slate-600" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <div
                  className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
                    errors.email ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
                >
                  <Mail size={16} className="shrink-0 text-slate-600" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div
                  className={`overflow-hidden rounded-xl border transition-all focus-within:border-cyan-400/40 ${
                    errors.phone ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
                >
                  <PhoneInputField
                    value={form.phone}
                    onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
                    disabled={!!user}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Company */}
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40">
                <Building2 size={16} className="shrink-0 text-slate-600" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={form.company}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                />
              </div>

              {/* Subject select */}
              <div>
                <p className="mb-2 text-[10px] tracking-[0.15em] text-slate-600">
                  SUBJECT *
                </p>
                <div
                  className={`relative flex items-center rounded-xl border bg-[#05080d] transition-all focus-within:border-cyan-400/40 ${
                    errors.subject ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
                >
                  <select
                    id="subject"
                    name="subject"
                    value={selectValue}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== "Other") {
                        handleChange(e);
                      } else {
                        handleChange({ target: { name: "subject", value: "" } });
                      }
                    }}
                    className="w-full appearance-none bg-transparent px-4 py-3 pr-10 text-sm text-white outline-none [&>option]:bg-[#071019] [&>option]:text-white"
                  >
                    <option value="" disabled className="text-slate-600">
                      Select a subject...
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-4 text-slate-600"
                  />
                </div>

                {/* Custom subject input if "Other" */}
                {!isFixedSubject && (
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40">
                    <MessageSquare size={16} className="shrink-0 text-slate-600" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Please specify your subject..."
                      value={form.subject}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                    />
                  </div>
                )}

                {errors.subject && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <div
                  className={`rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
                    errors.message ? "border-red-500/40" : "border-white/[0.08]"
                  }`}
                >
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={500}
                    className="w-full resize-none bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                </div>
                <div className="mt-1 flex items-center justify-between">
                  {errors.message ? (
                    <p className="text-[11px] text-red-400">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-[10px] text-slate-700">
                    {form.message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit error */}
              {submitError && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400">
                  {submitError}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05080d]/30 border-t-[#05080d]" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ContactSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </section>
  );
}

export default ContactInfo;