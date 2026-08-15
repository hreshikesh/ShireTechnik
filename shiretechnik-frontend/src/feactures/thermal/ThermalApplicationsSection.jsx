import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  FileText,
  Cpu,
  BatteryCharging,
  Zap,
  Server,
  Lightbulb,
  Car,
  Layers,
  Search,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { thermalApplications } from "../../data/thermalApplications";
import PdfViewerModal from "../pdfViewer/PdfViewerModal";

/* ═══════════════ EXTENSIBLE ICON MAP ═══════════════ */
const ICON_MAP = {
  cpu: Cpu,
  battery: BatteryCharging,
  zap: Zap,
  server: Server,
  lightbulb: Lightbulb,
  car: Car,
  default: Layers,
};

const ITEMS_PER_PAGE = 9; // Keeps the DOM light and page height balanced

const ThermalApplicationsSection = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Automatically build tabs with counts from data
  const categories = useMemo(() => {
    const counts = {};
    thermalApplications.forEach((app) => {
      const cat = app.category || "General";
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const categoryList = Object.keys(counts).map((cat) => ({
      name: cat,
      count: counts[cat],
    }));

    return [{ name: "All", count: thermalApplications.length }, ...categoryList];
  }, []);

  // 2. Filter data by active tab and search query
  const filteredApps = useMemo(() => {
    return thermalApplications.filter((app) => {

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        app.title.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        (app.tags && app.tags.some((t) => t.toLowerCase().includes(q)));

      return  matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // 3. Reset pagination whenever filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  // 4. Calculate Paginated Items
  const totalPages = Math.ceil(filteredApps.length / ITEMS_PER_PAGE);
  const paginatedApps = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredApps.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredApps, currentPage]);

  const handleCloseModal = () => {
    setSelectedApp(null);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="thermal-applications"
      className="relative overflow-hidden bg-[#05080d] py-16 text-white md:py-24"
    >
      {/* Background Decor */}
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
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-400/[0.04] blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* ═══════════════ HEADER ═══════════════ */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
              <span className="h-px w-10 bg-cyan-400" />
              SOLUTIONS DIRECTORY
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Thermal Engineering <span className="text-cyan-400">Applications</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Browse our engineering archive of simulation studies, thermal white papers, and domain-specific case studies.
            </p>
          </div>

          {/* Stats Badge */}
          <div className="flex shrink-0 items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#071019]/80 px-5 py-3 backdrop-blur-sm">
            <span className="font-mono text-3xl font-bold text-cyan-400">
              {String(thermalApplications.length).padStart(2, "0")}
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-500">
                TOTAL ARCHIVED
              </span>
              <span className="text-xs font-medium text-slate-300">
                White Papers & Studies
              </span>
            </div>
          </div>
        </div>

        {/* ═══════════════ CONTROLS (TABS + SEARCH + VIEW TOGGLE) ═══════════════ */}
        <div className="mb-8 flex flex-col gap-4 border-b border-white/[0.08] pb-6">
          {/* Top Row: Search & View Modes */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex flex-1 items-center max-w-md rounded-xl border border-white/[0.08] bg-[#071019] px-3.5 py-2 text-xs transition focus-within:border-cyan-400/40">
              <Search size={15} className="mr-2 shrink-0 text-slate-500" />
              <input
                type="text"
                placeholder="Search thermal applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 text-slate-500 hover:text-white"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* View Mode Toggle & Results Info */}
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="font-mono text-xs text-slate-500">
                Showing {filteredApps.length} results
              </span>

              <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#071019] p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    viewMode === "grid"
                      ? "bg-cyan-400/20 text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={14} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    viewMode === "list"
                      ? "bg-cyan-400/20 text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Compact List View"
                >
                  <List size={14} />
                  <span className="hidden sm:inline">List Directory</span>
                </button>
              </div>
            </div>
          </div>


          
        </div>

        {/* ═══════════════ CONTENT (GRID OR LIST) ═══════════════ */}
        {paginatedApps.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentPage}-${viewMode}-${searchQuery}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {viewMode === "grid" ? (
                /* ── GRID VIEW ── */
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedApps.map((app, index) => {
                    const Icon = ICON_MAP[app.icon] || ICON_MAP.default;
                    return (
                      <article
                        key={app.id}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019]/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0a1420]"
                      >
                        <div className="p-5 sm:p-6">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                              <Icon size={18} />
                            </div>
                            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase text-slate-400">
                              {app.category || "General"}
                            </span>
                          </div>

                          <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                            {app.title}
                          </h3>

                          <p className="mt-2.5 line-clamp-3 text-xs leading-6 text-slate-400">
                            {app.description}
                          </p>

                          {app.tags && app.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {app.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[9px] text-slate-500"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="border-t border-white/[0.06] px-5 py-3.5">
                          {app.pdfUrl ? (
                            <button
                              onClick={() => setSelectedApp(app)}
                              className="flex w-full items-center justify-between text-xs font-medium text-slate-300 transition hover:text-cyan-400"
                            >
                              <span className="flex items-center gap-2">
                                <Eye size={14} /> View White Paper
                              </span>
                              <ChevronRight size={14} />
                            </button>
                          ) : (
                            <span className="flex items-center gap-2 text-xs text-slate-600">
                              <FileText size={14} /> Paper Coming Soon
                            </span>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                /* ── COMPACT LIST DIRECTORY VIEW (Perfect for 100+ scanning) ── */
                <div className="flex flex-col gap-2">
                  {paginatedApps.map((app) => {
                    const Icon = ICON_MAP[app.icon] || ICON_MAP.default;
                    return (
                      <div
                        key={app.id}
                        className="group flex flex-col justify-between gap-4 rounded-xl border border-white/[0.07] bg-[#071019]/60 p-4 transition hover:border-cyan-400/30 hover:bg-[#0a1420] sm:flex-row sm:items-center"
                      >
                        <div className="flex items-start gap-3.5 sm:items-center">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-semibold text-white">
                                {app.title}
                              </h3>
                              <span className="hidden rounded bg-white/[0.05] px-2 py-0.5 text-[9px] text-slate-400 md:inline">
                                {app.category}
                              </span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-xs text-slate-400">
                              {app.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          {app.pdfUrl ? (
                            <button
                              onClick={() => setSelectedApp(app)}
                              className="flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                            >
                              <Eye size={13} /> View Paper
                            </button>
                          ) : (
                            <span className="text-xs text-slate-600">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="rounded-2xl border border-white/[0.07] bg-[#071019]/40 py-16 text-center">
            <p className="text-sm text-slate-400">
              No thermal applications found in <span className="text-cyan-400">"{activeTab}"</span> matching your query.
            </p>
            <button
              onClick={() => {
                setActiveTab("All");
                setSearchQuery("");
              }}
              className="mt-4 rounded-xl border border-white/10 px-4 py-2 text-xs text-cyan-400 hover:bg-cyan-400/10"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ═══════════════ PAGINATION BAR ═══════════════ */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/5 disabled:opacity-40"
            >
              <ChevronLeft size={15} /> Previous
            </button>

            <div className="flex items-center gap-1.5 font-mono text-xs">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-8 w-8 rounded-lg transition ${
                    currentPage === page
                      ? "bg-cyan-400 text-black font-bold"
                      : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/5 disabled:opacity-40"
            >
              Next <ChevronRight size={15} />
            </button>
          </div>
        )}

        {/* ═══════════════ FOOTER CTA ═══════════════ */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-[#071019]/80 px-6 py-6 sm:flex-row sm:px-8">
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">
              Need a custom thermal analysis for your domain?
            </p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Our engineering team models custom CFD and thermal simulations on demand.
            </p>
          </div>

          <a
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-cyan-300 sm:text-sm"
          >
            Discuss Project
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* ═══════════════ MODAL ═══════════════ */}
      {selectedApp && (
        <PdfViewerModal
          isOpen={true}
          onClose={handleCloseModal}
          pdfUrl={selectedApp.pdfUrl}
          title={selectedApp.title}
        />
      )}
    </section>
  );
};

export default ThermalApplicationsSection;