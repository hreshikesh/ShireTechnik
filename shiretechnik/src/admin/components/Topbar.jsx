import { useEffect, useState } from "react";
import { Clock, Calendar } from "lucide-react";

function Topbar() {
  const [systemTime, setSystemTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => setSystemTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const timeString = systemTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const dateString = systemTime.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.06] bg-[#071019] px-6">
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold tracking-[-0.02em] text-white">
          Dashboard
        </h1>
        <p className="mt-0.5 text-[11px] tracking-[0.15em] text-slate-600">
          Overview / Analytics
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#05080d] px-3 py-1.5">
          <Clock size={12} className="text-cyan-400" />
          <span className="font-mono text-xs text-slate-300">{timeString}</span>
        </div>

        <div className="hidden items-center gap-2 rounded-lg border border-white/[0.07] bg-[#05080d] px-3 py-1.5 sm:flex">
          <Calendar size={12} className="text-cyan-400" />
          <span className="text-xs text-slate-300">{dateString}</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;