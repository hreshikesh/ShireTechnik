import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronRight,
  Check,
} from "lucide-react";

import hvacHero from "../../assets/images/havc/hvac.webp";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
const metrics = [
  { label: "PMV / PPD", sub: "Thermal comfort & ADPI" },
  { label: "TC9.9", sub: "Rack inlet compliance" },
  { label: "N / N+1", sub: "CRAC redundancy analysis" },
];

const hvacServices = [
  "Thermal comfort & indoor air quality — airflow, temperature, humidity, pollutant dispersion",
  "Industrial systems — process airflow balanced with occupant comfort (PMV/PPD, ADPI)",
];

const dataCenterServices = [
  "Hot-aisle / cold-aisle containment airflow optimisation",
  "Rack-level inlet temperature and hotspot prediction",
  "CRAC/CRAH sizing, placement and redundancy (N, N+1)",
  "Raised-floor plenum distribution",
  "Bypass and recirculation reduction",
  "Cooling capacity validation for high-density rack and colocation environments",
];

const standards = [
  {
    category: "Comfort & Air Quality",
    items: [
      {
        code: "ASHRAE 55",
        desc: "Thermal environmental conditions (PMV/PPD, operative temperature)",
      },
      {
        code: "ASHRAE 62.1",
        desc: "Ventilation for acceptable indoor air quality",
      },
      {
        code: "ASHRAE 62.1-2007",
        desc: "Car park and enclosed-space CO/contaminant control",
      },
    ],
  },
  {
    category: "Energy & Equipment",
    items: [
      {
        code: "ASHRAE 90.1",
        desc: "Energy standard for buildings, HVAC equipment efficiency",
      },
      {
        code: "ASHRAE Handbooks",
        desc: "Design load, duct and equipment sizing (Fundamentals & Systems)",
      },
      {
        code: "ASHRAE TC9.9",
        desc: "Data center thermal guidelines",
      },
    ],
  },
];

const whyChoose = [
  {
    title: "Reliability",
    description:
      "Responsive engineering support and 24/7 emergency HVAC service.",
  },
  {
    title: "Expertise",
    description:
      "A decade of CFD, HVAC and fire/life-safety simulation experience.",
  },
  {
    title: "Sustainability",
    description:
      "Energy-efficient designs that cut operating cost and environmental impact.",
  },
  {
    title: "Customer Focus",
    description:
      "Comfort and safety from design through commissioning.",
  },
];

const HVACDesign = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <SEO {...seoPages.HVACDesign} />
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
            <span className="text-cyan-400">HVAC Design Services</span>
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
              CAE SERVICES — HVAC & DATA CENTER CFD
            </span>
          </motion.div>

          {/* Hero grid */}
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-6xl">
                HVAC and Data Center{" "}
                <span className="text-cyan-400">CFD Design Services</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Shiretechnik delivers HVAC CFD design and data center thermal
                management through in-house simulation engineers, backed by
                international standards (ASHRAE, CIBSE, NBC, NFPA, IBC). From
                routine maintenance to full system design and CFD-based
                performance validation — reliable, energy-efficient HVAC
                solutions for homes, businesses and industry.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Data center work applies CFD to server room thermal management,
                helping clients avoid hotspots, reduce cooling energy costs, and
                validate cooling capacity before equipment is installed —
                benchmarked against ASHRAE TC9.9 thermal guidelines.
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

              {/* Key metrics */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-8 md:mt-10 md:pt-10">
                {metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4">
                    <span className="block font-mono text-sm font-bold text-cyan-400 sm:text-base">
                      {m.label}
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — hero image */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={hvacHero}
                    alt="HVAC and Data Center CFD design services"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    HVAC CFD DESIGN
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HVAC CFD DESIGN SERVICES */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">HVAC CFD</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              HVAC CFD
              <span className="text-slate-500"> Design Services</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {hvacServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.015] sm:p-6"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                  <Check size={12} />
                </span>
                <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA CENTER CFD */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">DATA CENTER</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Data Center
              <span className="text-slate-500"> CFD Design</span>
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-5">
              Hot-aisle / cold-aisle containment airflow optimisation,
              rack-level inlet temperature and hotspot prediction, CRAC/CRAH
              sizing, placement and redundancy (N, N+1), raised-floor plenum
              distribution, bypass and recirculation reduction, and cooling
              capacity validation for high-density rack and colocation
              environments.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dataCenterServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.015]"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                  <Check size={12} />
                </span>
                <p className="text-sm leading-7 text-slate-400">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS & COMPLIANCE */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">COMPLIANCE</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Standards &
              <span className="text-slate-500"> Compliance</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-5">
              ASHRAE compliance underpins the design and validation methodology.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {standards.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="rounded-2xl border border-white/[0.07] bg-[#05080d] p-6 sm:rounded-3xl sm:p-8"
              >
                <p className="mb-5 text-[10px] tracking-[0.25em] text-cyan-400">
                  {group.category.toUpperCase()}
                </p>
                <div className="flex flex-col gap-4">
                  {group.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="flex items-start gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="mt-0.5 shrink-0 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-2.5 py-1 font-mono text-[10px] font-semibold text-cyan-400">
                        {item.code}
                      </span>
                      <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SHIRETECHNIK */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">WHY US</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Why Choose
              <span className="text-cyan-400"> Shiretechnik</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                  <Check size={15} />
                </div>
                <h3 className="text-sm font-semibold sm:text-base">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
              <span className="text-cyan-400"> HVAC design needs?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              Contact us to discuss your HVAC or data center CFD requirements.
              Our team is ready to deliver reliable, energy-efficient solutions
              tailored to your project.
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

export default HVACDesign;