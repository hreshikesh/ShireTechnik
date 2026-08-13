import { Check } from "lucide-react";
import { motion } from "framer-motion";

const FeatureList = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 sm:mt-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-cyan-500/30 hover:bg-white/[0.04]"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Check size={16} />
          </div>
          <span className="text-sm font-medium text-slate-200">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureList;