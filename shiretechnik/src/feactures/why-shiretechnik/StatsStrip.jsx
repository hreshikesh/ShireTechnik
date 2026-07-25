import CountUp from "../../component/CountUp";

const StatsStrip = ({ stats }) => {
  return (
    <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-3 sm:p-4 text-center sm:text-left transition-all hover:border-cyan-500/30"
        >
          <h3 className="text-xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
            <CountUp to={item.value} duration={2} />+
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400 truncate">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;