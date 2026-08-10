import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import about from "../../../assets/images/about/aboutHero.webp";
const CompanyIntro = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080d] py-10 text-white md:py-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-end justify-between gap-8"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
              <span className="h-px w-10 bg-cyan-400" />
              OUR STORY
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Engineering expertise
              <span className="text-cyan-400"> built from experience.</span>
            </h2>
          </div>

          <span className="hidden font-mono text-xs text-slate-600 md:block">
            ST / 2016—2026
          </span>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          {/* IMAGE / VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >

            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#081019]">

              {/* Replace this with your actual image */}
              <img
                src={about}
                alt="Shiretechnik engineering"
                className="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-transparent to-cyan-500/[0.05]" />

              {/* Technical frame */}
              <div className="absolute inset-5 border border-cyan-400/20" />

              {/* Corner markers */}
              <span className="absolute left-5 top-5 h-6 w-6 border-l border-t border-cyan-400/60" />

              <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-cyan-400/60" />

              {/* Image label */}
              <div className="absolute bottom-7 left-7">
                <p className="font-mono text-[9px] tracking-[0.25em] text-cyan-400">
                  ENGINEERING / SIMULATION
                </p>

                <p className="mt-2 text-xs text-white/50">
                  SHIRETECHNIK SOLUTIONS
                </p>
              </div>

            </div>

            {/* Floating year */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-8 -right-5 rounded-2xl border border-cyan-400/20 bg-[#071019]/90 px-7 py-6 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl md:-right-10"
            >
              <p className="font-mono text-[9px] tracking-[0.25em] text-slate-500">
                ESTABLISHED
              </p>

              <p className="mt-1 text-5xl font-semibold tracking-[-0.06em] text-cyan-400">
                2016
              </p>
            </motion.div>

          </motion.div>

          {/* CONTENT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-400">
                  <CalendarDays size={18} />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Founded by Engineers
                </span>
              </div>

              <h3 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                Shiretechnik Solutions Private Limited
              </h3>

              <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
                Shiretechnik Solutions Private Limited (Shiretechnik)
                was founded by a group of engineers in 2016. It is an
                Indian engineering and simulation consultancy firm
                specializing in advanced design and analysis services,
                with a strong focus on thermal and fluid systems.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500">
                Our work combines engineering expertise with simulation
                driven design to help organizations understand,
                validate and optimize complex systems before physical
                implementation.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="my-12 origin-left border-t border-white/10"
            />

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

              <Stat
                number="2016"
                label="Founded"
              />

              <Stat
                number="20+"
                label="Years Senior Experience"
              />

              <Stat
                number="01"
                label="Engineering Focus"
              />

            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-12 flex items-center gap-4 text-sm text-white"
            >
              <span className="border-b border-cyan-400 pb-1">
                Discover our expertise
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                <ArrowUpRight
                  size={17}
                  className="text-cyan-400"
                />
              </span>
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};

const Stat = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-3xl font-semibold tracking-[-0.04em] text-cyan-400">
        {number}
      </p>

      <p className="mt-2 max-w-[120px] text-[10px] uppercase leading-5 tracking-[0.15em] text-slate-600">
        {label}
      </p>
    </motion.div>
  );
};

export default CompanyIntro;