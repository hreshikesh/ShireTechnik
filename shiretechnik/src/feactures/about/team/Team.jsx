import { useState } from "react";
import { motion } from "framer-motion";
import { teamData } from "../../aboutHome/teamData";

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

const MemberCard = ({ member, index }) => {
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
            className={`h-full w-full object-cover transition-all duration-700 ease-out ${
              isHovered ? "scale-105 brightness-110" : "scale-100 brightness-[0.85]"
            }`}
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/30 to-transparent" />

          {/* Hover tint */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Corner accents */}
          <span
            className={`absolute left-4 top-4 border-l border-t border-cyan-400/60 transition-all duration-500 ${
              isHovered ? "h-7 w-7 opacity-100" : "h-0 w-0 opacity-0"
            }`}
          />
          <span
            className={`absolute bottom-4 right-4 border-b border-r border-cyan-400/60 transition-all duration-500 delay-75 ${
              isHovered ? "h-7 w-7 opacity-100" : "h-0 w-0 opacity-0"
            }`}
          />

          {/* ID badge */}
          <div
            className={`absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-[#0a0f1a]/80 px-3 py-1 backdrop-blur-sm transition-all duration-400 ${
              isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
              {String(member.id).padStart(2, "0")}
            </span>
          </div>

          {/* LinkedIn button */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`absolute bottom-20 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0a0f1a]/80 text-cyan-400 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/20 hover:scale-110 active:scale-90 ${
                isHovered ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-90 opacity-0"
              }`}
              style={{ transitionDelay: isHovered ? "100ms" : "0ms" }}
            >
              <LinkedinIcon size={16} />
            </a>
          )}
        </div>

        {/* Info */}
        <div className="relative px-5 pb-6 pt-4">
          {/* Animated line */}
          <div
            className={`absolute left-0 top-0 h-[1px] bg-gradient-to-r from-cyan-400 to-cyan-400/0 transition-all duration-600 ease-out ${
              isHovered ? "w-full" : "w-0"
            }`}
          />

          <h3 className="text-base font-semibold tracking-[-0.02em] text-white">
            {member.name}
          </h3>

          <p
            className={`mt-1 text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 ${
              isHovered ? "text-cyan-400/70" : "text-slate-500"
            }`}
          >
            {member.designation}
          </p>
        </div>
      </div>

      {/* Glow */}
      <div
        className={`pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-cyan-400 blur-[40px] transition-opacity duration-700 ${
          isHovered ? "opacity-[0.12]" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

const Team = () => {
  const firstRow = teamData.slice(0, 4);
  const secondRow = teamData.slice(4);

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

        {/* FIRST ROW - 4 cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
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
              />
            ))}
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
            { value: "50+", label: "Years Combined Experience" },
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
    </section>
  );
};

export default Team;