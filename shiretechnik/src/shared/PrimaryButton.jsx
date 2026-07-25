const PrimaryButton = ({
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {/* Dynamic Light Sweep Highlight */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;