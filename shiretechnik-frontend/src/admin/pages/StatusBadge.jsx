function StatusBadge({ status }) {
  const s = (status || "").toLowerCase();

  const styles = {
    new: "border-blue-500/20 bg-blue-500/[0.06] text-blue-400",
    in_progress: "border-amber-500/20 bg-amber-500/[0.06] text-amber-400",
    resolved: "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400",
    pending: "border-amber-500/20 bg-amber-500/[0.06] text-amber-400",
    confirmed: "border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400",
    completed: "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400",
    cancelled: "border-red-500/20 bg-red-500/[0.06] text-red-400",
    rejected: "border-red-500/20 bg-red-500/[0.06] text-red-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-[0.1em] ${
        styles[s] || "border-slate-500/20 bg-slate-500/[0.06] text-slate-400"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;