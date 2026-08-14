import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  Layers3,
  BarChart3,
  Cable,
  Wrench,
} from "lucide-react";

import caeSoftwareImage from "../../assets/images/caesoftware/cae-software.webp";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
import { serviceSchema } from "../../seo/structuredData";

const software = [
  { id: "caeses", name: "CAESES", category: "Shape Optimization", path: "/solutions/cae-software/caeses" },
  { id: "pyrosim", name: "PyroSim", category: "Fire Simulation", path: "/solutions/cae-software/pyrosim" },
  { id: "pathfinder", name: "Pathfinder", category: "Evacuation Simulation", path: "/solutions/cae-software/pathfinder" },
  { id: "ventus", name: "Ventus", category: "Engineering Simulation", path: "/solutions/cae-software/ventus" },
];

const features = [
  { icon: Cpu, title: "Advanced Simulation Capabilities", text: "Conduct detailed simulations for structural, thermal, fluid, and electromagnetic analyses." },
  { icon: Layers3, title: "User-Friendly Interface", text: "Intuitive design allows for easy navigation and quick learning curves for users of all skill levels." },
  { icon: BarChart3, title: "Real-Time Data Visualization", text: "Gain insights through high-quality graphical representations of simulation results." },
  { icon: Cable, title: "Integration with CAD", text: "Seamlessly integrates with popular CAD software for streamlined workflows." },
  { icon: Wrench, title: "Customizable Tools", text: "Tailor the software to fit your specific industry needs and project requirements." },
];

const benefits = [
  { title: "Enhanced Product Quality", text: "Reduce errors and improve the reliability of your designs through accurate simulations." },
  { title: "Cost and Time Savings", text: "Optimize designs early in the development process to minimize costly revisions later on." },
  { title: "Informed Decision-Making", text: "Utilize data-driven insights to make strategic decisions that enhance project outcomes." },
  { title: "Increased Productivity", text: "Automate repetitive tasks and streamline workflows to focus on innovation." },
];

const applications = [
  { title: "Automotive", text: "Simulate crash tests, fluid dynamics, and structural integrity to enhance vehicle performance and safety." },
  { title: "Aerospace", text: "Analyze aerodynamics and material properties to design efficient and reliable aircraft." },
  { title: "Manufacturing", text: "Optimize processes and workflows to improve productivity and reduce waste." },
  { title: "Electronics", text: "Perform thermal management simulations and reliability assessments for electronic components." },
];

const services = [
  { title: "Consultation and Training", text: "Expert guidance and training sessions to help you maximize the use of our software." },
  { title: "Technical Support", text: "Dedicated support team to assist you with any software-related queries." },
  { title: "Custom Solutions", text: "Tailored software solutions designed to meet the unique needs of your industry." },
];

