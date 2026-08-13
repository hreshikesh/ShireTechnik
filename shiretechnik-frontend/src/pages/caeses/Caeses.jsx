import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Anchor,
  Ship,
  Droplets,
  Wind,
  Zap,
  BarChart3,
  Layers3,
  Cpu,
  Target,
  Box,
  Gauge,
  ExternalLink,
  Workflow,
} from "lucide-react";

import caesesHero from "../../assets/images/logo/caeseslogo.webp";
import caesesParam from "../../assets/images/caeses/Propeller_Variation_CAESES_GUI.webm";
import caesesOptim from "../../assets/images/caeses/caeses-optm.webp";
import caesesCfd from "../../assets/images/caeses/cases-cfd.webp";
import hull from "../../assets/images/caeses/hull.webp";
import turbo from "../../assets/images/caeses/turbo.webp";
import duct from "../../assets/images/caeses/duct.webp";
import aero from "../../assets/images/caeses/aero.webp";
import propeller from  "../../assets/images/caeses/propeller.webp";
import valves from  "../../assets/images/caeses/valves.webp";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tabs = [
  { id: "overview",      label: "Overview"      },
  { id: "features",      label: "Key Features"  },
  { id: "applications",  label: "Applications"  },
  { id: "industries",    label: "Industries"    },
  { id: "workflow",      label: "Workflow"      },
  { id: "benefits",      label: "Benefits"      },
];

const keyFeatures = [
  {
    icon: Box,
    title: "Parametric 3D Modeling",
    description:
      "CAESES provides a powerful parametric modeling engine that allows engineers to create flexible and robust geometry models. Design parameters can be easily varied to explore a wide range of design alternatives automatically.",
  },
  {
    icon: Target,
    title: "Shape Optimization",
    description:
      "CAESES enables automated shape optimization by connecting parametric models to CFD or FEA solvers. The software systematically varies design parameters and evaluates performance to find the best possible shape.",
  },
  {
    icon: Workflow,
    title: "Automated Simulation Workflows",
    description:
      "CAESES allows engineers to set up fully automated simulation workflows. Once configured, the software can run hundreds or thousands of design variations and simulations without manual intervention.",
  },
  {
    icon: Layers3,
    title: "CAD Integration",
    description:
      "CAESES integrates seamlessly with existing CAD and simulation tools. It supports standard file formats such as STEP, IGES, and STL, making it easy to incorporate into your existing engineering workflow.",
  },
  {
    icon: BarChart3,
    title: "Design Space Exploration",
    description:
      "CAESES provides tools for systematic design space exploration. Engineers can visualize and analyze the relationships between design parameters and performance metrics to gain deeper insights.",
  },
  {
    icon: Cpu,
    title: "Solver Coupling",
    description:
      "CAESES can be coupled with a wide range of CFD and FEA solvers including ANSYS Fluent, OpenFOAM, STAR-CCM+, and others. This flexibility allows engineers to use their preferred simulation tools.",
  },
];

const applications = [
  {
    icon: Ship,
    title: "Hull Form Optimization",
    description:
      "Optimize ship hull forms to reduce resistance, improve fuel efficiency, and enhance seakeeping performance. CAESES is widely used in the maritime industry for hull design and optimization.",
    image:hull,
  },
  {
    icon: Wind,
    title: "Turbo Machinery",
    description:
      "Design and optimize turbine blades, impellers, and other rotating components. CAESES enables engineers to systematically improve aerodynamic and hydrodynamic performance.",
    image: turbo,
  },
  {
    icon: Droplets,
    title: "Ducting and Flow Channels",
    description:
      "Optimize internal flow paths, ducts, and channels for improved flow distribution, reduced pressure losses, and enhanced thermal performance.",
    image: duct,
  },
  {
    icon: Zap,
    title: "Automotive Aerodynamics",
    description:
      "Improve vehicle aerodynamics by optimizing body shapes, underbody panels, and cooling air flow paths. CAESES helps reduce drag and improve overall vehicle efficiency.",
    image: aero,
  },
  {
    icon: Anchor,
    title: "Propeller Design",
    description:
      "Design and optimize marine propellers for improved thrust, reduced cavitation, and enhanced efficiency. CAESES provides specialized tools for propeller geometry modeling.",
    image: propeller,
  },
  {
    icon: Gauge,
    title: "Pipe and Valve Optimization",
    description:
      "Optimize pipe systems, valves, and fittings for reduced pressure drop, improved flow characteristics, and enhanced system performance.",
    image: valves,
  },
];

