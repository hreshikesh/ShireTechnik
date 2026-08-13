import { useEffect, useRef } from "react";

function OTPInput({ value, onChange }) {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/\D/g, "");

    if (!digit) {
      const updated = [...value];
      updated[index] = "";
      onChange(updated);
      return;
    }

    const updated = [...value];
    updated[index] = digit[0];
    onChange(updated);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && value[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const updated = [...value];
    pasted.split("").forEach((digit, i) => {
      updated[i] = digit;
    });
    onChange(updated);

    const next = Math.min(pasted.length, 5);
    inputRefs.current[next]?.focus();
  };

  return (
    <div className="flex justify-center gap-2.5" onPaste={handlePaste}>
      {value.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`h-12 w-11 rounded-xl border bg-[#05080d] text-center font-mono text-lg font-semibold text-white outline-none transition-all duration-200 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 sm:h-13 sm:w-12 ${
            digit
              ? "border-cyan-400/40 text-cyan-400"
              : "border-white/[0.08] text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default OTPInput;