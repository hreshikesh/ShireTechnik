import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Ship,
  Cog,
  Flame,
  Cpu,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import logo from "../../assets/images/logo/logofull.webp";

const careers = [
  {
    icon: Ship,
    title: "Maritime Engineering",
    description:
      "Work on advanced CFD simulations, hydrodynamic optimization, naval architecture, and ship performance analysis for global marine projects.",
    skills: ["CFD", "Hydrodynamics", "Hull Optimization", "Naval Architecture"],
  },
  {
    icon: Cog,
    title: "Turbomachinery",
    description:
      "Design and optimize pumps, compressors, turbines, fans, and rotating machinery using advanced engineering simulation tools.",
    skills: ["Pumps", "Compressors", "Turbines", "Rotating Equipment"],
  },
  {
    icon: Flame,
    title: "HVAC & Fire Safety",
    description:
      "Develop HVAC airflow solutions, smoke management studies, thermal simulations, and fire safety engineering systems.",
    skills: ["HVAC", "Fire Safety", "Thermal Analysis", "Smoke Simulation"],
  },
  {
    icon: Cpu,
    title: "Electronic Cooling",
    description:
      "Engineer advanced thermal management solutions for electronics, batteries, and high-performance systems.",
    skills: [
      "Battery Cooling",
      "Electronics Cooling",
      "Heat Transfer",
      "Thermal Management",
    ],
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">

      {/* ── HERO ── */}
      <section className="relative py-14 md:py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[160px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600"
          >
            <button
              onClick={() => navigate("/")}
              className="transition hover:text-cyan-400"
            >
              Home
            </button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Careers</span>
          </motion.nav>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              JOIN OUR TEAM
            </span>
          </motion.div>

          {/* Heading */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Careers at{" "}
              <span className="text-cyan-400">Shiretechnik</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7"
            >
              Join a multidisciplinary engineering team delivering innovative
              CFD, marine, thermal, and industrial engineering solutions for
              clients across the globe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CAREER DOMAINS ── */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">
              OPEN DOMAINS
            </span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Where you can
              <span className="text-slate-500"> make an impact</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careers.map((career, i) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02]"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold sm:text-lg">
                    {career.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    {career.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {career.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] tracking-[0.08em] text-slate-500 sm:text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-cyan-400 transition-all duration-300 group-hover:gap-3">
                    <span>Apply Below</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── APPLY SECTION ── */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16 xl:gap-20">

            {/* LEFT — logo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:items-start"
            >
              <div className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-8 sm:max-w-xs sm:rounded-3xl lg:max-w-full lg:p-10">
                <img
                  src={logo}
                  alt="Shiretechnik"
                  className="w-full object-contain opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* RIGHT — text + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <span className="text-[10px] tracking-[0.3em] text-cyan-400">
                APPLICATION
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Apply <span className="text-cyan-400">Now</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Interested in joining Shiretechnik? Complete the application
                form below. Our recruitment team will carefully review your
                application and contact shortlisted candidates.
              </p>

              <div className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We are always looking for talented engineers and simulation
                specialists who are passionate about solving complex real-world
                engineering challenges. If you believe you have the skills and
                drive to contribute to our growing team, we would love to hear
                from you.
              </div>

              <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd-MUDv26isMiOezy35qkFSfYsCR6kdeFYo24JvSpNSFonKQw/viewform?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  Open Application Form
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white"
                >
                  Contact Us
                </button>
              </div>

              {/* Disclaimer */}
              <p className="mt-6 text-[11px] leading-5 text-slate-600">
                Only shortlisted candidates will be contacted. We appreciate
                your interest in Shiretechnik.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Careers;