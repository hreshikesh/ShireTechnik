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
  Wind,
  BarChart2,
  Monitor,
  Settings2,
  Play,
  Pause,
  Layers3,
  FileText,
} from "lucide-react";

import ventusLogo  from "../../assets/images/ventus/ventuslogo.webp";
import ventusHero  from "../../assets/images/ventus/ventusHero.webp";
import { seoPages } from "../../seo/seoConfig";
import SEO from "../../seo/SEO";
const tabs = [
  { id: "overview",     label: "Overview"     },
  { id: "features",     label: "Features"     },
  { id: "applications", label: "Applications" },
  { id: "benefits",     label: "Benefits"     },
];

const problems = [
  "Manual smoke control calculations are slow and difficult to verify.",
  "Spreadsheet-based methods are error-prone and hard to audit.",
  "Producing reports that satisfy code requirements takes too long.",
  "Validating pressurisation systems without simulation is unreliable.",
];

const features = [
  {
    icon: Wind,
    title: "Smoke Control Analysis",
    description:
      "Perform detailed smoke control calculations for pressurisation systems, smoke exhaust systems, and natural ventilation. Ventus handles all major smoke control strategies used in modern building design.",
  },
  {
    icon: Settings2,
    title: "Pressurisation System Design",
    description:
      "Design and verify stairwell and lift shaft pressurisation systems to the requirements of EN 12101-6, AS 1668, and other international standards. Quickly evaluate the impact of design changes.",
  },
  {
    icon: Layers3,
    title: "Network Flow Modelling",
    description:
      "Build detailed network flow models of building ventilation systems. Ventus calculates airflow, pressure differences, and leakage rates across the entire building envelope.",
  },
  {
    icon: FileText,
    title: "Automated Code Compliance Reports",
    description:
      "Generate professional, code-referenced reports automatically. Ventus produces clear output that documents your analysis and demonstrates compliance to clients and regulators.",
  },
  {
    icon: Monitor,
    title: "Graphical Model Building",
    description:
      "Build your ventilation model graphically using an intuitive interface. Define zones, openings, fans, and leakage paths visually — no manual input file editing required.",
  },
  {
    icon: BarChart2,
    title: "Results Visualisation",
    description:
      "View airflow, pressure, and temperature results clearly with built-in visualisation tools. Identify problem areas and evaluate design alternatives quickly.",
  },
];

const applications = [
  {
    number: "01",
    title: "Stairwell Pressurisation",
    description:
      "Design and verify stairwell pressurisation systems for high-rise buildings. Ventus calculates pressure differences, air velocities, and fan performance to ensure code compliance and effective smoke control.",
  },
  {
    number: "02",
    title: "Lift Shaft Pressurisation",
    description:
      "Analyse lift shaft pressurisation systems to prevent smoke ingress. Ventus evaluates pressure differentials across landing doors and ensures safe conditions for occupants using lifts during evacuation.",
  },
  {
    number: "03",
    title: "Smoke Exhaust Systems",
    description:
      "Model mechanical smoke exhaust systems for car parks, atria, and large open spaces. Ventus calculates exhaust air volumes, make-up air requirements, and system performance.",
  },
  {
    number: "04",
    title: "Natural Ventilation",
    description:
      "Evaluate natural ventilation strategies for smoke control in atria and other large spaces. Ventus models wind effects, buoyancy-driven flow, and vent sizing.",
  },
  {
    number: "05",
    title: "Car Park Ventilation",
    description:
      "Design and verify car park ventilation systems for both normal operation and fire scenarios. Assess jet fan systems, extract rates, and make-up air provision.",
  },
  {
    number: "06",
    title: "Building Envelope Leakage",
    description:
      "Model building envelope leakage and its effect on pressurisation system performance. Ventus accounts for construction quality, door seals, and envelope airtightness.",
  },
];

const standards = [
  "EN 12101-6",
  "AS/NZS 1668",
  "BS 9999",
  "NFPA 92",
  "ISO 21927",
  "Local Building Codes",
];

