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
  Users,
  BarChart2,
  Monitor,
  FolderOpen,
  Play,
  Pause,
} from "lucide-react";

import pathfinderLogo  from "../../assets/images/pathfinder/pathfinder.webp";
import pathfinderHero  from "../../assets/images/pyrosim/pyroHero.webp";


const tabs = [
  { id: "overview",      label: "Overview"      },
  { id: "features",      label: "Features"      },
  { id: "applications",  label: "Applications"  },
  { id: "benefits",      label: "Benefits"      },
];

const problems = [
  "Manual egress calculations are time-consuming and error-prone.",
  "Text-based tools make it hard to visualise occupant movement.",
  "Demonstrating compliance without 3D evidence is difficult.",
  "Producing reports that satisfy AHJs takes too long.",
];

const features = [
  {
    icon: Users,
    title: "Agent-Based Simulation",
    description:
      "Simulate thousands of individual occupants, each with unique characteristics including walking speed, size, and response time. Pathfinder models realistic crowd behaviour in any building layout.",
  },
  {
    icon: FolderOpen,
    title: "Import CAD & BIM Geometry",
    description:
      "Import your architect's model directly. Pathfinder reads IFC, DXF, FBX and other formats to automatically generate a simulation-ready geometry — saving hours of manual model building.",
  },
  {
    icon: Monitor,
    title: "3D Visualisation",
    description:
      "See occupants moving through your building in real-time 3D. Identify bottlenecks, congestion points, and evacuation inefficiencies before they become real-world problems.",
  },
  {
    icon: BarChart2,
    title: "Professional Reporting",
    description:
      "Generate detailed evacuation time reports, density plots, and high-quality 3D videos to clearly communicate results to clients and Authorities Having Jurisdiction (AHJ).",
  },
];

const applications = [
  {
    number: "01",
    title: "High-Rise Buildings",
    description:
      "Evaluate stairwell usage, elevator evacuation strategies, and floor-by-floor egress times for complex multi-storey structures.",
  },
  {
    number: "02",
    title: "Stadiums & Arenas",
    description:
      "Model large crowd movements during normal operations and emergency evacuations. Identify exit capacity requirements and optimise signage placement.",
  },
  {
    number: "03",
    title: "Hospitals & Care Facilities",
    description:
      "Simulate evacuation of occupants with mobility impairments. Test horizontal evacuation strategies and refuge area capacities.",
  },
  {
    number: "04",
    title: "Transport Hubs",
    description:
      "Analyse passenger flow through airports, train stations, and underground metro systems. Optimise layout and exit routes for both daily operation and emergency scenarios.",
  },
  {
    number: "05",
    title: "Industrial Facilities",
    description:
      "Assess mustering procedures and emergency egress for large industrial sites where complex routing and hazardous areas must be considered.",
  },
  {
    number: "06",
    title: "Hotels & Hospitality",
    description:
      "Evaluate evacuation performance for hotels and entertainment venues, accounting for varying occupant familiarity with the building.",
  },
];

