import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Layers3,
  Activity,
  Settings2,
  ShieldCheck,
  Search,
  Thermometer,
} from "lucide-react";

const services = [
  {
    id: "fea",
    number: "01",
    title: "Finite Element Analysis (FEA)",
    icon: Layers3,
    description:
      "Optimize product performance with detailed stress, vibration, and structural analysis using advanced FEA tools. Our experts ensure that your designs meet strength, safety, and durability standards before physical prototypes are created.",
  },
  {
    id: "cfd",
    number: "02",
    title: "Computational Fluid Dynamics (CFD)",
    icon: Activity,
    description:
      "Leverage CFD simulations to accurately predict fluid flow, heat transfer, and thermal management in your designs. Our solutions help you improve efficiency and reduce operational costs.",
  },
  {
    id: "mbd",
    number: "03",
    title: "Multibody Dynamics (MBD)",
    icon: Settings2,
    description:
      "Simulate and analyze the behavior of mechanical systems under real-world conditions. Our MBD services help you assess system motion, component interactions, and overall performance.",
  },
  {
    id: "fatigue",
    number: "04",
    title: "Fatigue and Durability Analysis",
    icon: ShieldCheck,
    description:
      "Ensure your products withstand time and usage with our fatigue and durability simulations. We provide insights into potential failure points, helping you extend product life cycles.",
  },
  {
    id: "optimization",
    number: "05",
    title: "Optimization and Design Exploration",
    icon: Search,
    description:
      "Maximize performance while minimizing material use and costs with our optimization techniques. We help you explore multiple design alternatives quickly and efficiently.",
  },
  {
    id: "thermal",
    number: "06",
    title: "Thermal and Electromagnetic Analysis",
    icon: Thermometer,
    description:
      "Our thermal and electromagnetic simulations help ensure that electronic and mechanical components work safely under various thermal conditions and electromagnetic fields.",
  },
];

const industries = [
  { title: "Automotive", text: "Enhancing vehicle performance, safety, and fuel efficiency." },
  { title: "Aerospace", text: "Supporting structural integrity, aerodynamics, and thermal management." },
  { title: "Energy", text: "Optimizing systems for wind, solar, and thermal energy sectors." },
  { title: "Manufacturing", text: "Accelerating the development of efficient, reliable, and durable machinery." },
  { title: "Consumer Electronics", text: "Ensuring performance and reliability in electronics design." },
];

const whyChooseUs = [
  { title: "Experienced Engineers", text: "Our team consists of CAE experts with years of industry experience." },
  { title: "Advanced Tools", text: "We utilize the latest CAE software and technologies to deliver precise results." },
  { title: "Customized Solutions", text: "We tailor our services to meet your specific project requirements and goals." },
  { title: "Proven Track Record", text: "Trusted by leading companies across multiple industries, we consistently deliver superior results." },
];

const benefits = [
  "Cost and Time Efficiency",
  "Improved Product Performance",
  "Risk Mitigation",
  "Custom Solutions",
];

const serviceFocus = [
  { label: "Thermal Design Services", path: "/solutions/cae-services/thermal-design" },
  { label: "HVAC Design Services", path: "/solutions/cae-services/hvac-design" },
  { label: "Mechanical Design Services", path: "/solutions/cae-services/mechanical-design" },
  { label: "Structural Design Services", path: "/solutions/cae-services/structural-design" },
];

