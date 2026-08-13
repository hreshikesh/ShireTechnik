import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({ title, value, icon, trend, trendType, description }) {
  const isUp = trendType === "up";

  return (
    <div className="group relative flex items-start justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019] p-5 transition-all duration-300 hover:border-cyan-400/20 sm:p-6">
      {/* Corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-12 w-12">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <path
            d="M 16 0 L 48 0 L 48 32"
            fill="none"
            stroke="rgba(34,211,238,0.15)"
            strokeWidth="1"
            className="transition-all duration-500 group-hover:stroke-cyan-400/40"
          />
        </svg>
      </div>

      <div className="relative z-10 flex-1">
        <p className="text-[10px] tracking-[0.2em] text-slate-500">
          {title.toUpperCase()}
        </p>
        <h2 className="mt-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text font-mono text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
          {value}
        </h2>

        {trend && (
          <div className="mt-3 flex items-center gap-2 text-[11px]">
            <span
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 font-medium ${
                isUp
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {trend}
            </span>
            {description && (
              <span className="text-slate-600">{description}</span>
            )}
          </div>
        )}
      </div>

      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
        {icon}
      </div>
    </div>
  );
}

export default StatCard;