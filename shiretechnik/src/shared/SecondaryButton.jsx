const SecondaryButton = ({
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;