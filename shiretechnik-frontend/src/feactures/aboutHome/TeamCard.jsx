import { motion } from "framer-motion";
import { Link } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[22px] bg-[#070D18] border border-white/10 shadow-xl transition-all duration-300 hover:border-cyan-500/40"
    >
      {/* Compact Image Container with Gradient Mask */}
      <div className="relative h-[280px] sm:h-[310px] w-full overflow-hidden bg-slate-900">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/40 to-transparent" />
      </div>

      {/* Streamlined Content Layout */}
      <div className="relative z-10 p-5 sm:p-6 pt-1 flex items-center justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {member.name}
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm font-medium text-cyan-400">
            {member.designation}
          </p>
        </div>

        {/* Floating Link Action Button */}
        {member.Link && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={member.Link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s Link Profile`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-colors duration-200 hover:bg-cyan-500 hover:text-white shadow-md"
          >
            <Link size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;