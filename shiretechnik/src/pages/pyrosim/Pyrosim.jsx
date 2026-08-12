import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  PenTool,
  Monitor,
  BarChart2,
  Play,
  Pause,
} from "lucide-react";

import pyrosimLogo  from "../../assets/images/pyrosim/pyrosim.webp";
import pyrosimHero  from "../../assets/images/pyrosim/pyroHero.webp";
import fdsLogo      from "../../assets/images/pyrosim/fds.webp";


const tabs = [
  { id: "overview",  label: "Overview"      },
  { id: "features",  label: "Features"      },
  { id: "fds",       label: "FDS + PyroSim" },
  { id: "benefits",  label: "Benefits"      },
];

const problems = [
  "Hand calculations and text-driven design holding you back.",
  "Building geometry from scratch is expensive.",
  "Designing models from only text files is error-prone.",
  "Producing results without advanced tools takes too long.",
];

const features = [
  {
    icon: FolderOpen,
    title: "Import CAD Geometry",
    description:
      "Import the architect's model in seconds. Automatically detect BIM data and generate fire-model-specific geometry. Easily understand and navigate your model.",
  },
  {
    icon: PenTool,
    title: "Design Simulations Graphically",
    description:
      "Build in an application tailored to avoiding errors and mistakes. See your model as you work and easily investigate details through intelligent UI.",
  },
  {
    icon: Monitor,
    title: "Manage Simulation Assets",
    description:
      "Control your CPU processing capabilities to optimize simulation time. Maintain multiple simulation configurations for sensitivity analyses.",
  },
  {
    icon: BarChart2,
    title: "Deliver Professional Results",
    description:
      "Put the worries of an AHJ to rest. Answer all of their questions with unprecedented clarity by creating plots and videos with advanced controls and information overlay.",
  },
];

const fdsPoints = [
  "PyroSim provides graphical tools which automatically generate the text-only FDS input file.",
  "PyroSim imports CAD, enables advanced simulation management, and packages its own results manager.",
  "None of this is possible without FDS empowering car park jet fan simulations, sprinkler activation studies, and more.",
];

const benefits = [
  {
    title: "Faster Modeling",
    description:
      "Save hours of manual input. Import geometry, detect BIM data, and build models faster than any text-based workflow.",
  },
  {
    title: "Fewer Errors",
    description:
      "Real-time error detection and intelligent UI catches mistakes before they become costly simulation failures.",
  },
  {
    title: "Professional Results",
    description:
      "Generate clear plots, videos, and reports that give AHJs and clients the confidence they need.",
  },
  {
    title: "FDS Powered",
    description:
      "Backed by NIST's Fire Dynamics Simulator — the most trusted fire simulation engine in the world.",
  },
  {
    title: "Any Experience Level",
    description:
      "Designed for every level of engineering experience, with in-depth training and self-taught materials available.",
  },
  {
    title: "Full Support",
    description:
      "Thunderhead Engineering supports you every step of the way to help you succeed with performance-based design.",
  },
];

