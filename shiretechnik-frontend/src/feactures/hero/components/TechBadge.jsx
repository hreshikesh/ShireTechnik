const TechBadge = ({ text, className = "" }) => {
  return (
    <div
      className={`absolute z-20 flex items-center gap-2 border border-cyan-500/30 bg-black/40 px-3 py-1.5 backdrop-blur-md ${className}`}
    >
      <div className="h-1 w-1 bg-cyan-400" />
      <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
        {text}
      </span>
      <div className="h-1 w-1 bg-cyan-400" />
    </div>
  );
};

export default TechBadge;