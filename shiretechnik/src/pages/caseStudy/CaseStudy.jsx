import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    ChevronRight,
    Search,
    Filter,
    FileText,
    Calendar,
    ArrowUpRight,
    Eye,
    X,
    Layers,
} from "lucide-react";

const caseStudies = [
    {
        id: "thermal-vias-modeling",
        date: "20 Jul",
        day: "20",
        month: "Jul",
        category: "Thermal CFD CAE Service",
        categoryId: "thermal",
        title: "Case Study on Thermal Vias Modeling for Simulation SOLIDWORKS Innovation Day",
        description:
            "Detailed thermal via modeling and simulation study presented at SOLIDWORKS Innovation Day, demonstrating advanced PCB thermal management techniques using CFD analysis.",
        tags: ["Thermal Vias", "PCB Thermal", "SOLIDWORKS", "CFD"],
    },
    {
        id: "busbar-thermal-design",
        date: "20 Jul",
        day: "20",
        month: "Jul",
        category: "Thermal CFD CAE Service",
        categoryId: "thermal",
        title: "Busbar Thermal Design",
        description:
            "Comprehensive thermal design analysis for busbar systems, evaluating heat dissipation, current carrying capacity, and thermal performance under various operating conditions.",
        tags: ["Busbar", "Thermal Design", "Power Systems", "Heat Dissipation"],
    },
    {
        id: "hospital-ward-thermal-comfort",
        date: "24 Jun",
        day: "24",
        month: "Jun",
        category: "HVAC CFD Service",
        categoryId: "hvac",
        title: "Thermal Comfort Analysis in Hospital Ward",
        description:
            "CFD-based thermal comfort analysis for hospital ward environments, evaluating air distribution, temperature uniformity, and PMV/PPD indices to ensure patient comfort and compliance with healthcare facility standards.",
        tags: ["Thermal Comfort", "Hospital HVAC", "PMV/PPD", "Air Quality"],
    },
    {
        id: "factory-shed-natural-ventilation",
        date: "24 Jun",
        day: "24",
        month: "Jun",
        category: "HVAC CFD Service",
        categoryId: "hvac",
        title: "Natural Ventilation Analysis For Factory Shed",
        description:
            "Natural ventilation study for industrial factory shed using CFD simulation, analysing airflow patterns, ventilation effectiveness, and thermal environment for occupant comfort and energy efficiency.",
        tags: ["Natural Ventilation", "Industrial", "Factory", "Airflow Analysis"],
    },
    {
        id: "electronics-cooling-design",
        date: "20 Jun",
        day: "20",
        month: "Jun",
        category: "Thermal CFD CAE Service",
        categoryId: "thermal",
        title: "Case Studies on Electronics Cooling Design",
        description:
            "Collection of electronics cooling design case studies covering component-level thermal analysis, system-level airflow management, and advanced cooling strategies for high-performance electronic assemblies.",
        tags: ["Electronics Cooling", "Thermal Management", "Component Cooling", "System Design"],
    },
    {
        id: "heatsink-design-optimization",
        date: "03 Jun",
        day: "03",
        month: "Jun",
        category: "Thermal CFD CAE Service",
        categoryId: "thermal",
        title: "Heatsink Design Optimization",
        description:
            "Heatsink geometry optimisation using CFD simulation to maximise thermal performance while minimising material usage and manufacturing cost. Parametric study of fin geometry, spacing, and airflow conditions.",
        tags: ["Heatsink", "Optimization", "Fin Design", "CFD Simulation"],
    },
    {
        id: "hvac-cfd-service-video",
        date: "03 Jun",
        day: "03",
        month: "Jun",
        category: "HVAC CFD Service",
        categoryId: "hvac",
        title: "HVAC CFD Service Video",
        description:
            "Overview video demonstrating Shiretechnik's HVAC CFD service capabilities including airflow simulation, thermal comfort analysis, smoke management, and ventilation system design for various building types.",
        tags: ["HVAC CFD", "Service Overview", "Ventilation", "Video"],
    },
];

const categories = [
    { id: "all", label: "All Case Studies", count: caseStudies.length },
    {
        id: "thermal",
        label: "Thermal CFD CAE",
        count: caseStudies.filter((c) => c.categoryId === "thermal").length,
    },
    {
        id: "hvac",
        label: "HVAC CFD",
        count: caseStudies.filter((c) => c.categoryId === "hvac").length,
    },
];

