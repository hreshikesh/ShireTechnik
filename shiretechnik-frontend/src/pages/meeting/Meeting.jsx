import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, ChevronRight, Clock, Users, Shield } from "lucide-react";

import DateSelector from "../../feactures/meeting/DateSelector";
import TimeSlots from "../../feactures/meeting/TimeSlots";
import BookingForm from "../../feactures/meeting/BookingForm";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
function getInitialDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);

  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}



function Meeting() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(getInitialDate());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotsVersion, setSlotsVersion] = useState(0);

  const refreshSlots = () => setSlotsVersion((v) => v + 1);

  return (
    <main className="relative overflow-hidden bg-[#05080d] text-white">
     <SEO {...seoPages.Meeting} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

      {/* ── HERO HEADER ── */}
      <section className="relative pt-14 md:pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600"
          >
            <button
              onClick={() => navigate("/")}
              className="transition hover:text-cyan-400"
            >
              Home
            </button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Book a Meeting</span>
          </motion.nav>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              SCHEDULE A CONSULTATION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Book a <span className="text-cyan-400">Meeting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-5"
          >
            Choose your preferred date and time to connect with ShireTechnik. We're here to help you get started.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 origin-left md:mt-14"
          >
            <div className="h-px w-full bg-gradient-to-r from-cyan-400/40 via-cyan-400/10 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── BOOKING LAYOUT ── */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 xl:gap-10">
            {/* LEFT — Date selector (sticky on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-7">
                <DateSelector
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
            </motion.div>

            {/* RIGHT — Time slots + Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Time slots panel */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-7">
                <TimeSlots
                  selectedDate={selectedDate}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                  refreshTrigger={slotsVersion}
                />
              </div>

              {/* Booking form panel */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-7">
                <BookingForm
                  selectedDate={selectedDate}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                  onBookingSuccess={refreshSlots}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HELP FOOTER ── */}
      <section className="relative border-t border-white/[0.06] bg-[#071019] py-12 md:py-16">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5">
              <CalendarCheck size={12} className="text-cyan-400" />
              <span className="text-[10px] font-medium tracking-[0.25em] text-cyan-400">
                NEED HELP?
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl md:text-3xl">
              Can't find a suitable time?
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Reach out directly and we'll arrange a session that fits your
              schedule. Our team responds within one business day.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 rounded-xl border border-white/10 bg-[#05080d] px-6 py-2.5 text-sm font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-white"
            >
              Contact Us Instead
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Meeting;