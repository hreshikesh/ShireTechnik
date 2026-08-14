import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wind,
  Thermometer,
  Gauge,
  Droplets,
  Building2,
  Factory,
  Hospital,
  ShoppingBag,
  Hotel,
  GraduationCap,
  Cpu,
  Zap,
  Snowflake,
  Flame,
  ArrowUpRight,
  Check,
  Settings,
  BarChart3,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */
import logo from "../../assets/images/hvac-product/logo.webp";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
import { serviceSchema } from "../../seo/structuredData";
const productTabs = [
  {
    id: "chillers",
    label: "Chillers",
    icon: Snowflake,
    title: "Water Chillers & Heat Pumps",
    description:
      "High-efficiency air-cooled and water-cooled chillers engineered for precise thermal control across commercial and industrial environments.",
    specs: [
      { label: "Cooling Capacity", value: "50 – 2000 kW" },
      { label: "Refrigerant", value: "R32 / R1234ze" },
      { label: "Efficiency (SEER)", value: "Up to 5.2" },
      { label: "Configuration", value: "Air / Water Cooled" },
    ],
    features: [
      "Inverter-driven scroll & screw compressors",
      "Low-GWP refrigerant compatibility",
      "Free-cooling & heat recovery options",
      "Integrated BMS connectivity",
    ],
  },
  {
    id: "ahu",
    label: "Air Handling",
    icon: Wind,
    title: "Air Handling Units (AHU)",
    description:
      "Modular air handling systems designed for optimal air quality, energy recovery and simulation-validated airflow distribution.",
    specs: [
      { label: "Airflow Range", value: "500 – 100,000 m³/h" },
      { label: "Filter Class", value: "Up to HEPA H14" },
      { label: "Heat Recovery", value: "Up to 85%" },
      { label: "Casing", value: "Thermal Break Panel" },
    ],
    features: [
      "CFD-optimized airflow paths",
      "High-efficiency energy recovery wheels",
      "EC plug-fan technology",
      "Hygienic configurations available",
    ],
  },
  {
    id: "fancoil",
    label: "Fan Coils",
    icon: Gauge,
    title: "Fan Coil Units (FCU)",
    description:
      "Compact, quiet and efficient fan coil units for zone-level comfort control in offices, hotels and residential spaces.",
    specs: [
      { label: "Cooling Capacity", value: "1 – 15 kW" },
      { label: "Sound Level", value: "From 22 dB(A)" },
      { label: "Configuration", value: "Ducted / Cassette / Wall" },
      { label: "Control", value: "0-10V / Modbus" },
    ],
    features: [
      "Ultra-low noise EC motors",
      "Slim-profile concealed designs",
      "Precise zone temperature control",
      "Easy maintenance access",
    ],
  },
  {
    id: "vrf",
    label: "VRF Systems",
    icon: Layers,
    title: "VRF / VRV Systems",
    description:
      "Variable refrigerant flow systems delivering flexible, scalable and energy-efficient climate control for multi-zone buildings.",
    specs: [
      { label: "Capacity", value: "8 – 96 HP" },
      { label: "Connection Ratio", value: "Up to 200%" },
      { label: "Pipe Length", value: "Up to 1000 m" },
      { label: "Zones", value: "Up to 64 Indoor Units" },
    ],
    features: [
      "Simultaneous heating & cooling",
      "Individual zone metering",
      "Long-distance piping capability",
      "Smart load balancing",
    ],
  },
  {
    id: "controls",
    label: "Controls & BMS",
    icon: Cpu,
    title: "Controls & Building Management",
    description:
      "Intelligent control systems and BMS integration that optimize energy usage, monitor performance and automate HVAC operations.",
    specs: [
      { label: "Protocol", value: "BACnet / Modbus / KNX" },
      { label: "Monitoring", value: "Real-time Cloud" },
      { label: "Analytics", value: "AI-Driven" },
      { label: "Access", value: "Web / Mobile App" },
    ],
    features: [
      "Centralized system supervision",
      "Predictive maintenance alerts",
      "Energy consumption dashboards",
      "Remote diagnostics & control",
    ],
  },
];

const applications = [
  {
    icon: Building2,
    title: "Commercial Offices",
    description:
      "Comfortable, energy-efficient climate control for modern workspaces and corporate towers.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Precision air quality and temperature control for hospitals, labs and cleanrooms.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Malls",
    description:
      "Scalable comfort solutions for shopping centers and large retail environments.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Quiet, individually controlled comfort for hotels, resorts and guest rooms.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Robust process cooling and ventilation for manufacturing and production plants.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Healthy indoor environments for schools, universities and research facilities.",
  },
];