const industries = [
  {
    title: "Maritime & Shipbuilding",
    description:
      "CAESES is extensively used in the maritime industry for hull form optimization, propeller design, and appendage optimization. Leading shipyards and naval architecture firms rely on CAESES to improve vessel performance and fuel efficiency.",
    areas: ["Hull optimization", "Propeller design", "Appendage design"],
  },
  {
    title: "Turbomachinery",
    description:
      "Engineers in the turbomachinery sector use CAESES to optimize turbine blades, impellers, volutes, and diffusers. The software enables systematic performance improvement of rotating equipment.",
    areas: ["Blade optimization", "Impeller design", "Volute optimization"],
  },
  {
    title: "Automotive",
    description:
      "Automotive engineers use CAESES for aerodynamic shape optimization, cooling system design, and internal flow optimization. The software helps reduce development time and improve vehicle performance.",
    areas: ["Aero optimization", "Cooling systems", "Internal flows"],
  },
  {
    title: "Energy",
    description:
      "CAESES supports the energy sector with optimization of wind turbine blades, hydropower components, and heat exchangers. Engineers can maximize energy output while reducing material costs.",
    areas: ["Wind turbines", "Hydropower", "Heat exchangers"],
  },
  {
    title: "Aerospace",
    description:
      "Aerospace engineers leverage CAESES for intake design, nozzle optimization, and aerodynamic shape improvement. The software supports the development of high-performance aerospace components.",
    areas: ["Intake design", "Nozzle optimization", "Aero shapes"],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Parametric Model Setup",
    description:
      "Define your geometry using CAESES parametric modeling tools. Create flexible models with key design parameters that can be varied automatically.",
  },
  {
    number: "02",
    title: "Design Space Definition",
    description:
      "Specify the ranges and constraints for your design parameters. Define the design space that CAESES will explore during optimization.",
  },
  {
    number: "03",
    title: "Solver Connection",
    description:
      "Connect your parametric model to your preferred CFD or FEA solver. CAESES supports automated mesh generation and solver execution.",
  },
  {
    number: "04",
    title: "Automated Optimization",
    description:
      "Launch the optimization process. CAESES automatically generates design variants, runs simulations, and evaluates performance to find optimal shapes.",
  },
  {
    number: "05",
    title: "Results Analysis",
    description:
      "Analyze the optimization results using CAESES built-in visualization tools. Compare designs, identify trends, and select the best performing solution.",
  },
];

const benefitsData = [
  {
    title: "Reduced Development Time",
    description:
      "Automate repetitive design tasks and explore more design alternatives in less time. CAESES significantly accelerates the product development cycle.",
  },
  {
    title: "Improved Product Performance",
    description:
      "Systematically optimize shapes and geometries to achieve measurable performance improvements. Data-driven design decisions lead to better products.",
  },
  {
    title: "Lower Development Costs",
    description:
      "Reduce the need for physical prototypes and expensive testing by using simulation-driven design optimization. Identify the best design early in the process.",
  },
  {
    title: "Innovation and Competitiveness",
    description:
      "Explore unconventional design solutions that would not be found through manual design iterations. CAESES enables engineers to discover innovative shapes.",
  },
  {
    title: "Knowledge Capture",
    description:
      "Parametric models and automated workflows capture engineering knowledge and best practices. This ensures consistency and enables reuse across projects.",
  },
  {
    title: "Seamless Integration",
    description:
      "CAESES fits into your existing engineering workflow. It works with your preferred CAD and simulation tools, minimizing disruption and learning effort.",
  },
];

