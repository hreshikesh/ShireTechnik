const AnimatedRing = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* Outer Dashed Orbit */}
      <div className="absolute h-[560px] w-[560px] rounded-full border border-dashed border-cyan-500/20 animate-[spin_40s_linear_infinite]" />
      
      {/* Middle Orbital with Tracking Node */}
      <div className="absolute h-[460px] w-[460px] rounded-full border border-cyan-500/10 animate-[spin_25s_linear_infinite_reverse]">
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_2px_#22d3ee]" />
      </div>

      {/* Inner Core Ring */}
      <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-300/15 animate-[spin_15s_linear_infinite]">
        <div className="absolute bottom-1/4 right-0 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_1px_#ffffff]" />
      </div>
    </div>
  );
};

export default AnimatedRing;