const CAEServices = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredFocus, setHoveredFocus] = useState(null);
  const [expandedService, setExpandedService] = useState(services[0].id);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      {/* ===== INTRO + SERVICE FOCUS ===== */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32">
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

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 md:mb-12"
          >
            <span className="h-px w-8 bg-cyan-400 sm:w-10" />
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400 sm:text-[10px] sm:tracking-[0.35em]">
              CAE SERVICE SOLUTIONS
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
                Empowering Innovation with{" "}
                <span className="text-cyan-400">Advanced CAE Solutions</span>
              </h1>

              <p className="mt-5 max-w-3xl text-[13px] leading-7 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7 md:mt-8 md:text-base md:leading-8 lg:text-lg">
                We provide comprehensive CAE service solutions that help
                businesses innovate, reduce development time, and minimize
                risks. Our expertise in simulation and analysis tools allows us
                to support engineering teams at every stage of product design
                and development, ensuring reliable and high-performance
                outcomes.
              </p>
            </motion.div>

            {/* Service Focus */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-2.5 sm:gap-3"
            >
              <div className="mb-1 sm:mb-2">
                <span className="text-[9px] tracking-[0.25em] text-cyan-400 sm:text-[10px] sm:tracking-[0.3em]">
                  SERVICE FOCUS
                </span>
              </div>

              {serviceFocus.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  onMouseEnter={() => setHoveredFocus(item.label)}
                  onMouseLeave={() => setHoveredFocus(null)}
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`group relative flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-300 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-5 ${
                    hoveredFocus === item.label
                      ? "border-cyan-400/20 bg-cyan-400/[0.04]"
                      : "border-white/[0.07] bg-[#081019] hover:border-white/[0.12]"
                  }`}
                >
                  {hoveredFocus === item.label && (
                    <motion.span
                      layoutId="focus-active"
                      className="absolute left-0 top-2 h-[calc(100%-16px)] w-[2px] rounded-full bg-cyan-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span
                    className={`font-mono text-[10px] transition-colors duration-300 ${
                      hoveredFocus === item.label ? "text-cyan-400" : "text-slate-700"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`flex-1 text-[13px] font-medium transition-colors duration-300 sm:text-sm md:text-base ${
                      hoveredFocus === item.label ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className={`shrink-0 transition-all duration-300 ${
                      hoveredFocus === item.label ? "text-cyan-400" : "text-slate-700"
                    }`}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              SERVICES
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:text-4xl">
              CAE expertise
            </h2>
          </div>

          {/* MOBILE — Dropdown accordion */}
          <div className="lg:hidden">
            {/* Dropdown selector */}
            <button
              onClick={() => setMobileDropdownOpen((p) => !p)}
              className="flex w-full items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-3.5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-cyan-400">
                  {activeService.number}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                  <activeService.icon size={15} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-white">
                  {activeService.title}
                </span>
              </div>
              <ChevronDown
                size={16}
                className={`shrink-0 text-cyan-400 transition-transform duration-300 ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown list */}
            <AnimatePresence>
              {mobileDropdownOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#05080d]">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const isActive = activeService.id === service.id;
                      return (
                        <button
                          key={service.id}
                          onClick={() => {
                            setActiveService(service);
                            setMobileDropdownOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 border-b border-white/[0.05] px-4 py-3 text-left transition last:border-b-0 ${
                            isActive
                              ? "bg-cyan-400/[0.06] text-cyan-400"
                              : "text-slate-400 hover:bg-white/[0.02]"
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] ${
                              isActive ? "text-cyan-400" : "text-slate-700"
                            }`}
                          >
                            {service.number}
                          </span>
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition ${
                              isActive
                                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                                : "border-white/[0.07] text-slate-600"
                            }`}
                          >
                            <Icon size={13} strokeWidth={1.5} />
                          </div>
                          <span className="flex-1 text-[13px] font-medium">
                            {service.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Description card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 rounded-2xl border border-cyan-400/10 bg-[#05080d] p-5 sm:p-6"
              >
                <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                  SERVICE {activeService.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em] sm:mt-5 sm:text-2xl">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-[13px] leading-7 text-slate-400 sm:text-sm sm:leading-7">
                  {activeService.description}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                    CAE SERVICE SOLUTION
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DESKTOP — Side by side */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] sm:rounded-3xl">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`group relative flex w-full items-center gap-5 border-b border-white/[0.06] px-7 py-5 text-left transition-all duration-300 last:border-b-0 ${
                      isActive ? "bg-cyan-400/[0.06]" : "hover:bg-white/[0.025]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-service-line"
                        className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-cyan-400" : "text-slate-700"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all ${
                        isActive
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                          : "border-white/[0.07] text-slate-600"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <span
                      className={`flex-1 text-base font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {service.title}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`transition-colors duration-300 ${
                        isActive ? "text-cyan-400" : "text-slate-700"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full flex-col justify-between rounded-3xl border border-cyan-400/10 bg-[#05080d] p-8 md:p-10"
                >
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                      SERVICE {activeService.number}
                    </span>
                    <h3 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                      {activeService.title}
                    </h3>
                    <p className="mt-7 text-base leading-8 text-slate-400">
                      {activeService.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                      CAE SERVICE SOLUTION
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-[#05080d] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
                INDUSTRIES
              </span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
                Specialized CAE
                <span className="text-slate-500"> solutions.</span>
              </h2>
              <p className="mt-3 text-[13px] leading-7 text-slate-500 sm:mt-4 sm:text-sm md:mt-5">
                We provide specialized CAE solutions across various industries,
                including:
              </p>
            </motion.div>

            {/* 2-col responsive grid */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex gap-3 rounded-2xl border border-white/[0.07] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:gap-4 sm:p-5"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-cyan-400">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-[13px] font-medium sm:text-sm md:text-base">
                      {industry.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-xs sm:leading-6">
                      {industry.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="border-y border-white/[0.06] bg-[#071019] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              WHY CHOOSE US
            </span>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
              Engineering expertise
              <span className="text-slate-500"> you can rely on.</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.07] bg-[#05080d] p-5 sm:rounded-3xl sm:p-6 md:p-8"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <Check size={13} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium sm:text-base md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-6 text-slate-500 sm:mt-2 sm:text-xs md:mt-3 md:text-sm md:leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-[#05080d] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              BENEFITS
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl xl:text-6xl">
              Better engineering.
              <span className="text-cyan-400"> Better outcomes.</span>
            </h2>
          </motion.div>

          {/* 2-per-row on tablet, 4 on desktop */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 md:mt-14">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.07] p-4 text-center transition-all duration-300 hover:border-cyan-400/20 sm:p-6 md:p-7"
              >
                <span className="font-mono text-[10px] text-cyan-400">
                  0{index + 1}
                </span>
                <p className="mt-3 text-[12px] font-medium text-slate-300 sm:mt-5 sm:text-sm md:mt-6">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="border-t border-white/[0.06] bg-[#071019] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              GET IN TOUCH
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.03em] sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Ready to optimize your
              <span className="text-cyan-400"> engineering process?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-slate-500 sm:mt-5 sm:text-sm md:mt-7">
              Get in touch with our team to discuss how our CAE service
              solutions can support your engineering and product development
              needs.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 md:mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-[#05080d] transition-all duration-300 hover:bg-cyan-300 sm:w-auto sm:px-8 sm:py-3.5"
              >
                Contact Us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            <div className="mx-auto mt-8 h-[1px] w-[100px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent sm:mt-10 sm:w-[120px]" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CAEServices;