const CAESoftware = () => {
  const navigate = useNavigate();
  const [hoveredSoftware, setHoveredSoftware] = useState(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <SEO
        {...seoPages.caeSoftware}
        schema={serviceSchema({
          name: "CAE Software Solutions",
          description: "Enterprise CAE software including SOLIDWORKS Simulation, PyroSim, Pathfinder and Ventus.",
          url: "/solutions/cae-software",
          serviceType: "Software Licensing & Support",
        })}
      />
      {/* ===== INTRO + SOFTWARE SELECTOR ===== */}
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
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 md:mb-14"
          >
            <span className="h-px w-8 bg-cyan-400 sm:w-10" />
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400 sm:text-[10px] sm:tracking-[0.35em]">
              CAE SOFTWARE SOLUTIONS
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            {/* ===== LEFT (order 2 on mobile, 1 on desktop) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 lg:col-start-1"
            >
              <h1 className="max-w-3xl text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
                Engineering software
                <span className="text-cyan-400"> built for precision.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-[13px] leading-7 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7 md:mt-8 md:text-base md:leading-8 lg:text-lg">
                Our state-of-the-art CAE software solutions empower engineers
                and designers to innovate and optimize their projects with
                precision. Our tools facilitate advanced simulations, analysis,
                and visualizations, enabling you to make informed decisions
                throughout the product development lifecycle.
              </p>

              {/* ===== KEY FEATURES ===== */}
              <div className="mt-8 md:mt-12">
                {/* Mobile: collapsible */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setFeaturesOpen((p) => !p)}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-left"
                  >
                    <span className="text-[10px] tracking-[0.25em] text-cyan-400">
                      KEY FEATURES ({features.length})
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-cyan-400 transition-transform duration-300 ${featuresOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {featuresOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                              <div
                                key={feature.title}
                                className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4"
                              >
                                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                                  <Icon size={16} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[13px] font-medium">
                                  {feature.title}
                                </h3>
                                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                                  {feature.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop: always visible */}
                <div className="hidden lg:block">
                  <p className="mb-6 text-[10px] tracking-[0.25em] text-slate-600">
                    KEY FEATURES OF OUR CAE SOFTWARE
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.08 }}
                          className={`group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03] ${index === features.length - 1 &&
                              features.length % 2 !== 0
                              ? "sm:col-span-2 sm:max-w-[calc(50%-6px)]"
                              : ""
                            }`}
                        >
                          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                            <Icon size={18} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-sm font-medium">{feature.title}</h3>
                          <p className="mt-2 text-xs leading-6 text-slate-500">
                            {feature.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ===== BUSINESS IMPACT ===== */}
              <div className="mt-8 border-t border-white/[0.08] pt-6 md:mt-12 md:pt-10">
                {/* Mobile: collapsible */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setBenefitsOpen((p) => !p)}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-left"
                  >
                    <span className="text-[10px] tracking-[0.25em] text-cyan-400">
                      BUSINESS IMPACT ({benefits.length})
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-cyan-400 transition-transform duration-300 ${benefitsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {benefitsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {benefits.map((benefit) => (
                            <div
                              key={benefit.title}
                              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-3 py-2.5 text-[13px] text-slate-400"
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                                <Check size={11} />
                              </span>
                              {benefit.title}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop: always visible */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                          <Check size={12} />
                        </span>
                        {benefit.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== RIGHT (order 1 on mobile, 2 on desktop) — SOFTWARE FIRST ON MOBILE ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 lg:col-start-2 lg:sticky lg:top-28 lg:self-start"
            >
              {/* Image */}
              <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#081019] sm:rounded-3xl">
                <img
                  src={caeSoftwareImage}
                  alt="CAE software engineering simulation"
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-transparent to-cyan-500/[0.05]" />
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/30 px-2.5 py-1.5 backdrop-blur-md sm:left-6 sm:top-6 sm:px-3 sm:py-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[9px]">
                    ENGINEERING SOFTWARE
                  </span>
                </div>
              </div>

              {/* Software list */}
              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#081019] p-2 sm:rounded-3xl">
                <p className="px-4 pb-2 pt-3 text-[10px] tracking-[0.25em] text-slate-600 sm:px-5 sm:pt-4">
                  OUR SOFTWARE
                </p>

                {software.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    onMouseEnter={() => setHoveredSoftware(item.id)}
                    onMouseLeave={() => setHoveredSoftware(null)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4 ${hoveredSoftware === item.id
                        ? "bg-cyan-400/[0.08]"
                        : "hover:bg-white/[0.03]"
                      }`}
                  >
                    {hoveredSoftware === item.id && (
                      <motion.span
                        layoutId="software-hover"
                        className="absolute left-0 top-2 h-[calc(100%-16px)] w-[2px] rounded-full bg-cyan-400"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <span
                      className={`font-mono text-[10px] ${hoveredSoftware === item.id ? "text-cyan-400" : "text-slate-700"
                        }`}
                    >
                      0{index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[13px] font-medium transition-colors duration-300 sm:text-sm ${hoveredSoftware === item.id ? "text-white" : "text-slate-500"
                          }`}
                      >
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-600 sm:mt-1">
                        {item.category}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className={`shrink-0 transition-colors duration-300 ${hoveredSoftware === item.id ? "text-cyan-400" : "text-slate-700"
                        }`}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="border-t border-white/[0.06] bg-[#071019] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
                APPLICATIONS
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
                Simulation across
                <span className="text-slate-500"> industries.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {applications.map((application, index) => (
                <motion.div
                  key={application.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-white/[0.07] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-5 md:p-6"
                >
                  <span className="font-mono text-[10px] text-cyan-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-[14px] font-medium sm:mt-6 sm:text-base md:mt-8 md:text-lg">
                    {application.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-xs sm:leading-6 md:mt-3">
                    {application.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-[#05080d] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              SERVICES
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
              Support beyond
              <span className="text-slate-500"> the software.</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 sm:rounded-3xl sm:p-6 md:p-8"
              >
                <span className="font-mono text-[10px] text-cyan-400">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base font-medium sm:mt-6 sm:text-lg md:mt-8 md:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7 md:mt-4">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS (DETAILED) ===== */}
      <section className="border-t border-white/[0.06] bg-[#071019] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-14"
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              BENEFITS
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:mt-4 sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
              Turn simulation into
              <span className="text-cyan-400"> better decisions.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-5 md:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] sm:mb-4 sm:h-10 sm:w-10">
                  <span className="font-mono text-xs font-bold text-cyan-400 sm:text-sm">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-[14px] font-medium sm:text-base md:text-lg">
                  {benefit.title}
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-xs sm:leading-6 md:mt-3 md:text-sm md:leading-7">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-white/[0.06] bg-[#05080d] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[9px] tracking-[0.3em] text-cyan-400 sm:text-[10px]">
              GET STARTED
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.03em] sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Ready to transform your
              <span className="text-cyan-400"> engineering workflow?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-slate-500 sm:mt-5 sm:text-sm md:mt-7">
              Explore our CAE software solutions and discover how simulation
              can help you design better, faster and with greater confidence.
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
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CAESoftware;