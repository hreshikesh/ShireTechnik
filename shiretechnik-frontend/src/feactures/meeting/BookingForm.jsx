import { useState, useEffect } from "react";
import { toast } from "sonner";
import { isValidPhoneNumber } from "libphonenumber-js";
import Select from "react-select";
import {
  User,
  Building2,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";

import { bookMeeting } from "../../service/meetingApi";
import PhoneInputField from "../auth/PhoneInputField";
import { useAuth } from "../../context/AuthContext";
import { toLocalDateString } from "../../utils/dateUtils";

const meetingModeOptions = [
  { value: "GOOGLE_MEET", label: "Google Meet" },
  { value: "IN_PERSON", label: "In Person" },
  { value: "PHONE_CALL", label: "Phone Call" },
];

// Dark theme react-select styles
const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#05080d",
    borderColor: state.isFocused
      ? "rgba(34,211,238,0.4)"
      : "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "2px 4px",
    minHeight: "46px",
    fontFamily: "inherit",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": { borderColor: "rgba(34,211,238,0.4)" },
  }),
  valueContainer: (p) => ({ ...p, padding: "0 8px" }),
  singleValue: (p) => ({ ...p, color: "#fff" }),
  placeholder: (p) => ({ ...p, color: "#475569" }),
  input: (p) => ({ ...p, color: "#fff" }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (p, s) => ({
    ...p,
    color: s.isFocused ? "#22d3ee" : "#475569",
    padding: "6px",
    "&:hover": { color: "#22d3ee" },
  }),
  menu: (p) => ({
    ...p,
    background: "#071019",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
    overflow: "hidden",
    marginTop: "6px",
  }),
  menuList: (p) => ({ ...p, padding: 4 }),
  option: (p, s) => ({
    ...p,
    background: s.isSelected
      ? "rgba(34,211,238,0.12)"
      : s.isFocused
      ? "rgba(255,255,255,0.04)"
      : "transparent",
    color: s.isSelected ? "#22d3ee" : "#cbd5e1",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "10px 12px",
  }),
};

