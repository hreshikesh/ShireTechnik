import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../../../data/teamData";
import logo from "../../../assets/images/logo/logofull.webp";

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MemberCard = ({ member, index, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0f1a]">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className={`h-full w-full object-cover transition-all duration-700 ease-out scale-100 brightness-[0.95] ${
              isHovered
                ? "md:scale-105 md:brightness-110"
                : "md:scale-100 md:brightness-[0.85]"
            }`}
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/30 to-transparent" />

          {/* Hover tint */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
              isHovered ? "md:opacity-100" : "md:opacity-0"
            }`}
          />

          {/* Logo at left corner (always visible on hover, but we place it always) */}
          <div className="absolute left-4 top-4 z-10">
            <img
              src={logo}
              alt="Shiretechnik"
              className={`h-8 w-auto transition-all duration-500 ${
                isHovered
                  ? "md:opacity-100 md:translate-y-0"
                  : "md:opacity-80 md:translate-y-0" // keep visible but subtle
              }`}
            />
          </div>



          {/* ID badge */}
          <div
            className={`absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-[#0a0f1a]/80 px-3 py-1 backdrop-blur-sm translate-y-0 opacity-100 transition-all duration-400 ${
              isHovered
                ? "md:translate-y-0 md:opacity-100"
                : "md:-translate-y-2 md:opacity-0"
            }`}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
              {String(member.id).padStart(2, "0")}
            </span>
          </div>

          {/* Details button (appears on hover) */}
          <button
            onClick={() => onOpen(member)}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0a0f1a]/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-cyan-400 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/20 hover:scale-105 active:scale-95 ${
              isHovered
                ? "md:translate-y-0 md:opacity-100 md:scale-100"
                : "md:translate-y-4 md:opacity-0 md:scale-90"
            }`}
            style={{ transitionDelay: isHovered ? "100ms" : "0ms" }}
          >
            Details
          </button>
        </div>

        {/* Info */}
        <div className="relative px-5 pb-6 pt-4">
          {/* Animated line */}
          <div
            className={`absolute left-0 top-0 h-[1px] bg-gradient-to-r from-cyan-400 to-cyan-400/0 w-full transition-all duration-600 ease-out ${
              isHovered ? "md:w-full" : "md:w-0"
            }`}
          />

          <h3 className="text-base font-semibold tracking-[-0.02em] text-white">
            {member.name}
          </h3>

          <p
            className={`mt-1 text-[11px] uppercase tracking-[0.18em] text-cyan-400/70 transition-colors duration-500 ${
              isHovered ? "md:text-cyan-400/70" : "md:text-slate-500"
            }`}
          >
            {member.designation}
          </p>
        </div>
      </div>

      {/* Glow */}
      <div
        className={`pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-cyan-400 blur-[40px] transition-opacity duration-700 ${
          isHovered ? "md:opacity-[0.12]" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);

  const firstRow = teamData.slice(0, 4);
  const secondRow = teamData.slice(4);
  const totalSlides = teamData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#05080d] py-10 text-white md:py-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-400/[0.04] blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/[0.03] blur-[180px] [animation-delay:3s]" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
            <span className="h-px w-10 bg-cyan-400" />
            OUR TEAM
            <span className="h-px w-10 bg-cyan-400" />
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] md:text-6xl">
            The people behind
            <br />
            <span className="text-slate-500">the engineering.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-slate-500">
            Engineers, analysts and specialists working together to solve
            complex design and simulation challenges.
          </p>

          <div className="mx-auto mt-10 h-[1px] w-[120px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex touch-pan-y"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) nextSlide();
                if (info.offset.x > 60) prevSlide();
              }}
            >
              {teamData.map((member, index) => (
                <div key={member.id} className="w-full shrink-0">
                  <MemberCard member={member} index={index} onOpen={setSelectedMember} />
                </div>
              ))}
            </motion.div>

            Arrows
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous member"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0f1a]/80 text-white backdrop-blur-sm"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next member"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0f1a]/80 text-white backdrop-blur-sm"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {teamData.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to member ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "w-6 bg-cyan-400" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:block">
          {/* FIRST ROW - 4 cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} onOpen={setSelectedMember} />
            ))}
          </div>

          {/* SECOND ROW - 3 cards centered */}
          <div className="mt-6 flex justify-center">
            <div className="grid w-full max-w-[1050px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {secondRow.map((member, index) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  index={index + firstRow.length}
                  onOpen={setSelectedMember}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/[0.06] bg-[#0a0f1a]/50 px-10 py-8 backdrop-blur-sm md:gap-16"
        >
          {[
            { value: "07", label: "Team Members" },
            { value: "20+", label: "Years Combined Experience" },
            { value: "100+", label: "Projects Delivered" },
            { value: "∞", label: "Passion for Engineering" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block font-mono text-2xl font-bold text-cyan-400 md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0a0f1a] p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Logo */}
              <div className="mb-4 flex justify-center">
                <img src={logo} alt="Shiretechnik" className="h-10 w-auto" />
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative h-32 w-32 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.15em] text-cyan-400">
                    {selectedMember.designation}
                  </p>
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <LinkedinIcon size={16} />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 max-h-[40vh] overflow-y-auto pr-2">
                <p className="text-sm leading-7 text-slate-400">
                  {selectedMember.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;