const capabilities = [
  {
    icon: BarChart3,
    title: "CFD Simulation",
    text: "Airflow and thermal distribution validated through computational fluid dynamics.",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    text: "Systems engineered to minimize consumption and maximize efficiency.",
  },
  {
    icon: Settings,
    title: "Custom Engineering",
    text: "Tailored HVAC solutions designed around your specific application needs.",
  },
  {
    icon: Thermometer,
    title: "Thermal Management",
    text: "Precise temperature control across the entire building envelope.",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
────────────────────────────────────────────── */

export default function HvacProducts() {
  const [activeTab, setActiveTab] = useState(productTabs[0].id);
  const activeProduct = productTabs.find((t) => t.id === activeTab);

  return (
    <main className="relative overflow-hidden bg-[#05080d] text-white">
      <SEO
        {...seoPages.hvacProducts}
        schema={serviceSchema({
          name: "HVAC Simulation & Products",
          description: "Complete HVAC simulation covering AHU, chillers, VRF and smoke management.",
          url: "/hvac-products",
          serviceType: "Engineering Consulting",
        })}
      />
      {/* Global grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative flex min-h-[85vh] items-center px-5 pt-28 pb-16 sm:px-6 md:px-10 md:pb-20">
        {/* Glow */}
        <div className="pointer-events-none absolute -right-48 top-1/3 h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-400/[0.07] blur-[160px]" />

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400"
            >
              <span className="h-px w-10 bg-cyan-400" />
              HVAC SOLUTIONS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Climate control,
              <br />
              <span className="text-cyan-400">engineered</span> by
              <br />
              <span className="text-slate-500">simulation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-xl text-sm leading-8 text-slate-400 md:text-base"
            >
              Complete HVAC systems for commercial and industrial spaces —
              chillers, air handling units, fan coils and intelligent controls,
              validated through advanced CFD and thermal analysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
              >
                Request a Consultation
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="#products"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#071019] px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-white"
              >
                Explore Products
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-8"
            >
              {[
                { value: "2000+", label: "kW Capacity" },
                { value: "85%", label: "Heat Recovery" },
                { value: "5.2", label: "Peak SEER" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-2xl font-bold text-cyan-400 md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center"
          >
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/[0.08]" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-cyan-400/[0.1]" />
            <div className="absolute inset-[24%] rounded-full border border-cyan-400/[0.12]" />

            {/* Center core */}
            <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071019]/90 backdrop-blur-xl md:h-48 md:w-48">
              <img src={logo} alt="logo" />
            </div>

            {/* Floating nodes */}
            {[
              { icon: Snowflake, pos: "right-0 top-[15%]", label: "COOLING" },
              { icon: Flame, pos: "left-0 top-[25%]", label: "HEATING" },
              { icon: Droplets, pos: "bottom-[20%] left-[5%]", label: "HUMIDITY" },
              { icon: Gauge, pos: "bottom-[12%] right-[5%]", label: "AIRFLOW" },
            ].map((node, i) => {
              const NodeIcon = node.icon;
              return (
                <div
                  key={i}
                  className={`absolute ${node.pos} flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-[#071019]/80 px-3 py-2.5 backdrop-blur-xl`}
                >
                  <NodeIcon size={15} className="text-cyan-400" />
                  <span className="text-[9px] tracking-[0.15em] text-slate-400">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PRODUCTS (TABBED) ══════════════ */}
      <section
        id="products"
        className="relative px-5 py-24 sm:px-6 md:px-10 md:py-32"
      >
        <div className="relative mx-auto max-w-[1400px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
              <span className="h-px w-10 bg-cyan-400" />
              PRODUCT RANGE
              <span className="h-px w-10 bg-cyan-400" />
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Complete HVAC <span className="text-slate-500">portfolio.</span>
            </h2>
          </motion.div>

          {/* Tab buttons — horizontal scroll on mobile */}
          <div className="mb-10 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2.5 sm:justify-center">
              {productTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                        : "border-white/[0.07] bg-[#071019] text-slate-400 hover:border-white/15 hover:text-white"
                      }`}
                  >
                    <TabIcon size={16} strokeWidth={1.6} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Left: Info */}
              <div className="rounded-3xl border border-white/[0.08] bg-[#071019]/70 p-7 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400">
                  {activeProduct && (
                    <activeProduct.icon size={26} strokeWidth={1.5} />
                  )}
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {activeProduct?.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-400">
                  {activeProduct?.description}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-3.5">
                  {activeProduct?.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Specs */}
              <div className="flex flex-col justify-center">
                <span className="mb-6 font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  TECHNICAL SPECIFICATIONS
                </span>

                <div className="grid gap-3 sm:grid-cols-2">
                  {activeProduct?.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="group rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02]"
                    >
                      <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                        {spec.label}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-4 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/10"
                >
                  Request Datasheet
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════ CAPABILITIES ══════════════ */}
      <section className="relative border-y border-white/[0.06] bg-[#070b12]/50 px-5 py-24 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
              <span className="h-px w-10 bg-cyan-400" />
              WHY SHIRETECHNIK
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Simulation-driven <span className="text-slate-500">HVAC.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-white/[0.07] bg-[#071019] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                    <CapIcon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-500">
                    {cap.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ APPLICATIONS ══════════════ */}
      <section className="relative px-5 py-24 sm:px-6 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div>
              <div className="mb-4 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
                <span className="h-px w-10 bg-cyan-400" />
                APPLICATIONS
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Built for every{" "}
                <span className="text-slate-500">environment.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              From high-rise offices to critical healthcare facilities, our HVAC
              systems adapt to the demands of any space.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, i) => {
              const AppIcon = app.icon;
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#071019] p-8 transition-all duration-500 hover:border-cyan-400/20"
                >
                  {/* Top line accent */}
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                    <AppIcon size={26} strokeWidth={1.4} />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {app.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {app.description}
                  </p>

                  {/* Corner glow */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-cyan-400 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-[0.08]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="relative px-5 pb-28 sm:px-6 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#0a1420] to-[#071019] px-7 py-14 text-center sm:px-12 md:py-20"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[120px]" />

            {/* Corner brackets */}
            <span className="absolute left-6 top-6 h-8 w-8 border-l border-t border-cyan-400/30" />
            <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-cyan-400/30" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Ready to engineer your{" "}
                <span className="text-cyan-400">climate solution?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-400">
                Talk to our engineers about your HVAC requirements and get a
                simulation-backed system designed for your space.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                >
                  Get in Touch
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  to="/solutions"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#071019] px-8 py-4 text-sm font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-white"
                >
                  View All Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}