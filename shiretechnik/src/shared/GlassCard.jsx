const GlassCard = ({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-2xl transition-all duration-500 ${
        hoverEffect
          ? "hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Optional Ambient Glow Feature */}
      {glow && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;