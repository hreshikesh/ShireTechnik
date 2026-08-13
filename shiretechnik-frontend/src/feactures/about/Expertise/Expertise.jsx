import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wind,
  Thermometer,
  Cpu,
  Building2,
  Flame,
  Box,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import logo from "../../../assets/images/logo/logofull.webp";

const expertise = [
  {
    id: "cfd",
    number: "01",
    title: "CFD Analysis",
    icon: Wind,
    link: "/services/cfd",
  },
  {
    id: "pyrosim",
    number: "02",
    title: "PyroSim",
    icon: Flame,
    link: "/services/pyrosim",
  },
  {
    id: "pathfinder",
    number: "03",
    title: "Pathfinder",
    icon: Building2,
    link: "/services/pathfinder",
  },
  {
    id: "ventus",
    number: "04",
    title: "Ventus",
    icon: Wind,
    link: "/services/ventus",
  },
  {
    id: "thermal",
    number: "05",
    title: "Thermal Analysis",
    icon: Thermometer,
    link: "/services/thermal",
  },
  {
    id: "hvac",
    number: "06",
    title: "HVAC Design",
    icon: Cpu,
    link: "/services/hvac",
  },
  {
    id: "mechanical",
    number: "07",
    title: "Mechanical Design",
    icon: Wrench,
    link: "/services/mechanical-design",
  },
  {
    id: "structural",
    number: "08",
    title: "Structural Design",
    icon: Box,
    link: "/services/structural-design",
  },
];

const ServiceCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-8 text-center transition-all duration-500 aspect-square ${
        isHovered
          ? "border-cyan-400/20 bg-[#0a1628]"
          : "border-white/[0.06] bg-[#0a0f1a] hover:border-white/10"
      }`}
    >
      {/* Top line accent */}
      <div
        className={`absolute left-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-400/0 transition-all duration-500 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />

      {/* Number */}
      <span
        className={`absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
          isHovered ? "text-cyan-400" : "text-slate-700"
        }`}
      >
        {item.number}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        size={14}
        className={`absolute right-4 top-4 transition-all duration-300 ${
          isHovered
            ? "translate-x-0 -translate-y-0 text-cyan-400 opacity-100"
            : "-translate-x-1 translate-y-1 text-slate-700 opacity-0"
        }`}
      />

      {/* Default state: Icon + Title */}
      <div
        className={`flex flex-col items-center gap-4 transition-all duration-500 ${
          isHovered
            ? "scale-90 opacity-0 blur-sm"
            : "scale-100 opacity-100 blur-0"
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>

        <h3 className="text-sm font-semibold tracking-[-0.01em] text-slate-300">
          {item.title}
        </h3>
      </div>

      {/* Hover state: Logo + "We offer this" */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 transition-all duration-500 ${
          isHovered
            ? "scale-100 opacity-100 blur-0"
            : "scale-110 opacity-0 blur-sm"
        }`}
      >
        <img
          src={logo}
          alt="Shiretechnik"
          className="h-10 w-auto"
        />

        <div className="h-px w-10 bg-cyan-400/30" />

        <p className="text-[11px] leading-5 text-slate-400">
          We offer
        </p>

        <h3 className="text-base font-semibold text-white">
          {item.title}
        </h3>

        <span className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
          Explore
          <ArrowUpRight size={10} />
        </span>
      </div>

      {/* Corner accents on hover */}
      <span
        className={`absolute left-3 bottom-3 border-l border-b border-cyan-400/40 transition-all duration-500 ${
          isHovered ? "h-5 w-5 opacity-100" : "h-0 w-0 opacity-0"
        }`}
      />
      <span
        className={`absolute right-3 bottom-3 border-r border-b border-cyan-400/40 transition-all duration-500 delay-75 ${
          isHovered ? "h-5 w-5 opacity-100" : "h-0 w-0 opacity-0"
        }`}
      />

      {/* Background glow */}
      <div
        className={`pointer-events-none absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400 blur-[60px] transition-opacity duration-700 ${
          isHovered ? "opacity-[0.08]" : "opacity-0"
        }`}
      />
    </motion.a>
  );
};

const Expertise = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080d] py-32 text-white md:py-44">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-400/[0.05] blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
            <span className="h-px w-10 bg-cyan-400" />
            WHAT WE OFFER
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Services we
              <br />
              <span className="text-slate-500">specialize in.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Simulation-driven engineering services covering fluid
              dynamics, fire safety, thermal and structural domains.
            </p>
          </div>
        </motion.div>

        {/* Services Grid - 4 columns */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Expertise;