const benefits = [
  {
    title: "Faster Design Verification",
    description:
      "Complete smoke control calculations in a fraction of the time required for manual methods. Evaluate multiple design options quickly.",
  },
  {
    title: "Reduced Calculation Errors",
    description:
      "Automated calculation engine eliminates manual arithmetic errors. Built-in code checks flag issues before they become problems.",
  },
  {
    title: "Professional Reports",
    description:
      "Generate code-referenced, auditable reports that give clients and regulators confidence in your analysis.",
  },
  {
    title: "Code Compliance",
    description:
      "Ventus supports major international smoke control standards including EN 12101-6, AS 1668, and NFPA 92.",
  },
  {
    title: "PyroSim Integration",
    description:
      "Use Ventus alongside PyroSim and Pathfinder for a complete fire safety engineering workflow covering fire, smoke, and evacuation.",
  },
  {
    title: "Any Experience Level",
    description:
      "Designed for fire safety engineers at all experience levels, with comprehensive training and dedicated support from Thunderhead Engineering.",
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
       <SEO {...seoPages.Ventus} />
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
        <motion.div
          className="flex"
          animate={{ x: `-${current * cardW}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
              }`} />
          ))}
        </div>
      )}
    </div>
  );
};

const Ventus = () => {
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
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 64,
      behavior: "smooth",
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setPlaying(true); }
    else { videoRef.current.pause(); setPlaying(false); }
  };

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">

      {/* HERO */}
      <section className="relative py-14 md:py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

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
            <button onClick={() => navigate("/solutions/cae-software")} className="transition hover:text-cyan-400">CAE Software</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Ventus</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              CAE SOFTWARE — VENTUS
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl">
                Smoke Control & Pressurisation{" "}
                <span className="text-cyan-400">
                  Design Software for Fire Safety Engineers
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Ventus is a powerful smoke control calculation tool designed
                for fire safety engineers. Quickly design, verify, and report
                on pressurisation systems, smoke exhaust systems, and natural
                ventilation strategies — all in one application.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  Get in Touch <ArrowUpRight size={15} />
                </button>
                <a
                  href="https://www.thunderheadeng.com/ventus/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white"
                >
                  Official Ventus Site <ExternalLink size={13} />
                </a>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-8 md:mt-10 md:pt-10">
                <p className="mb-4 text-[10px] tracking-[0.25em] text-slate-600">
                  ARE THESE CHALLENGES HOLDING YOU BACK?
                </p>
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

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="flex aspect-[4/3] items-center justify-center p-8 sm:p-10">
                  <img
                    src={ventusLogo}
                    alt="Ventus logo"
                    className="max-h-full w-full object-contain opacity-90 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    VENTUS
                  </span>
                </div>
                <a
                  href="https://www.thunderheadeng.com/ventus/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] text-slate-400 backdrop-blur-md transition hover:border-cyan-400/30 hover:text-cyan-400 sm:bottom-5 sm:right-5"
                >
                  thunderheadeng.com <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#05080d]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
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
                    layoutId="ventus-tab-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
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
              Smoke control calculation,
              <span className="text-slate-500"> simplified.</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Ventus is a smoke control software tool developed by Thunderhead
                Engineering. It is designed specifically for fire safety
                engineers who need to design, verify, and document pressurisation
                systems and smoke control strategies to international standards.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Unlike general-purpose CFD tools, Ventus is purpose-built for
                smoke control engineering. It uses a network flow approach to
                model airflow and pressure throughout a building, giving
                engineers accurate results without requiring specialist CFD
                expertise.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Ventus integrates with PyroSim and Pathfinder, enabling a
                complete fire safety design workflow covering fire simulation,
                smoke control, and occupant evacuation within a single
                engineering practice.
              </p>

              <div className="mt-2">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-slate-600">
                  SUPPORTED STANDARDS
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://www.thunderheadeng.com/ventus/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                View Ventus Features <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl"
            >
              <div className="aspect-[16/10] w-full">
                <img
                  src={ventusHero}
                  alt="Ventus smoke control interface"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">SEE IT IN ACTION</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4">
              Ventus in <span className="text-slate-500">motion</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
              <div className="aspect-video w-full">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/eelqgto5/video/upload/v1786534867/page-vent-highlight_2026-1.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="h-full w-full object-cover"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/50 via-transparent to-transparent" />
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-black/50 text-cyan-400 backdrop-blur-md transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 sm:h-14 sm:w-14 ${
                  playing ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                {playing
                  ? <Pause size={18} />
                  : <Play size={18} className="translate-x-0.5" />
                }
              </button>
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                  SMOKE CONTROL DEMO
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-16 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">FEATURES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Everything you need to
              <span className="text-slate-500"> design smoke control</span>
            </h2>
          </motion.div>

          <Carousel
            items={features}
            desktopCols={3}
            renderCard={(feat) => {
              const Icon = feat.icon;
              return (
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
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

      {/* APPLICATIONS */}
      <section id="applications" className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">APPLICATIONS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Where Ventus <span className="text-slate-500">is used</span>
            </h2>
          </motion.div>

          <Carousel
            items={applications}
            desktopCols={3}
            renderCard={(app) => (
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
                <span className="font-mono text-[10px] text-cyan-400">{app.number}</span>
                <h3 className="mt-4 text-sm font-semibold sm:text-base">{app.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {app.description}
                </p>
              </div>
            )}
          />
        </div>
      </section>

      {/* THUNDERHEAD SUITE */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">
              THUNDERHEAD ENGINEERING SUITE
            </span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Part of a complete
              <span className="text-slate-500"> fire safety workflow</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "PyroSim",
                role: "Fire Simulation",
                description:
                  "Model fire growth, smoke movement, and thermal conditions using FDS. Use PyroSim results to inform your Ventus smoke control design.",
                path: "/solutions/cae-software/pyrosim",
                external: "https://www.thunderheadeng.com/pyrosim/",
              },
              {
                name: "Ventus",
                role: "Smoke Control",
                description:
                  "Design and verify pressurisation and smoke exhaust systems. Produce code-referenced reports for submission to AHJs.",
                path: null,
                external: "https://www.thunderheadeng.com/ventus/",
                active: true,
              },
              {
                name: "Pathfinder",
                role: "Evacuation Simulation",
                description:
                  "Simulate occupant evacuation using agent-based modelling. Combine with fire and smoke data for full performance-based design.",
                path: "/solutions/cae-software/pathfinder",
                external: "https://www.thunderheadeng.com/pathfinder/",
              },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col rounded-2xl border p-5 sm:p-6 ${
                  tool.active
                    ? "border-cyan-400/20 bg-cyan-400/[0.03]"
                    : "border-white/[0.07] bg-[#071019]"
                }`}
              >
                {tool.active && (
                  <span className="mb-3 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[9px] tracking-[0.15em] text-cyan-400">
                    CURRENT
                  </span>
                )}
                <span className="font-mono text-[10px] text-cyan-400">{tool.role}</span>
                <h3 className="mt-2 text-lg font-semibold">{tool.name}</h3>
                <p className="mt-2.5 flex-1 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {tool.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.path && (
                    <button
                      onClick={() => navigate(tool.path)}
                      className="flex items-center gap-1.5 text-xs text-cyan-400 transition hover:text-cyan-300"
                    >
                      View page <ArrowUpRight size={12} />
                    </button>
                  )}
                  <a
                    href={tool.external}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-slate-300"
                  >
                    Official site <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 rounded-2xl border border-white/[0.07] bg-[#071019] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-slate-600">DEVELOPED BY</p>
                <p className="mt-1.5 text-sm font-medium text-white">Thunderhead Engineering</p>
                <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                  We design our software for anyone to learn, and our customers
                  are delighted when our support team helps them succeed.
                </p>
              </div>
              <a
                href="https://www.thunderheadeng.com/"
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-1.5 text-sm text-cyan-400 transition hover:text-cyan-300"
              >
                thunderheadeng.com <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="scroll-mt-16 border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">BENEFITS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Why engineers choose
              <span className="text-cyan-400"> Ventus</span>
            </h2>
          </motion.div>

          <Carousel
            items={benefits}
            desktopCols={3}
            renderCard={(b) => (
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6">
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

      {/* CONTACT */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/[0.07] bg-[#071019] p-8 text-center sm:p-10 md:p-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">
              GET STARTED WITH VENTUS
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to simplify your
              <span className="text-cyan-400"> smoke control design?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              Contact us to learn more about Ventus licensing, training, and
              implementation support. Our team is ready to help you get started.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto"
              >
                Contact Us
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <a
                href="https://www.thunderheadeng.com/ventus/"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white sm:w-auto"
              >
                Visit Ventus Site <ExternalLink size={13} />
              </a>
            </div>

            <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Ventus;