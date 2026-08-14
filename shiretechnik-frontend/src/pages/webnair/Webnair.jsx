import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Video,
  Calendar,
  Clock,
  User,
  ArrowUpRight,
  Filter,
  PlayCircle,
  RefreshCw,
  Layers,
  Cpu,
  Ship,
  ChevronRight,
  X,
} from "lucide-react";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
const rawWebinarsData = [
  {
    id: "webinar-2",
    product: "SHIPFLOW",
    category: "SHIPFLOW",
    icon: Ship,
    title: "SHIPFLOW Public & Custom Training — Ship Hydrodynamics CFD",
    description:
      "FLOWTECH International runs recurring public and custom training on SHIPFLOW's RANS, potential-flow, and SHIPFLOW MOTIONS solvers, covering resistance, self-propulsion, and seakeeping workflows for naval architects.",
    date: "Ongoing schedule",
    time: "Varies by region",
    duration: "Varies",
    speaker: "FLOWTECH SHIPFLOW Applications Team",
    status: "On-Demand",
    registrationUrl: "https://shipflow.se/shipflow-training/",
    featured: false,
    tags: ["Marine CFD", "FLOWTECH", "Hydrodynamics"],
  },
  {
    id: "webinar-3",
    product: "CAESES",
    category: "CAESES",
    icon: Layers,
    title: "CAESES North America User Conference 2026 (Recording)",
    description:
      "A free two-day virtual conference from FRIENDSHIP SYSTEMS covering CAESES customer case studies across marine, aerospace, biomedical, energy, and automotive design, plus hands-on workshops on morphing and automation. Note: FRIENDSHIP SYSTEMS was acquired by Maya HTT in July 2026.",
    date: "March 31 – April 1, 2026",
    time: "EDT",
    duration: "2 Days",
    speaker: "FRIENDSHIP SYSTEMS (now part of Maya HTT)",
    status: "On-Demand",
    registrationUrl:
      "https://www.caeses.com/north-america-user-conference-2026/",
    featured: false,
    tags: ["Parametric CAD", "Maya HTT", "Shape Optimization"],
  },
  {
    id: "webinar-4",
    product: "TCAE",
    category: "TCAE",
    icon: Cpu,
    title: "Webinar 96 — New TCAE 26.03 Introduction",
    description:
      "CFD SUPPORT introduces the TCAE 26.03 release: improvements to multiphase simulation, numerical robustness, parallel scalability, and mesh-interface workflows for turbomachinery and rotating equipment.",
    date: "April 9, 2026",
    time: "2:00 PM CEST",
    duration: "60 Mins",
    speaker: "CFD SUPPORT Team",
    status: "On-Demand",
    registrationUrl: "https://www.cfdsupport.com/webinars/",
    featured: false,
    tags: ["CFD SUPPORT", "Turbomachinery", "TCAE"],
  },
];

const categories = [
  { id: "all", name: "All Webinars", icon: null },
  { id: "SHIPFLOW", name: "SHIPFLOW", icon: Ship },
  { id: "CAESES", name: "CAESES", icon: Layers },
  { id: "TCAE", name: "TCAE", icon: Cpu },
];

