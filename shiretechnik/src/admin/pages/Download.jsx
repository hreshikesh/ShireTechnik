import { useEffect, useState, useCallback } from "react";
import {
  Search,
  Eye,
  Inbox,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  CalendarDays,
} from "lucide-react";
import { getDownloadData } from "../service/adminApi";

function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDownload, setSelectedDownload] = useState(null);
  const [showTodayOnly, setShowTodayOnly] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [sortDirection, setSortDirection] = useState("desc");

  const loadDownloads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getDownloadData(currentPage, pageSize, "downloadedAt", sortDirection);
      const data = response?.data;
      if (data && data.content) {
        setDownloads(data.content);
        setTotalPages(data.totalPages || 0);
        setTotalElements(data.totalElements || 0);
      } else {
        setDownloads(Array.isArray(data) ? data : []);
        setTotalPages(1);
        setTotalElements(Array.isArray(data) ? data.length : 0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, sortDirection]);

  useEffect(() => {
    loadDownloads();
  }, [loadDownloads]);

  const formatDate = (str) => {
    if (!str) return "—";
    return new Date(str).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const isToday = (str) => {
    if (!str) return false;
    const d = new Date(str);
    const t = new Date();
    return (
      d.getDate() === t.getDate() &&
      d.getMonth() === t.getMonth() &&
      d.getFullYear() === t.getFullYear()
    );
  };

  const filteredDownloads = downloads.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.phone?.includes(search);
    const matchesToday = !showTodayOnly || isToday(item.downloadedAt);
    return matchesSearch && matchesToday;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] tracking-[0.3em] text-cyan-400">LOGS</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Download Records
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Track and review user software and content download activity.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#071019] p-4">
        <div className="relative min-w-0 flex-1 sm:max-w-md">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
          />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-[#05080d] py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowTodayOnly((p) => !p)}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition ${
              showTodayOnly
                ? "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400"
                : "border-white/[0.08] bg-[#05080d] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            <CalendarDays size={12} />
            Today Only
          </button>

          <button
            onClick={() => setSortDirection((p) => (p === "desc" ? "asc" : "desc"))}
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#05080d] px-3.5 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
          >
            {sortDirection === "desc" ? (
              <ArrowDownWideNarrow size={13} />
            ) : (
              <ArrowUpWideNarrow size={13} />
            )}
            {sortDirection === "desc" ? "Newest" : "Oldest"}
          </button>

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(0);
            }}
            className="rounded-xl border border-white/[0.08] bg-[#05080d] px-3 py-2 text-xs text-slate-400 outline-none transition focus:border-cyan-400/40"
          >
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={25}>25 / page</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019]">
        {loading ? (
          <div className="p-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="mb-2 h-16 animate-pulse rounded-xl border border-white/[0.05] bg-white/[0.02]"
              />
            ))}
          </div>
        ) : filteredDownloads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-[10px] tracking-[0.15em] text-slate-600">
                  <th className="px-6 py-4 font-medium">#</th>
                  <th className="px-6 py-4 font-medium">USER</th>
                  <th className="px-6 py-4 font-medium">PHONE</th>
                  <th className="px-6 py-4 font-medium">DOWNLOADED AT</th>
                  <th className="px-6 py-4 font-medium">DOCUMENT</th>
                  <th className="px-6 py-4 text-right font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredDownloads.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-slate-600">
                      {currentPage * pageSize + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500">{item.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {item.phone || "—"}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-400">
                      {formatDate(item.downloadedAt)}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {item.documentTitle || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end">
                        <button
                          onClick={() =>
                            setSelectedDownload({
                              ...item,
                              serialNo: currentPage * pageSize + index + 1,
                            })
                          }
                          className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#05080d] px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                        >
                          <Eye size={12} /> View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] text-slate-600">
              <Inbox size={20} />
            </div>
            <h4 className="text-sm font-semibold">No downloads found</h4>
            <p className="mt-1 text-xs text-slate-500">
              {showTodayOnly
                ? "No downloads today. Turn off 'Today Only' filter."
                : "Adjust search or check back later."}
            </p>
          </div>
        )}

        {totalPages > 0 && (
          <div className="flex flex-col gap-3 border-t border-white/[0.06] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="text-cyan-400">{currentPage * pageSize + 1}</span> -{" "}
              <span className="text-cyan-400">
                {Math.min((currentPage + 1) * pageSize, totalElements)}
              </span>{" "}
              of <span className="text-cyan-400">{totalElements}</span>
            </p>
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={13} />
              </button>
              {[...Array(totalPages).keys()].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`flex h-8 min-w-[32px] items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                    currentPage === i
                      ? "bg-cyan-400 text-[#05080d]"
                      : "border border-white/[0.08] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage >= totalPages - 1}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedDownload && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedDownload(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <div className="flex items-center gap-2">
                <Download size={16} className="text-cyan-400" />
                <h3 className="text-lg font-semibold">
                  Download #{selectedDownload.serialNo}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDownload(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 transition hover:text-white"
              >
                <X size={15} />
              </button>
            </div>

            <div className="grid gap-3 p-6">
              <InfoField label="Full Name" value={selectedDownload.name} />
              <InfoField label="Email" value={selectedDownload.email} />
              <InfoField label="Phone" value={selectedDownload.phone} />
              <InfoField
                label="Timestamp"
                value={formatDate(selectedDownload.downloadedAt)}
              />
              <InfoField
                label="Document"
                value={selectedDownload.documentTitle}
              />
            </div>

            <div className="flex justify-end border-t border-white/[0.06] px-6 py-4">
              <button
                onClick={() => setSelectedDownload(null)}
                className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const InfoField = ({ label, value }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3">
    <span className="text-[10px] tracking-[0.15em] text-slate-600">
      {label.toUpperCase()}
    </span>
    <span className="max-w-[60%] truncate text-sm text-slate-300">
      {value || "—"}
    </span>
  </div>
);

export default Downloads;