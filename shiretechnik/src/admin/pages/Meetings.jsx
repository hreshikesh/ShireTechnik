import { useEffect, useState, useCallback } from "react";
import {
  Search,
  CalendarCheck,
  Video,
  ExternalLink,
  Loader2,
  X,
  Trash2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getMeetings, updateMeetingStatus, deleteMeeting } from "../service/adminApi";
import StatusBadge from "./StatusBadge";

function Meetings() {
  const [search, setSearch] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const pageSize = 5;

  const [filterDate, setFilterDate] = useState("");
  const [isTodayOnly, setIsTodayOnly] = useState(false);

  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    meetingId: null,
    targetStatus: "",
    remarks: "",
  });
  const [modalLoading, setModalLoading] = useState(false);

  const loadMeetings = useCallback(
    async (pageToFetch = 0) => {
      try {
        setError("");
        setLoading(true);
        const response = await getMeetings(pageToFetch, pageSize, "createdAt", "desc");
        const pageData = response.data;
        setMeetings(pageData.content || pageData || []);
        setTotalPages(pageData.totalPages || 1);
        setTotalElements(
          pageData.totalElements || (pageData.content ? pageData.content.length : 0)
        );
      } catch (err) {
        console.error(err);
        setError("Failed to load meetings. Please reload.");
      } finally {
        setLoading(false);
      }
    },
    [pageSize]
  );

  useEffect(() => {
    loadMeetings(currentPage);
  }, [currentPage, loadMeetings]);

  const handleStatusInitiation = (id, status) => {
    setStatusModal({ isOpen: true, meetingId: id, targetStatus: status, remarks: "" });
  };

  const handleCloseModal = () => {
    if (modalLoading) return;
    setStatusModal({ isOpen: false, meetingId: null, targetStatus: "", remarks: "" });
  };

  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    const { meetingId, targetStatus, remarks } = statusModal;
    try {
      setModalLoading(true);
      await updateMeetingStatus(meetingId, targetStatus, remarks);
      handleCloseModal();
      loadMeetings(currentPage);
    } catch (err) {
      console.error(err);
      setError("Failed to update meeting status.");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteMeeting = async (id) => {
    if (!window.confirm("Delete this meeting record?")) return;
    try {
      setError("");
      await deleteMeeting(id);
      loadMeetings(currentPage);
    } catch (err) {
      console.error(err);
      setError("Failed to delete meeting.");
    }
  };

  const filteredMeetings = meetings.filter((m) => {
    const q = search.toLowerCase();
    const matchesSearch =
      (m.name || "").toLowerCase().includes(q) ||
      (m.purpose || "").toLowerCase().includes(q) ||
      (m.meetingMode || "").toLowerCase().includes(q) ||
      (m.status || "").toLowerCase().includes(q);

    let matchesDate = true;
    if (isTodayOnly) {
      const today = new Date().toISOString().split("T")[0];
      matchesDate = m.meetingDate === today || m.meetingDate?.startsWith(today);
    } else if (filterDate) {
      matchesDate = m.meetingDate === filterDate || m.meetingDate?.includes(filterDate);
    }

    return matchesSearch && matchesDate;
  });

  if (loading && meetings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] py-20">
        <Loader2 size={26} className="animate-spin text-cyan-400" />
        <p className="mt-3 text-sm text-slate-500">Loading meeting details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] tracking-[0.3em] text-cyan-400">SCHEDULE</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          System Schedule & Meetings
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Track, approve, manage, and dispatch live conference sessions.
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
            placeholder="Search meetings by name, purpose, status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-[#05080d] py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsTodayOnly(!isTodayOnly);
              if (!isTodayOnly) setFilterDate("");
            }}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition ${
              isTodayOnly
                ? "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400"
                : "border-white/[0.08] bg-[#05080d] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            <CalendarDays size={12} />
            Today
          </button>

          <input
            type="date"
            value={filterDate}
            onChange={(e) => {
              setFilterDate(e.target.value);
              setIsTodayOnly(false);
            }}
            className="rounded-xl border border-white/[0.08] bg-[#05080d] px-3 py-2 text-xs text-slate-400 outline-none transition focus:border-cyan-400/40"
          />

          {(filterDate || isTodayOnly || search) && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilterDate("");
                setIsTodayOnly(false);
              }}
              className="rounded-xl border border-white/[0.08] bg-[#05080d] px-3.5 py-2 text-xs font-medium text-slate-400 transition hover:border-red-500/30 hover:text-red-400"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019]">
        {filteredMeetings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-[10px] tracking-[0.15em] text-slate-600">
                  <th className="px-6 py-4 font-medium">PARTICIPANT</th>
                  <th className="px-6 py-4 font-medium">DATE</th>
                  <th className="px-6 py-4 font-medium">TIME</th>
                  <th className="px-6 py-4 font-medium">MODE</th>
                  <th className="px-6 py-4 font-medium">MEET LINK</th>
                  <th className="px-6 py-4 font-medium">STATUS</th>
                  <th className="px-6 py-4 text-right font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredMeetings.map((m) => (
                  <tr
                    key={m.id}
                    className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-white">
                      {m.name || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{m.meetingDate}</td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      {m.startTime} – {m.endTime}
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                        {m.meetingMode}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {m.googleMeetLink ? (
                        <a
                          href={m.googleMeetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-2.5 py-1 text-xs text-cyan-400 transition hover:bg-cyan-400/[0.12]"
                        >
                          <Video size={11} />
                          Join
                          <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-600">No link</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={m.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {m.status === "PENDING" && (
                          <>
                            <button
                              onClick={() => handleStatusInitiation(m.id, "CONFIRMED")}
                              className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs text-emerald-400 transition hover:bg-emerald-500/[0.12]"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleStatusInitiation(m.id, "REJECTED")}
                              className="rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/[0.12]"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {m.status === "CONFIRMED" && (
                          <>
                            <button
                              onClick={() => handleStatusInitiation(m.id, "COMPLETED")}
                              className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-400 transition hover:bg-cyan-400/[0.12]"
                            >
                              Complete
                            </button>
                            <button
                              onClick={() => handleStatusInitiation(m.id, "CANCELLED")}
                              className="rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1.5 text-xs text-amber-400 transition hover:bg-amber-500/[0.12]"
                            >
                              Cancel
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDeleteMeeting(m.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.06] text-red-400 transition hover:bg-red-500/[0.12]"
                        >
                          <Trash2 size={12} />
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
              <CalendarCheck size={20} />
            </div>
            <h4 className="text-sm font-semibold">No meetings found</h4>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting search or filter criteria.
            </p>
          </div>
        )}

        {totalElements > 0 && (
          <div className="flex flex-col gap-3 border-t border-white/[0.06] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Page{" "}
              <span className="text-cyan-400">
                {currentPage + 1} / {totalPages}
              </span>{" "}
              — <span className="text-cyan-400">{totalElements}</span> meetings
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0 || loading}
                className="flex items-center gap-1 rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={12} /> Previous
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage >= totalPages - 1 || loading}
                className="flex items-center gap-1 rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next <ChevronRight size={12} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Status Modal */}
      {statusModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <form
            onSubmit={handleStatusSubmit}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold">Update Meeting Status</h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  Setting status to{" "}
                  <span className="font-mono text-cyan-400">
                    {statusModal.targetStatus}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                disabled={modalLoading}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 transition hover:text-white"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-6">
              <label className="mb-2 block text-[10px] tracking-[0.15em] text-slate-600">
                INTERNAL REMARKS
              </label>
              <textarea
                value={statusModal.remarks}
                onChange={(e) =>
                  setStatusModal({ ...statusModal, remarks: e.target.value })
                }
                required
                disabled={modalLoading}
                rows={4}
                placeholder="Enter internal admin remarks..."
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#05080d] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400/40 disabled:opacity-50"
              />
            </div>

            <div className="flex justify-end gap-2 border-t border-white/[0.06] px-6 py-4">
              <button
                type="button"
                onClick={handleCloseModal}
                disabled={modalLoading}
                className="rounded-xl border border-white/[0.08] px-4 py-2 text-sm text-slate-400 transition hover:text-white disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={modalLoading}
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300 disabled:opacity-50"
              >
                {modalLoading && <Loader2 size={13} className="animate-spin" />}
                {modalLoading ? "Saving..." : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Meetings;