function BookingForm({
  selectedDate,
  selectedSlot,
  setSelectedSlot,
  onBookingSuccess,
}) {
  const { user, requireAuth } = useAuth();

  const initialForm = {
    name: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
    meetingMode: "GOOGLE_MEET",
    notes: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const cleanName = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: cleanName }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const rawDigits = formData.phone ? formData.phone.replace(/\D/g, "") : "";
    if (!formData.phone || rawDigits.length <= 2) {
      newErrors.phone = "Phone number is required.";
    } else {
      try {
        if (!isValidPhoneNumber(formData.phone))
          newErrors.phone = "Please enter a valid phone number.";
      } catch {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }
    if (!formData.purpose.trim())
      newErrors.purpose = "Purpose of the meeting is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [hour, minute] = time.split(":");
    let h = Number(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${minute} ${ampm}`;
  };

  const submitBooking = async () => {
    setLoading(true);
    setSubmitError("");
    try {
      await bookMeeting({
        meetingDate: toLocalDateString(selectedDate),
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        purpose: formData.purpose,
        notes: formData.notes,
        meetingMode: formData.meetingMode,
      });
      toast.success("Meeting scheduled successfully!");
      setFormData(initialForm);
      setErrors({});
      if (setSelectedSlot) setSelectedSlot(null);
      if (onBookingSuccess) onBookingSuccess();
    } catch (error) {
      const apiError =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setSubmitError(apiError);
      toast.error(apiError);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!selectedSlot) {
      setSubmitError("Please select a time slot before booking.");
      return;
    }
    if (!validateForm()) return;
    requireAuth(submitBooking);
  };

  useEffect(() => {
    if (!user) return;
    setFormData((prev) => ({
      ...prev,
      name: user.name || "",
      company: user.company || "",
      email: user.email || "",
      phone: user.phone || "",
    }));
  }, [user]);

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Section title */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] font-medium tracking-[0.3em] text-cyan-400">
            STEP 3 — YOUR DETAILS
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
          Complete Your Booking
        </h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          Fill in your information to schedule the meeting.
        </p>
      </div>

      {/* Selected summary */}
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/[0.07] bg-[#05080d] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
            <Calendar size={13} />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] tracking-[0.2em] text-slate-600">DATE</p>
            <p className="mt-0.5 truncate text-xs font-medium text-white sm:text-sm">
              {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
            <Clock size={13} />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] tracking-[0.2em] text-slate-600">TIME</p>
            <p className="mt-0.5 truncate text-xs font-medium text-white sm:text-sm">
              {selectedSlot
                ? `${formatTime(selectedSlot.startTime)} – ${formatTime(
                    selectedSlot.endTime
                  )}`
                : "Select slot"}
            </p>
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Name */}
        <FieldWrapper error={errors.name} label="Full Name *">
          <div
            className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
              errors.name ? "border-red-500/40" : "border-white/[0.08]"
            }`}
          >
            <User size={15} className="shrink-0 text-slate-600" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
            />
          </div>
        </FieldWrapper>

        {/* Company */}
        <FieldWrapper label="Company">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40">
            <Building2 size={15} className="shrink-0 text-slate-600" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
            />
          </div>
        </FieldWrapper>

        {/* Email */}
        <FieldWrapper error={errors.email} label="Email *">
          <div
            className={`flex items-center gap-3 rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
              errors.email ? "border-red-500/40" : "border-white/[0.08]"
            }`}
          >
            <Mail size={15} className="shrink-0 text-slate-600" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
            />
          </div>
        </FieldWrapper>

        {/* Phone */}
        <FieldWrapper error={errors.phone} label="Phone *">
          <div
            className={`overflow-hidden rounded-xl border transition-all focus-within:border-cyan-400/40 ${
              errors.phone ? "border-red-500/40" : "border-white/[0.08]"
            }`}
          >
            <PhoneInputField
              value={formData.phone}
              onChange={(phone) =>
                setFormData((prev) => ({ ...prev, phone }))
              }
              disabled={!!user?.phone}
            />
          </div>
        </FieldWrapper>
      </div>

      {/* Purpose */}
      <FieldWrapper error={errors.purpose} label="Purpose of Meeting *">
        <div
          className={`rounded-xl border bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40 ${
            errors.purpose ? "border-red-500/40" : "border-white/[0.08]"
          }`}
        >
          <textarea
            rows={3}
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Briefly state the goal of the meeting..."
            className="w-full resize-none bg-transparent text-sm text-white placeholder-slate-600 outline-none"
          />
        </div>
      </FieldWrapper>

      {/* Meeting mode */}
      <FieldWrapper label="Meeting Mode">
        <Select
          options={meetingModeOptions}
          value={meetingModeOptions.find(
            (opt) => opt.value === formData.meetingMode
          )}
          onChange={(opt) =>
            setFormData((prev) => ({ ...prev, meetingMode: opt.value }))
          }
          styles={customSelectStyles}
          isSearchable={false}
        />
      </FieldWrapper>

      {/* Notes */}
      <FieldWrapper label="Additional Notes">
        <div className="rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 transition-all focus-within:border-cyan-400/40">
          <textarea
            rows={3}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            maxLength={500}
            placeholder="Any extra context..."
            className="w-full resize-none bg-transparent text-sm text-white placeholder-slate-600 outline-none"
          />
        </div>
        <div className="mt-1 flex justify-end">
          <span className="text-[10px] text-slate-700">
            {formData.notes.length}/500
          </span>
        </div>
      </FieldWrapper>

      {/* Submit error */}
      {submitError && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !selectedSlot}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05080d]/30 border-t-[#05080d]" />
            Booking...
          </>
        ) : (
          <>
            <Check size={16} />
            Book Meeting
            <ArrowRight size={15} />
          </>
        )}
      </button>
    </form>
  );
}

/* Small wrapper for labels + errors */
const FieldWrapper = ({ label, error, children }) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-medium tracking-[0.15em] text-slate-500">
      {label}
    </label>
    {children}
    {error && <p className="mt-1 text-[11px] text-red-400">{error}</p>}
  </div>
);

export default BookingForm;