const WebinarsPage = () => {
  const navigate = useNavigate();
  const [webinarsData, setWebinarsData] = useState(rawWebinarsData);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setWebinarsData(rawWebinarsData);
      setLoading(false);
    }, 600);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setStatusFilter("all");
    setSearchQuery("");
  };

  const filteredWebinars = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return webinarsData.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;
      const matchSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.product.toLowerCase().includes(q) ||
        item.speaker.toLowerCase().includes(q);
      return matchCat && matchStatus && matchSearch;
    });
  }, [webinarsData, selectedCategory, statusFilter, searchQuery]);

  const featuredItem = useMemo(
    () => webinarsData.find((w) => w.featured) || webinarsData[0],
    [webinarsData]
  );

  const showFeatured =
    !loading &&
    selectedCategory === "all" &&
    statusFilter === "all" &&
    !searchQuery &&
    Boolean(featuredItem);

  const featuredIsUpcoming = featuredItem?.status === "Upcoming";

  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <SEO {...seoPages.WebinarsPage} />
      <section className="relative py-14 md:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
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
            <button onClick={() => navigate("/resources")} className="transition hover:text-cyan-400">Resources</button>
            <ChevronRight size={11} />
            <span className="text-cyan-400">Webinars</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              RESOURCES — WEBINARS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Engineering Webinars &{" "}
            <span className="text-cyan-400">Masterclasses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7"
          >
            Deep-dive technical sessions hosted by leading simulation vendors.
            Learn advanced workflows, solve complex modeling challenges, and
            watch past recordings.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-white/[0.08] bg-[#071019] px-4 py-3 transition-all duration-300 focus-within:border-cyan-400/30 md:mt-10"
          >
            <Search size={18} className="shrink-0 text-slate-600" />
            <input
              type="text"
              placeholder="Search topics, speakers, products (e.g. SHIPFLOW)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-slate-400 transition hover:bg-white/20 hover:text-white"
              >
                <X size={12} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">

        {/* ── FEATURED WEBINAR ── */}
        {showFeatured && (
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            <div className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#071019] sm:rounded-3xl">
              {/* Top strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3 sm:px-7">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.15em] text-cyan-400 sm:text-[11px]">
                    {featuredIsUpcoming
                      ? "FEATURED UPCOMING SESSION"
                      : "FEATURED ON-DEMAND SESSION"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {featuredItem.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {featuredItem.time}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-7 md:p-10">
                <h2 className="max-w-3xl text-xl font-semibold tracking-[-0.03em] sm:text-2xl md:text-3xl">
                  {featuredItem.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {featuredItem.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <User size={14} />
                  <span>
                    Hosted by: <span className="text-white">{featuredItem.speaker}</span>
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredItem.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={featuredItem.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-2.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                  >
                    {featuredIsUpcoming ? "Secure Your Spot" : "View Session"}
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── FILTERS ── */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          {/* Top row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Filter size={15} className="text-cyan-400" />
              <span className="tracking-[0.1em]">Filter by Software Suite</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Status toggle */}
              <div className="flex overflow-hidden rounded-lg border border-white/[0.07]">
                {["all", "Upcoming", "On-Demand"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3.5 py-2 text-[10px] font-medium tracking-[0.08em] transition-all duration-300 sm:text-[11px] ${statusFilter === status
                        ? "bg-cyan-400/[0.1] text-cyan-400"
                        : "text-slate-500 hover:bg-white/[0.03] hover:text-slate-300"
                      }`}
                  >
                    {status === "all" ? "All" : status}
                  </button>
                ))}
              </div>

              {/* Refresh */}
              <button
                onClick={handleRefresh}
                className="flex items-center gap-1.5 rounded-lg border border-white/[0.07] px-3 py-2 text-[10px] font-medium text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-400 sm:text-[11px]"
              >
                <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
                Refresh
              </button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[11px] font-medium tracking-[0.06em] transition-all duration-300 sm:text-xs ${selectedCategory === cat.id
                      ? "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400"
                      : "border-white/[0.07] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                    }`}
                >
                  {Icon && <Icon size={14} />}
                  {cat.name}
                </button>
              );
            })}
          </div>
        </motion.section>

        {/* ── WEBINAR CARDS ── */}
        <section className="mb-16 md:mb-20">
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#071019] p-6">
                  <div className="h-4 w-24 animate-pulse rounded bg-white/[0.06]" />
                  <div className="h-3 w-36 animate-pulse rounded bg-white/[0.04]" />
                  <div className="h-5 w-full animate-pulse rounded bg-white/[0.06]" />
                  <div className="h-16 w-full animate-pulse rounded bg-white/[0.04]" />
                  <div className="h-10 w-40 animate-pulse rounded bg-white/[0.06]" />
                </div>
              ))}
            </div>
          ) : filteredWebinars.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWebinars.map((item, i) => {
                const ItemIcon = item.icon || Video;
                const isUpcoming = item.status === "Upcoming";
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="group flex flex-col rounded-2xl border border-white/[0.07] bg-[#071019] transition-all duration-300 hover:border-cyan-400/20"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                          <ItemIcon size={13} />
                        </div>
                        <span className="text-[10px] font-semibold tracking-[0.1em] text-cyan-400">
                          {item.product}
                        </span>
                      </div>
                      <span
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-medium tracking-[0.08em] ${isUpcoming
                            ? "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400"
                            : "border-white/10 bg-white/[0.03] text-slate-500"
                          }`}
                      >
                        {isUpcoming ? <Video size={10} /> : <PlayCircle size={10} />}
                        {item.status}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                      <div className="mb-3 flex items-center gap-3 text-[11px] text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {item.duration}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold leading-snug sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 flex-1 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-600">
                        <User size={12} />
                        <span className="truncate">{item.speaker}</span>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[9px] text-slate-600">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/[0.06] px-5 py-4">
                      <a
                        href={item.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition-all duration-300 ${isUpcoming
                            ? "bg-cyan-400 text-[#05080d] hover:bg-cyan-300"
                            : "border border-white/10 text-slate-400 hover:border-cyan-400/20 hover:text-cyan-400"
                          }`}
                      >
                        {isUpcoming ? "Register for Live Session" : "Watch Recorded Session"}
                        {isUpcoming ? <ArrowUpRight size={14} /> : <PlayCircle size={14} />}
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] py-16 text-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#05080d] text-slate-600">
                <Video size={28} />
              </div>
              <h3 className="text-lg font-semibold">No webinars found</h3>
              <p className="mt-2 max-w-sm text-sm text-slate-500">
                Try searching for a different keyword or adjusting your filters.
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 rounded-xl border border-white/10 px-6 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </section>

        {/* ── QUICK LINKS BANNER ── */}
        <motion.section
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-cyan-400">
                  ARCHIVES
                </span>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  Official Webinar Archives
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Explore comprehensive recorded libraries across all software
                  suites directly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Ship,
                    label: "SHIPFLOW Training",
                    url: "https://shipflow.se/shipflow-training/",
                  },
                  {
                    icon: Layers,
                    label: "CAESES / Maya HTT",
                    url: "https://www.friendship-systems.com/",
                  },
                  {
                    icon: Cpu,
                    label: "TCAE Webinars",
                    url: "https://www.cfdsupport.com/webinars/",
                  },
                ].map((link) => {
                  const LIcon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#05080d] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-400"
                    >
                      <LIcon size={15} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default WebinarsPage;