/* ------------------------------------------------------------------ */
/*  Responsive Carousel                                                */
/* ------------------------------------------------------------------ */
const Carousel = ({ items, renderCard, desktopCols = 3 }) => {
  const [current, setCurrent] = useState(0);
  const [colsPerView, setColsPerView] = useState(desktopCols);
  const ref = useRef(null);

  useEffect(() => {
    const calc = () => {
      const w = ref.current?.offsetWidth || window.innerWidth;
      if (w < 640)       setColsPerView(1);
      else if (w < 1024) setColsPerView(2);
      else               setColsPerView(desktopCols);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [desktopCols]);

  const maxIndex   = Math.max(0, items.length - colsPerView);
  const showNav    = colsPerView < items.length;
  const next       = () => setCurrent((p) => Math.min(p + 1, maxIndex));
  const prev       = () => setCurrent((p) => Math.max(p - 1, 0));
  const cardWidth  = 100 / colsPerView;

  return (
    <div ref={ref} className="relative w-full">
      {/* nav row */}
      {showNav && (
        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      )}

      {/* track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${current * cardWidth}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0 px-1.5"
              style={{ width: `${cardWidth}%` }}
            >
              {renderCard(item, i)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* dots */}
      {showNav && (
        <div className="mt-5 flex justify-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const CAESES = () => {
  const navigate   = useNavigate();
  const [activeTab, setActiveTab]           = useState("overview");
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRefs = useRef({});

  /* ---------- active-tab via IntersectionObserver ---------- */
  useEffect(() => {
    const observers = [];
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 64; // sticky bar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative py-14 md:py-24 lg:py-32">
        {/* grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.03] blur-[160px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600"
          >
            <button onClick={() => navigate("/")}
              className="transition-colors hover:text-cyan-400">Home</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions")}
              className="transition-colors hover:text-cyan-400">Solutions</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions/cae-software")}
              className="transition-colors hover:text-cyan-400">CAE Software</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">CAESES</span>
          </motion.nav>

          {/* label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              CAE SOFTWARE — CAESES
            </span>
          </motion.div>

          {/* hero grid */}
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-20">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
            >
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl">
                CAESES —{" "}
                <span className="text-cyan-400">
                  Advanced Geometry Modeling&nbsp;&amp;&nbsp;Optimization
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                CAESES is a dedicated software platform for geometry modeling
                and simulation-driven design optimization. It enables engineers
                to create parametric 3D models, set up automated simulation
                workflows, and perform shape optimization to develop
                high-performance products faster and more efficiently.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                As an authorized partner, Shire Technik provides CAESES
                software licensing, implementation support, training, and
                consulting services to help engineering teams maximize the value
                of simulation-driven design.
              </p>

              {/* CTA row */}
              <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition-all duration-300 hover:bg-cyan-300"
                >
                  Get in Touch
                  <ArrowUpRight size={15} />
                </button>
                <a
                  href="https://www.caeses.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-white/20 hover:text-white"
                >
                  Official CAESES Site
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* quick stats */}
              <div className="mt-8 flex flex-wrap gap-8 border-t border-white/[0.08] pt-8 md:mt-10 md:gap-12 md:pt-10">
                {[
                  { value: "10x",   label: "Faster Design Exploration" },
                  { value: "1000+", label: "Design Variants Per Run"   },
                  { value: "30%+",  label: "Performance Improvement"   },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="block font-mono text-2xl font-bold text-cyan-400 md:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — logo / hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#081019] sm:rounded-3xl">
                <div className="flex aspect-[4/3] items-center justify-center p-8 sm:p-10">
                  <img
                    src={caesesHero}
                    alt="CAESES — Geometry Modeling & Optimization Software"
                    className="max-h-full w-full object-contain opacity-90 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/60 via-transparent to-cyan-500/[0.04]" />

                {/* live badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    CAESES
                  </span>
                </div>

                {/* external link badge */}
                <a
                  href="https://www.caeses.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400 sm:bottom-5 sm:right-5"
                >
                  caeses.com
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STICKY TAB BAR
      ===================================================== */}
      <div className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#05080d]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div
            className="flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`relative shrink-0 px-4 py-4 text-[11px] font-medium tracking-[0.08em] transition-colors duration-300 sm:px-5 sm:text-xs ${
                  activeTab === tab.id
                    ? "text-cyan-400"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section id="overview" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">OVERVIEW</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Simulation-Driven Design
              <span className="text-slate-500"> Optimization</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-5"
            >
              {[
                "CAESES is developed by FRIENDSHIP SYSTEMS and is a leading software platform for geometry modeling and shape optimization. The software is specifically designed for engineers who want to automate their design processes and use simulation results to systematically improve product performance.",
                "Unlike traditional CAD tools, CAESES focuses on creating parametric models that are specifically built for optimization. The software provides a unique combination of powerful geometry modeling, automated workflow management, and deep integration with CFD and FEA solvers.",
                "CAESES is trusted by leading engineering companies worldwide including shipyards, turbomachinery manufacturers, automotive OEMs, and research institutions.",
              ].map((txt, i) => (
                <p key={i} className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {txt}
                </p>
              ))}

              <a
                href="https://www.caeses.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                Learn more at caeses.com
                <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* video */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#081019] sm:rounded-3xl"
            >
              <div className="aspect-[16/10] w-full">
                <video
                  src={caesesParam}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/50 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                  PROPELLER VARIATION
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY FEATURES
      ===================================================== */}
      <section
        id="features"
        className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">KEY FEATURES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Powerful tools for
              <span className="text-slate-500"> design optimization</span>
            </h2>
          </motion.div>

          <Carousel
            items={keyFeatures}
            desktopCols={3}
            renderCard={(feat, i) => {
              const Icon = feat.icon;
              return (
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold sm:text-base">{feat.title}</h3>
                  <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    {feat.description}
                  </p>
                </div>
              );
            }}
          />
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ===================================================== */}
      <section id="applications" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">APPLICATIONS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Where CAESES
              <span className="text-slate-500"> makes an impact</span>
            </h2>
          </motion.div>

          <Carousel
            items={applications}
            desktopCols={3}
            renderCard={(app, i) => {
              const Icon = app.icon;
              return (
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#081019] transition-all duration-300 hover:border-cyan-400/20">
                  {/* image */}
                  <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081019] via-[#081019]/30 to-transparent" />
                    <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-black/50 text-cyan-400 backdrop-blur-md sm:left-4 sm:top-4 sm:h-10 sm:w-10">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* text */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-sm font-semibold sm:text-base">{app.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                      {app.description}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <section
        id="industries"
        className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">INDUSTRIES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Trusted across
              <span className="text-slate-500"> industries</span>
            </h2>
          </motion.div>

          {/* mobile — accordion-style stacked cards */}
          <div className="flex flex-col gap-3 lg:hidden">
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#05080d]"
              >
                <button
                  onClick={() => setActiveIndustry(activeIndustry === i ? -1 : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-mono text-[10px] text-cyan-400">0{i + 1}</span>
                  <span className={`flex-1 text-sm font-medium ${activeIndustry === i ? "text-white" : "text-slate-400"}`}>
                    {ind.title}
                  </span>
                  <ChevronRight
                    size={15}
                    className={`text-slate-600 transition-transform duration-300 ${activeIndustry === i ? "rotate-90" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeIndustry === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.06] px-5 py-4">
                        <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                          {ind.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {ind.areas.map((a) => (
                            <span key={a} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* desktop — side-by-side */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
            {/* tab list */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] sm:rounded-3xl">
              {industries.map((ind, i) => (
                <button
                  key={ind.title}
                  onClick={() => setActiveIndustry(i)}
                  className={`relative flex w-full items-center gap-4 border-b border-white/[0.06] px-6 py-5 text-left transition-all duration-300 last:border-b-0 ${
                    activeIndustry === i ? "bg-cyan-400/[0.06]" : "hover:bg-white/[0.025]"
                  }`}
                >
                  {activeIndustry === i && (
                    <motion.span
                      layoutId="ind-line"
                      className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className={`font-mono text-[10px] ${activeIndustry === i ? "text-cyan-400" : "text-slate-700"}`}>
                    0{i + 1}
                  </span>
                  <span className={`text-sm font-medium transition-colors duration-300 sm:text-base ${activeIndustry === i ? "text-white" : "text-slate-500"}`}>
                    {ind.title}
                  </span>
                </button>
              ))}
            </div>

            {/* detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between rounded-3xl border border-cyan-400/10 bg-[#05080d] p-8 md:p-10"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                    INDUSTRY 0{activeIndustry + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] md:text-3xl lg:text-4xl">
                    {industries[activeIndustry].title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                    {industries[activeIndustry].description}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/[0.07] pt-6">
                  <span className="text-[10px] tracking-[0.2em] text-slate-600">KEY AREAS</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {industries[activeIndustry].areas.map((area) => (
                      <span key={area} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}
      <section id="workflow" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">WORKFLOW</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              How CAESES
              <span className="text-slate-500"> works</span>
            </h2>
          </motion.div>

          {/* mobile: vertical stack */}
          <div className="flex flex-col gap-3 md:hidden">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-white/[0.07] p-5 hover:border-cyan-400/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#05080d] font-mono text-xs font-bold text-cyan-400">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* desktop: timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />
            <div className="space-y-4">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="group relative ml-16 flex gap-5 rounded-2xl border border-white/[0.07] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.015] sm:p-6"
                >
                  {/* circle on the line */}
                  <div className="absolute -left-[3.55rem] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-[#05080d] font-mono text-xs font-bold text-cyan-400">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section
        id="benefits"
        className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">BENEFITS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Why choose
              <span className="text-cyan-400"> CAESES</span>
            </h2>
          </motion.div>

          <Carousel
            items={benefitsData}
            desktopCols={3}
            renderCard={(b, i) => (
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 sm:p-6">
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                  <Check size={15} />
                </div>
                <h3 className="text-sm font-semibold sm:text-base">{b.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {b.description}
                </p>
              </div>
            )}
          />
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl border border-white/[0.07] bg-[#071019] p-8 text-center sm:p-10 md:p-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">
              GET STARTED WITH CAESES
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to optimize your
              <span className="text-cyan-400"> product designs?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              Contact us to learn more about CAESES licensing, implementation
              support, and training. Our team will help you get started with
              simulation-driven design optimization.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition-all duration-300 hover:bg-cyan-300 sm:w-auto"
              >
                Contact Us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
              <a
                href="https://www.caeses.com/"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-white/20 hover:text-white sm:w-auto"
              >
                Visit caeses.com
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default CAESES;