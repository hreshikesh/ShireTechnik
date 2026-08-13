import { useEffect, useState, useCallback } from "react";
import {
  Search,
  Eye,
  Trash2,
  Play,
  Check,
  X,
  Inbox,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getContacts, updateContactStatus, deleteContact } from "../service/adminApi";
import StatusBadge from "./StatusBadge";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [sortDirection, setSortDirection] = useState("desc");

  const loadContacts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getContacts(currentPage, pageSize, "createdAt", sortDirection);
      const data = response?.data;
      if (data && data.content) {
        setContacts(data.content);
        setTotalPages(data.totalPages || 0);
        setTotalElements(data.totalElements || 0);
      } else {
        setContacts(Array.isArray(data) ? data : []);
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
    loadContacts();
  }, [loadContacts]);

  const changeStatus = async (id, status) => {
    try {
      await updateContactStatus(id, status);
      loadContacts();
    } catch (e) { console.error(e); }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this inquiry permanently?")) return;
    try {
      await deleteContact(id);
      loadContacts();
    } catch (e) { console.error(e); }
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.subject?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] tracking-[0.3em] text-cyan-400">INBOX</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Contact Inquiries
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage, track, and process incoming support and sales inquiries.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-[#071019] p-4">
        <div className="relative min-w-0 flex-1 sm:max-w-md">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
          />
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-[#05080d] py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
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
            <div className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="h-16 animate-pulse rounded-xl border border-white/[0.05] bg-white/[0.02]"
                />
              ))}
            </div>
          </div>
        ) : filteredContacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-[10px] tracking-[0.15em] text-slate-600">
                  <th className="px-6 py-4 font-medium">SENDER</th>
                  <th className="px-6 py-4 font-medium">SUBJECT</th>
                  <th className="px-6 py-4 font-medium">STATUS</th>
                  <th className="px-6 py-4 text-right font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{c.name}</span>
                        <span className="text-xs text-slate-500">{c.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{c.subject}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {c.status === "NEW" && (
                          <button
                            onClick={() => changeStatus(c.id, "IN_PROGRESS")}
                            className="flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1.5 text-xs text-amber-400 transition hover:bg-amber-500/[0.12]"
                          >
                            <Play size={11} /> Start
                          </button>
                        )}
                        {c.status === "IN_PROGRESS" && (
                          <button
                            onClick={() => changeStatus(c.id, "RESOLVED")}
                            className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs text-emerald-400 transition hover:bg-emerald-500/[0.12]"
                          >
                            <Check size={11} /> Resolve
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedContact(c)}
                          className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#05080d] px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                        >
                          <Eye size={12} /> View
                        </button>
                        <button
                          onClick={() => remove(c.id)}
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
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] text-slate-600">
              <Inbox size={20} />
            </div>
            <h3 className="text-sm font-semibold">No records found</h3>
            <p className="mt-1 text-xs text-slate-500">
              Adjust your search query or check back later.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="flex flex-col gap-3 border-t border-white/[0.06] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="text-cyan-400">
                {currentPage * pageSize + 1}
              </span>{" "}
              -{" "}
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

      {/* Detail modal */}
      {selectedContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">Inquiry Details</h3>
                <StatusBadge status={selectedContact.status} />
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 transition hover:text-white"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoField label="Full Name" value={selectedContact.name} />
                <InfoField label="Email" value={selectedContact.email} />
                <InfoField label="Phone" value={selectedContact.phone} />
                <InfoField label="Company" value={selectedContact.company} />
              </div>

              <div className="mt-4">
                <p className="mb-1.5 text-[10px] tracking-[0.15em] text-slate-600">SUBJECT</p>
                <p className="rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3 text-sm font-medium text-cyan-400">
                  {selectedContact.subject || "—"}
                </p>
              </div>

              <div className="mt-4">
                <p className="mb-1.5 text-[10px] tracking-[0.15em] text-slate-600">MESSAGE</p>
                <div className="rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3 text-sm leading-6 text-slate-300">
                  {selectedContact.message || "No message content."}
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t border-white/[0.06] px-6 py-4">
              <button
                onClick={() => setSelectedContact(null)}
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
  <div>
    <p className="mb-1.5 text-[10px] tracking-[0.15em] text-slate-600">
      {label.toUpperCase()}
    </p>
    <p className="rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3 text-sm text-slate-300">
      {value || "—"}
    </p>
  </div>
);

export default Contacts;