const benefits = [
  {
    title: "Faster Evacuation Analysis",
    description:
      "Automate complex egress calculations and generate results in minutes rather than days of manual work.",
  },
  {
    title: "Visual Compliance Evidence",
    description:
      "Produce 3D animations and reports that clearly demonstrate code compliance and performance-based design to AHJs.",
  },
  {
    title: "Identify Design Issues Early",
    description:
      "Detect bottlenecks, undersized exits, and congestion points during the design phase — before construction begins.",
  },
  {
    title: "Realistic Occupant Behaviour",
    description:
      "Agent-based modelling captures realistic individual behaviour, producing more accurate results than simple flow-based hand calculations.",
  },
  {
    title: "FDS / PyroSim Integration",
    description:
      "Combine Pathfinder with PyroSim and FDS to run simultaneous fire and evacuation scenarios for full performance-based design analysis.",
  },
  {
    title: "Any Experience Level",
    description:
      "Designed for fire safety engineers at all experience levels, with comprehensive training materials and dedicated support from Thunderhead Engineering.",
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

const Pathfinder = () => {
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
            <span className="text-cyan-400">Pathfinder</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">CAE SOFTWARE — PATHFINDER</span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl">
                Agent-Based Evacuation Simulation for{" "}
                <span className="text-cyan-400">Fire Safety Engineering</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Pathfinder is an agent-based egress simulator that provides
                powerful 3D modelling and visualisation tools for fire safety
                engineers. Model occupant movement, identify evacuation
                bottlenecks, and produce professional results that satisfy
                Authorities Having Jurisdiction.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
                <button onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300">
                  Get in Touch <ArrowUpRight size={15} />
                </button>
                <a href="https://www.thunderheadeng.com/pathfinder/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white">
                  Official Pathfinder Site <ExternalLink size={13} />
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
                  <img src={pathfinderLogo} alt="Pathfinder logo"
                    className="max-h-full w-full object-contain opacity-90 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">PATHFINDER</span>
                </div>
                <a href="https://www.thunderheadeng.com/pathfinder/" target="_blank" rel="noreferrer"
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
                  <motion.span layoutId="path-tab-line"
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
              Simulate occupant movement
              <span className="text-slate-500"> with precision.</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex flex-col gap-5">
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Pathfinder is an agent-based egress simulator developed by
                Thunderhead Engineering. Unlike flow-based calculation methods,
                Pathfinder simulates each occupant individually — capturing
                realistic movement, queuing, and decision-making behaviour
                throughout your building.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Engineers use Pathfinder to evaluate egress designs during the
                design phase, assess performance against life safety codes, and
                produce 3D visualisations that clearly demonstrate evacuation
                performance to clients and regulators.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Pathfinder integrates with PyroSim and FDS, enabling combined
                fire and evacuation analysis as part of a complete
                performance-based fire safety design workflow.
              </p>
              <a href="https://www.thunderheadeng.com/pathfinder/" target="_blank" rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400">
                View Pathfinder Features <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
              <div className="aspect-[16/10] w-full">
                <img src={pathfinderHero} alt="Pathfinder evacuation simulation"
                  className="h-full w-full object-cover opacity-80" />
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
              Pathfinder in <span className="text-slate-500">motion</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
              <div className="aspect-video w-full">
                <video ref={videoRef} 
                src="https://res.cloudinary.com/eelqgto5/video/upload/v1786535691/page-pathf-highlight1_1.mp4" loop muted playsInline autoPlay
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
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">EVACUATION SIMULATION DEMO</span>
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
              Everything you need to <span className="text-slate-500">model evacuation</span>
            </h2>
          </motion.div>
          <Carousel items={features} desktopCols={4}
            renderCard={(feat) => {
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

      <section id="applications" className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">APPLICATIONS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Where Pathfinder <span className="text-slate-500">is used</span>
            </h2>
          </motion.div>
          <Carousel items={applications} desktopCols={3}
            renderCard={(app) => (
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
                <span className="font-mono text-[10px] text-cyan-400">{app.number}</span>
                <h3 className="mt-4 text-sm font-semibold sm:text-base">{app.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">{app.description}</p>
              </div>
            )} />
        </div>
      </section>

      <section id="benefits" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14">
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">BENEFITS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Why engineers choose <span className="text-cyan-400">Pathfinder</span>
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
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">GET STARTED WITH PATHFINDER</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to model evacuation <span className="text-cyan-400">with confidence?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              Contact us to learn more about Pathfinder licensing, training, and implementation support. Our team is ready to help you get started.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto">
                Contact Us <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <a href="https://www.thunderheadeng.com/pathfinder/" target="_blank" rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white sm:w-auto">
                Visit Pathfinder Site <ExternalLink size={13} />
              </a>
            </div>
            <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pathfinder;