const Carousel = ({ items, renderCard, desktopCols = 3 }) => {
  const [current, setCurrent] = useState(0);
  const [cols, setCols] = useState(desktopCols);
  const ref = useRef(null);

  useEffect(() => {
    const calc = () => {
      const w = ref.current?.offsetWidth ?? window.innerWidth;
      setCols(w < 640 ? 1 : w < 1024 ? 2 : desktopCols);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [desktopCols]);

  const max     = Math.max(0, items.length - cols);
  const showNav = cols < items.length;
  const cardW   = 100 / cols;
  const next    = () => setCurrent((p) => Math.min(p + 1, max));
  const prev    = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <div ref={ref} className="relative w-full">
      {showNav && (
        <div className="mb-5 flex justify-end gap-2">
          <button onClick={prev} disabled={current === 0} aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30">
            <ArrowLeft size={15} />
          </button>
          <button onClick={next} disabled={current === max} aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30">
            <ArrowRight size={15} />
          </button>
        </div>
      )}
      <div className="overflow-hidden">
        <motion.div className="flex"
          animate={{ x: `-${current * cardW}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}>
          {items.map((item, i) => (
            <div key={i} className="shrink-0 px-1.5" style={{ width: `${cardW}%` }}>
              {renderCard(item, i)}
            </div>
          ))}
        </motion.div>
      </div>
      {showNav && (
        <div className="mt-5 flex justify-center gap-1.5">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const PyroSim = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

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
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setPlaying(true); }
    else { videoRef.current.pause(); setPlaying(false); }
  };

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">

      <section className="relative py-14 md:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.nav initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
            <button onClick={() => navigate("/")} className="transition hover:text-cyan-400">Home</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions")} className="transition hover:text-cyan-400">Solutions</button>
            <ChevronRight size={11} />
            <button onClick={() => navigate("/solutions/cae-software")} className="transition hover:text-cyan-400">CAE Software</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">PyroSim</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">CAE SOFTWARE — PYROSIM</span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl">
                World's First Thermal Design Software for{" "}
                <span className="text-cyan-400">Every Level of Engineering</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Model dynamic fire simulations in detailed 3D to accelerate and enhance your fire protection analysis. Faster FDS modeling with professional results.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
                <button onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300">
                  Get in Touch <ArrowUpRight size={15} />
                </button>
                <a href="https://www.thunderheadeng.com/pyrosim/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white">
                  Official PyroSim Site <ExternalLink size={13} />
                </a>
              </div>
              <div className="mt-8 border-t border-white/[0.08] pt-8 md:mt-10 md:pt-10">
                <p className="mb-4 text-[10px] tracking-[0.25em] text-slate-600">ARE THESE CHALLENGES HOLDING YOU BACK?</p>
                <ul className="space-y-3">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 sm:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start">
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="flex aspect-[4/3] items-center justify-center p-8 sm:p-10">
                  <img src={pyrosimLogo} alt="PyroSim logo"
                    className="max-h-full w-full object-contain opacity-90 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">PYROSIM</span>
                </div>
                <a href="https://www.thunderheadeng.com/pyrosim/" target="_blank" rel="noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] text-slate-400 backdrop-blur-md transition hover:border-cyan-400/30 hover:text-cyan-400 sm:bottom-5 sm:right-5">
                  thunderheadeng.com <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#05080d]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => scrollTo(tab.id)}
                className={`relative shrink-0 px-4 py-4 text-[11px] font-medium tracking-[0.08em] transition-colors duration-300 sm:px-5 sm:text-xs ${activeTab === tab.id ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"}`}>
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span layoutId="pyro-tab-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section id="overview" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">OVERVIEW</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Elevate fire protection engineering
              <span className="text-slate-500"> to the next level.</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex flex-col gap-5">
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                PyroSim was designed to complement the Fire Dynamics Simulator (FDS) developed by NIST in the US. With state-of-the-art fire research facilities and personnel, they understand the calculations of fire simulation better than anyone.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                FDS is the engine powering fire simulations all over the world. PyroSim empowers more engineers to use this technology and elevates its capabilities.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                FDS is free for anyone to download. We believe PyroSim will quickly win you over. Consider the time not spent constructing your building geometry from scratch in a text editor — and the errors caught in real-time before they become problems.
              </p>
              <a href="https://www.thunderheadeng.com/pyrosim/" target="_blank" rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400">
                View PyroSim Features <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
              <div className="aspect-[16/10] w-full">
                <img src={pyrosimHero} alt="PyroSim fire simulation interface" className="h-full w-full object-cover opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">SEE IT IN ACTION</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-4xl">
              PyroSim in <span className="text-slate-500">motion</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
              <div className="aspect-video w-full">
                <video ref={videoRef} src="https://res.cloudinary.com/eelqgto5/video/upload/v1786534936/page-pyro-highlight1.mp4"
                 loop muted playsInline autoPlay
                  className="h-full w-full object-cover"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/50 via-transparent to-transparent" />
              <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}
                className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-black/50 text-cyan-400 backdrop-blur-md transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 sm:h-14 sm:w-14 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
                {playing ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
              </button>
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">FIRE SIMULATION DEMO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">FEATURES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Everything you need to <span className="text-slate-500">model fire safely</span>
            </h2>
          </motion.div>
          <Carousel items={features} desktopCols={4}
            renderCard={(feat, i) => {
              const Icon = feat.icon;
              return (
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold sm:text-base">{feat.title}</h3>
                  <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">{feat.description}</p>
                </div>
              );
            }} />
        </div>
      </section>

      <section id="fds" className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">FDS + PYROSIM</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Model a <span className="text-slate-500">safer world</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex flex-col gap-5">
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                PyroSim was designed to complement the Fire Dynamics Simulator (FDS) developed by NIST in the US. FDS is the engine powering fire simulations all over the world. PyroSim empowers more engineers to use this technology and elevates its capabilities.
              </p>
              <ul className="space-y-4">
                {fdsPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                      <Check size={11} />
                    </span>
                    <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">{pt}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Thunderhead Engineering supports you every step of the way. Whether you want in-depth training or self-taught materials, you can learn performance-based design modeling with greater efficiency and proficiency.
              </p>
              <a href="https://www.thunderheadeng.com/pyrosim/" target="_blank" rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400">
                Learn more at thunderheadeng.com <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
              className="flex flex-col gap-4">
              <div className="flex flex-col gap-5 rounded-2xl border border-cyan-400/10 bg-[#05080d] p-6 sm:rounded-3xl sm:p-8">
                <div className="flex items-center gap-3">
                  <img src={fdsLogo} alt="FDS — Fire Dynamics Simulator" className="h-10 w-auto object-contain opacity-90" />
                  <div>
                    <p className="text-sm font-semibold">Fire Dynamics Simulator</p>
                    <p className="mt-0.5 text-[10px] tracking-[0.1em] text-slate-600">BY NIST</p>
                  </div>
                </div>
                <p className="text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  FDS is free for anyone to download. PyroSim provides graphical tools on top of FDS — eliminating text-only input files, catching errors in real-time, and packaging advanced results visualization.
                </p>
                <div className="border-t border-white/[0.07] pt-5">
                  <p className="mb-3 text-[10px] tracking-[0.2em] text-slate-600">POWERED USE CASES</p>
                  <div className="flex flex-wrap gap-2">
                    {["Car Park Jet Fan Simulations", "Sprinkler Activation Studies", "Smoke Control Analysis", "Egress Modelling"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.2em] text-slate-600">DEVELOPED BY</p>
                <p className="mt-2 text-sm font-medium text-white">Thunderhead Engineering</p>
                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  We design our software for anyone to learn, and our customers are delighted when our support team helps them succeed.
                </p>
                <a href="https://www.thunderheadeng.com/" target="_blank" rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-400 transition hover:text-cyan-300">
                  thunderheadeng.com <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">BENEFITS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Why engineers choose <span className="text-cyan-400">PyroSim</span>
            </h2>
          </motion.div>
          <Carousel items={benefits} desktopCols={3}
            renderCard={(b) => (
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                  <Check size={15} />
                </div>
                <h3 className="text-sm font-semibold sm:text-base">{b.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">{b.description}</p>
              </div>
            )} />
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/[0.07] bg-[#05080d] p-8 text-center sm:p-10 md:p-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">GET STARTED WITH PYROSIM</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to model fire <span className="text-cyan-400">with confidence?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              Contact us to learn more about PyroSim licensing, training, and implementation support. We believe PyroSim will quickly win you over.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto">
                Contact Us <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <a href="https://www.thunderheadeng.com/pyrosim/" target="_blank" rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white sm:w-auto">
                Visit PyroSim Site <ExternalLink size={13} />
              </a>
            </div>
            <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PyroSim;