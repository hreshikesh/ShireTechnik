import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronRight,
  Check,
} from "lucide-react";

import structHero from "../../assets/images/structural/hero.webp";
import structImg2 from "../../assets/images/structural/fea.webp";
import staticImg from "../../assets/images/structural/pole.webp";
import modalImg from "../../assets/images/structural/modal.webp";
import harmonicImg from "../../assets/images/structural/harmonic.webp";
import randomImg from "../../assets/images/structural/random.webp";
import shockImg from "../../assets/images/structural/shock.webp";
import thermoImg from "../../assets/images/structural/thermal.webp";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
const benefits = [
  "Improved Product Reliability",
  "Reduced Physical Prototyping Costs",
  "Faster Time-to-Market",
  "Design Optimisation at Early Stage",
  "Enhanced Structural Integrity",
  "Compliance with Industry Standards",
];

const analysisTabs = [
  {
    id: "static",
    label: "Static Analysis",
    image: staticImg,
    description:
      "Static structural analysis is a widely used methodology to predict, understand & optimize the mechanical behaviour of assembly, parts and components under various loading conditions. The study thoroughly investigates the deformation, stress and strain of a mechanical system and helps achieving the structural integrity.",
  },
  {
    id: "modal",
    label: "Modal Analysis",
    image: modalImg,
    description:
      "Modal analysis examines deformation of a system when excited by external vibrational loads. It determines the structure's dynamic characteristics viz. natural resonant frequencies, damping factors and the associated pattern of structural deformation called mode shapes and helps to locate the soft spots on the structure. Identifying such locations can provide engineers to design the required stability and minimising structural failure due to resonance.",
  },
  {
    id: "harmonic",
    label: "Harmonic Analysis",
    image: harmonicImg,
    description:
      "Any cyclical loads on structural assembly produces a sustained cyclical harmonic response on structural assembly. Harmonic analysis finds out the steady-state response of the structural system where the loads vary sinusoidally with time. Harmonic response analysis subjects the model to constant vibrational load frequency. It uses results from modal analysis and the corresponding natural frequencies to determine the response of the model for a specific frequency range.",
  },
  {
    id: "random",
    label: "Random Vibration Analysis",
    image: randomImg,
    description:
      "Random Vibrational Analysis or Power Spectral Density (PSD) subjects the model under investigation to random vibrational loads containing multitude of frequencies. By analysing their statistical properties, engineers ensure electronic systems stay in sync, no matter the rhythm. The input load for the analysis is non-deterministic and hence can only be in multitude of frequencies. The output for the analysis such as deformation, stresses are always statistical in nature.",
  },
  {
    id: "shock",
    label: "Shock Test Analysis",
    image: shockImg,
    description:
      "Shock analysis evaluates the system response to a load which varies over a very small time. The analysis results help ensuring your electronic designs stay resilient. From rugged wearables to aerospace components, we make sure your tech can handle life's unexpected bumps.",
  },
  {
    id: "thermo",
    label: "Thermo-stress Analysis",
    image: thermoImg,
    description:
      "The thermal-stress analysis is necessary to evaluate the amount of warpage caused by thermal strains and to prevent failure due to excessive stresses caused by thermal conditions. Our FEA algorithms unravel thermal mysteries — predicting hotspots, stress concentrations, and ensuring robust designs.",
  },
];

const StructuralAnalysis = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(analysisTabs[0].id);
  const active = analysisTabs.find((t) => t.id === activeTab);

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <SEO {...seoPages.StructuralAnalysis} />
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
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600"
          >
            <button onClick={() => navigate("/")} className="transition hover:text-cyan-400">Home</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions")} className="transition hover:text-cyan-400">Solutions</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions/cae-services")} className="transition hover:text-cyan-400">CAE Services</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Structural Analysis</span>
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
              CAE SERVICES — STRUCTURAL ANALYSIS
            </span>
          </motion.div>

          {/* Hero grid */}
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-6xl">
                Structural Analysis Services for{" "}
                <span className="text-cyan-400">Electronic Systems</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Shiretechnik offers a wide range of structural analysis services
                for electronic systems during the design & development phase as
                per customer's requirements.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Structural analysis plays a crucial role in electronics design,
                offering several benefits. Our FEA design solutions help to meet
                the product's design goals & enhancing the performance.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  Contact Us <ArrowUpRight size={15} />
                </button>
                <button
                  onClick={() => navigate("/solutions/cae-services")}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white"
                >
                  All CAE Services
                </button>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={structHero}
                    alt="Structural analysis services"
                    className="h-full w-full object-contain opacity-80 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    STRUCTURAL ANALYSIS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + IMAGE 2 ── */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">OVERVIEW</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Comprehensive FEA Services
              <span className="text-slate-500"> for diverse needs</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We provide comprehensive FEA services to meet the diverse needs
                of our clients. Our engineering team uses industry-leading
                simulation tools to analyse structural behaviour under a wide
                range of loading and environmental conditions.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Our FEA solutions cover static, dynamic, vibration, shock, and
                thermal-stress analyses — giving your product the structural
                validation it needs before physical prototypes are built,
                reducing cost and development time.
              </p>

              {/* Benefits grid inside overview */}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#05080d] px-4 py-3.5 transition hover:border-cyan-400/20"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                      <Check size={11} />
                    </span>
                    <span className="text-xs text-slate-400 sm:text-sm">{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl lg:sticky lg:top-28 lg:self-start"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={structImg2}
                  alt="FEA structural simulation"
                  className="h-full w-full object-contain opacity-80 transition duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:bottom-5 sm:left-5">
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                  FEA SIMULATION
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ANALYSIS TABS ── */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">FEA SERVICES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Types of
              <span className="text-slate-500"> Structural Analysis</span>
            </h2>
          </motion.div>

          {/* Tab buttons — scrollable on mobile */}
          <div
            className="mb-6 flex overflow-x-auto gap-2 pb-1 md:mb-8 md:flex-wrap"
            style={{ scrollbarWidth: "none" }}
          >
            {analysisTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-xl border px-4 py-2.5 text-[11px] font-medium tracking-[0.06em] transition-all duration-300 sm:text-xs ${activeTab === tab.id
                    ? "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400"
                    : "border-white/[0.07] bg-[#071019] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl border border-cyan-400/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10"
            >
              {/* Text panel */}
              <div className="flex flex-col justify-center gap-5 rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-8 md:p-10">
                <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                  FEA — {active.label.toUpperCase()}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl md:text-3xl">
                  {active.label}
                </h3>
                <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {active.description}
                </p>
                <div className="border-t border-white/[0.07] pt-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
                  >
                    Discuss this analysis <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Image panel */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.label}
                    className="h-full w-full object-contain opacity-80"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/60 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    {active.label.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile accordion fallback — list all for very small screens */}
          <div className="mt-4 flex flex-col gap-2 lg:hidden">
            {analysisTabs
              .filter((t) => t.id !== activeTab)
              .slice(0, 0)
              .map((tab) => null)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="border-t border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/[0.07] bg-[#05080d] p-8 text-center sm:p-10 md:p-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">
              DISCUSS YOUR REQUIREMENTS
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to discuss your
              <span className="text-cyan-400"> structural analysis needs?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              To discuss your structural analysis requirements, contact us. Our
              team is ready to deliver FEA solutions tailored to your technical
              requirements and business goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto"
              >
                Contact Us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={() => navigate("/solutions/cae-services")}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white sm:w-auto"
              >
                All CAE Services
              </button>
            </div>
            <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default StructuralAnalysis;