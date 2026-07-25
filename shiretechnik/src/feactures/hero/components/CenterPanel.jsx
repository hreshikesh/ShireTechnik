import { Cpu, Activity, Boxes } from "lucide-react";
import { motion } from "framer-motion";

const CenterPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 flex h-[400px] w-[400px] flex-col overflow-hidden border border-cyan-500/30 bg-[#071324]/60 p-8 backdrop-blur-2xl"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
      }}
    >
      {/* Holographic Scanner Line Effect */}
      <motion.div
        animate={{ y: [0, 400, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {[
          { icon: Cpu, title: "CFD Analysis", desc: "Computational Fluid Dynamics" },
          { icon: Activity, title: "Thermal Simulation", desc: "Heat Transfer" },
          { icon: Boxes, title: "Shape Optimization", desc: "AI Optimized CAD" },
        ].map((item, i) => (
          <div key={i} className="group flex items-center gap-5 border-b border-white/5 pb-4 last:border-0 last:pb-0">
            <div className="flex h-12 w-12 items-center justify-center border border-cyan-500/20 bg-cyan-500/10 transition-colors group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20">
              <item.icon className="text-cyan-400" size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide text-white">{item.title}</h3>
              <p className="mt-0.5 text-xs text-cyan-200/60 uppercase tracking-widest">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CenterPanel;