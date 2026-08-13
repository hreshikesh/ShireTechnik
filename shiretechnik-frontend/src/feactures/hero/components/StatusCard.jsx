const StatusCard = () => {
  return (
    <div className="absolute bottom-6 left-6 z-20 border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="relative flex h-2 w-2 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <div className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
          SYS.SIMULATION_RUNNING
        </span>
      </div>
    </div>
  );
};

export default StatusCard;