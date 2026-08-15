import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronRight,
  Check,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "lucide-react";


import thermalImg1 from "../../assets/images/thermaldesign/thermal.webp";
import thermalImg2 from "../../assets/images/thermaldesign/thermalIndustry.webp";
import thermalImg3 from "../../assets/images/thermaldesign/thermlaeng.webp";
import ThermalApplicationsSection from "../../feactures/thermal/ThermalApplicationsSection";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
const benefits = [
  "Improved Product Performance",
  "Optimum Cooling Design Solution",
  "Short Time-to-Market",
  "High Reliability Design",
  "Cost Effective Solution",
  "Expert in Electronic Cooling Innovation",
];

const processSteps = [
  {
    number: "01",
    title: "Concept & Requirements",
    description:
      "We begin by understanding your product requirements, design constraints, and thermal challenges. Our engineers define the right engineering approach from the outset.",
  },
  {
    number: "02",
    title: "Thermal Simulation & Analysis",
    description:
      "Using industry-leading simulation tools, our analysts model heat flow, identify hotspots, and evaluate cooling strategies to determine the optimum solution.",
  },
  {
    number: "03",
    title: "Design Optimisation",
    description:
      "We iterate the design to maximise thermal performance while meeting cost, weight, and size constraints. Our solutions adhere to industry standards throughout.",
  },
  {
    number: "04",
    title: "Validation & Product Realisation",
    description:
      "We validate the final design and support product realisation — ensuring your thermal management solution performs reliably in the real world.",
  },
];

const capabilities = [
  "Component-level thermal analysis",
  "Board-level thermal modelling",
  "System-level thermal simulation",
  "CFD-based airflow analysis",
  "Heat sink design & optimisation",
  "Thermal interface material selection",
  "Forced and natural convection analysis",
  "Liquid cooling system design",
  "Thermal characterisation testing",
  "Design for reliability (DfR)",
];

const ThermalDesign = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <SEO {...seoPages.ThermalDesign} />
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
            <button onClick={() => navigate("/solutions/cae-services")} className="transition hover:text-cyan-400">CAE Services</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Thermal Design Services</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              CAE SERVICES — THERMAL DESIGN
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl">
                Thermal Design Services for{" "}
                <span className="text-cyan-400">Electronic Systems</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7">
                Shiretechnik provides a complete range of thermal design
                services for electronic systems from concept to product
                realization — any service in-between during the design &
                development phase.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Our design solutions adhere to industry standards & maximize
                your product performance with a high reliability and meet the
                defined design goals.
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
                <a
                  href="https://www.linkedin.com/company/shiretechnik-thermalmangement/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.7-2.07 1.77-2.07 1.05 0 1.48.77 1.48 2.07v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start lg:sticky lg:top-28 lg:self-start"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={thermalImg1}
                    alt="Thermal design services"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/70 via-transparent to-cyan-500/[0.04]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">THERMAL DESIGN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              From concept to
              <span className="text-slate-500"> product realization.</span>
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
                Our engineers are well-skilled with using all leading industry
                simulation tools and are highly experienced in a variety of
                applications, which helps to solve all our client's thermal
                problems.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We provide our clients with the right engineering approach to
                determine the best solutions given their real-world engineering
                requirements and constraints.
              </p>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We are committed to providing thermal management expertise to
                the electronics industry. We strive to provide our customers
                with complete solutions, tailored to meet their technical
                requirements, so that their business goals will be achieved in
                a timely and cost-effective manner.
              </p>
              <div className="mt-2 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.2em] text-cyan-400">OUR APPROACH</p>
                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Our analysts, customer specialists and R&D team constantly
                  work to challenge the status quo and innovate solutions to
                  deliver even greater value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl lg:sticky lg:top-28 lg:self-start"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={thermalImg2}
                  alt="Thermal engineering analysis"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:bottom-5 sm:left-5">
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                  THERMAL ENGINEERING
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28">
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
              Benefits with
              <span className="text-cyan-400"> Shiretechnik</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Check size={14} />
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-slate-300">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex flex-col gap-5"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] sm:rounded-3xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={thermalImg3}
                    alt="Electronic cooling innovation"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:bottom-5 sm:left-5">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    COOLING INNOVATION
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5 sm:p-6">
                <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Our experts find new ways to meeting your cooling requirements
                  while keeping the solutions cost-effective! Our analysts,
                  customer specialists and R&D team constantly work to challenge
                  the status quo and innovate solutions to deliver even greater
                  value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">OUR PROCESS</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              How we work with
              <span className="text-slate-500"> you</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3 md:hidden">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 hover:border-cyan-400/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071019] font-mono text-xs font-bold text-cyan-400">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="group relative ml-16 flex gap-5 rounded-2xl border border-white/[0.07] bg-[#05080d] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.015]"
                >
                  <div className="absolute -left-[3.55rem] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071019] font-mono text-xs font-bold text-cyan-400">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">CAPABILITIES</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-5xl">
              Our thermal design
              <span className="text-slate-500"> expertise</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#071019] px-4 py-3.5 transition-all duration-300 hover:border-cyan-400/20"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span className="text-xs text-slate-400 sm:text-sm">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ThermalApplicationsSection />

      <section className="border-t border-white/[0.06] bg-[#071019] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/[0.07] bg-[#05080d] p-8 text-center sm:p-10 md:p-14"
          >
            <span className="text-[10px] tracking-[0.3em] text-cyan-400">DISCUSS YOUR REQUIREMENTS</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Ready to discuss your
              <span className="text-cyan-400"> thermal design needs?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6">
              To discuss your thermal design requirements, contact us. Our team
              is ready to provide a complete solution tailored to your technical
              requirements and business goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto"
              >
                Contact Us
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
      {/* i need  a section named thermal application with twhich is modular where we later keep on adding application it data should have id,small desc,pdf link-pdf modal  */}
    </main>
  );
};

export default ThermalDesign;