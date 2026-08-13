const SectionHeading = ({
  title,
  subtitle,
  description,
  center = false,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 sm:mb-16 md:mb-20 ${
        center ? "mx-auto text-center" : ""
      } max-w-3xl ${className}`}
    >
      {/* Badge Subtitle */}
      {subtitle && (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {subtitle}
        </div>
      )}

      {/* Title with Gradient Text */}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Optional Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;