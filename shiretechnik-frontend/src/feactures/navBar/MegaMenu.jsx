import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const MegaMenu = ({ menu, onEnter, onLeave }) => {
  return (
    <AnimatePresence>
      {menu?.children && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/[0.08] blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-[70px]" />

            {/* Header label */}
            <div className="relative border-b border-white/[0.05] px-4 py-3">
              <span className="flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-cyan-400/80">
                <span className="h-px w-4 bg-cyan-400/60" />
                {menu.label.toUpperCase()}
              </span>
            </div>

            {/* Vertical list */}
            <div className="relative flex flex-col p-2">
              {menu.children.map((child, index) => (
                <Link
                  key={child.label}
                  to={child.path || "#"}
                  className="group relative flex items-start gap-3 overflow-hidden rounded-xl px-3 py-3 transition-colors duration-500"
                >
                  {/* Liquid fill left-to-right */}
                  <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-cyan-400/[0.12] via-cyan-400/[0.05] to-transparent transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Left cyan indicator bar */}
                  <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 ease-out group-hover:h-[70%]" />

                  {/* Index number */}
                  <span className="relative z-10 mt-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-600 transition-colors duration-300 group-hover:text-cyan-400">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-white">
                        {child.label}
                      </h4>
                      <ArrowUpRight
                        size={12}
                        className="text-slate-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-cyan-400"
                      />
                    </div>

                    {child.description && (
                      <p className="mt-1 text-[11px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                        {child.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;