const CaseStudies = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const initialFilter = searchParams.get("filter") || "all";
    const [activeFilter, setActiveFilter] = useState(initialFilter);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid");

    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
        if (filterId === "all") {
            searchParams.delete("filter");
        } else {
            searchParams.set("filter", filterId);
        }
        setSearchParams(searchParams);
    };

    const filtered = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        return caseStudies.filter((item) => {
            const matchCat = activeFilter === "all" || item.categoryId === activeFilter;
            const matchSearch =
                q === "" ||
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q) ||
                item.tags.some((t) => t.toLowerCase().includes(q));
            return matchCat && matchSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <main className="overflow-hidden bg-[#05080d] text-white">

            {/* HERO */}
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
                        <span className="text-cyan-400">Case Studies</span>
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-cyan-400" />
                        <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
                            RESOURCES — CASE STUDIES
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        White Papers &{" "}
                        <span className="text-cyan-400">Case Studies</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-7"
                    >
                        Explore our engineering case studies across thermal CFD, HVAC
                        simulation, electronics cooling, and industrial ventilation design.
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
                            placeholder="Search case studies..."
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

                {/* FILTERS */}
                <motion.section
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-10"
                >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Filter size={15} className="text-cyan-400" />
                            <span className="tracking-[0.1em]">Filter by Category</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-600">
                                {filtered.length} {filtered.length === 1 ? "result" : "results"}
                            </span>

                            {/* View mode toggle */}
                            <div className="flex overflow-hidden rounded-lg border border-white/[0.07]">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`px-3 py-2 text-[10px] transition ${viewMode === "grid"
                                            ? "bg-cyan-400/[0.1] text-cyan-400"
                                            : "text-slate-600 hover:text-slate-400"
                                        }`}
                                >
                                    Grid
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`px-3 py-2 text-[10px] transition ${viewMode === "list"
                                            ? "bg-cyan-400/[0.1] text-cyan-400"
                                            : "text-slate-600 hover:text-slate-400"
                                        }`}
                                >
                                    List
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleFilterChange(cat.id)}
                                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[11px] font-medium tracking-[0.06em] transition-all duration-300 sm:text-xs ${activeFilter === cat.id
                                        ? "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400"
                                        : "border-white/[0.07] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                                    }`}
                            >
                                {cat.label}
                                <span
                                    className={`rounded-full px-1.5 py-0.5 text-[9px] ${activeFilter === cat.id
                                            ? "bg-cyan-400/20 text-cyan-400"
                                            : "bg-white/[0.06] text-slate-600"
                                        }`}
                                >
                                    {cat.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.section>

                {/* GRID VIEW */}
                {filtered.length > 0 ? (
                    <AnimatePresence mode="wait">
                        <motion.section
                            key={`${activeFilter}-${viewMode}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-16 md:mb-20"
                        >
                            {viewMode === "grid" ? (
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {filtered.map((study, i) => (
                                        <motion.article
                                            key={study.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.06 }}
                                            className="group flex flex-col rounded-2xl border border-white/[0.07] bg-[#071019] transition-all duration-300 hover:border-cyan-400/20"
                                        >
                                            {/* Date + Category header */}
                                            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    {/* Date badge */}
                                                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                                                        <span className="font-mono text-sm font-bold leading-none text-cyan-400">
                                                            {study.day}
                                                        </span>
                                                        <span className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-cyan-400/60">
                                                            {study.month}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] tracking-[0.1em] text-slate-600">
                                                            {study.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-slate-600 transition group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                                                    <FileText size={14} />
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                                                <h3 className="text-sm font-semibold leading-snug sm:text-base">
                                                    {study.title}
                                                </h3>
                                                <p className="mt-3 flex-1 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                                                    {study.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {study.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[9px] text-slate-600"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center gap-2 border-t border-white/[0.06] px-5 py-4">
                                                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400">
                                                    <Eye size={14} />
                                                    View
                                                </button>

                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            ) : (
                                /* LIST VIEW */
                                <div className="flex flex-col gap-3">
                                    {filtered.map((study, i) => (
                                        <motion.article
                                            key={study.id}
                                            initial={{ opacity: 0, x: -16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.05 }}
                                            className="group flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 sm:flex-row sm:items-start sm:gap-5 sm:p-6"
                                        >
                                            {/* Date badge */}
                                            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                                                <span className="font-mono text-base font-bold leading-none text-cyan-400">
                                                    {study.day}
                                                </span>
                                                <span className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-cyan-400/60">
                                                    {study.month}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                                    <span className="text-[10px] tracking-[0.1em] text-cyan-400/60">
                                                        {study.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-sm font-semibold leading-snug sm:text-base">
                                                    {study.title}
                                                </h3>
                                                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                                                    {study.description}
                                                </p>
                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {study.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[9px] text-slate-600"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex shrink-0 gap-2 sm:flex-col">
                                                <button className="flex items-center gap-1.5 rounded-xl border border-white/10 px-4 py-2 text-xs text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400">
                                                    <Eye size={13} /> View
                                                </button>
                                               
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            )}
                        </motion.section>
                    </AnimatePresence>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] py-16 text-center md:mb-20"
                    >
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#05080d] text-slate-600">
                            <FileText size={28} />
                        </div>
                        <h3 className="text-lg font-semibold">No case studies found</h3>
                        <p className="mt-2 max-w-sm text-sm text-slate-500">
                            Try adjusting your filters or search query.
                        </p>
                        <button
                            onClick={() => {
                                handleFilterChange("all");
                                setSearchQuery("");
                            }}
                            className="mt-6 rounded-xl border border-white/10 px-6 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
                        >
                            Reset All Filters
                        </button>
                    </motion.div>
                )}

                {/* CTA BANNER */}
                <motion.section
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-6 text-center sm:rounded-3xl sm:p-8 md:p-12">
                        <span className="text-[10px] tracking-[0.3em] text-cyan-400">
                            NEED A CASE STUDY?
                        </span>
                        <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-4xl">
                            Looking for case studies for
                            <span className="text-cyan-400"> your application?</span>
                        </h3>
                        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500">
                            Submit your request and our engineering team will share relevant
                            case studies tailored to your specific industry and application.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <button
                                onClick={() => navigate("/contact")}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 sm:w-auto"
                            >
                                Request Case Study
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </button>
                            <button
                                onClick={() => navigate("/solutions/cae-services")}
                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:text-white sm:w-auto"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
};

export default CaseStudies;