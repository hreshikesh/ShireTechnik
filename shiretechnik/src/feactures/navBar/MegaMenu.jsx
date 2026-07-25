import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu } from "lucide-react";

const MegaMenu = ({ menu }) => {
  return (
    <AnimatePresence>
      {menu?.children && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          // ⚠️ FIX: Changed mt-3 to pt-4 to create an invisible hover bridge so the mouse doesn't leave the container
          className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 z-50"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#070D18]/95 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-3xl">
            {/* Ambient Lighting Background Effect */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-600/15 blur-3xl" />

            <div className="relative grid grid-cols-12 gap-3 p-2">
              {/* Main Category Links */}
              <div className="col-span-7 space-y-1">
                <span className="mb-2 block px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {menu.label}
                </span>

                {menu.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.path || "#"}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-all duration-200 hover:bg-white/[0.06]"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                      <Cpu className="h-4 w-4 text-slate-400 transition-colors group-hover:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="flex items-center gap-1 text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                        {child.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400 line-clamp-1">
                        Advanced architecture & tailored platform services.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Featured Highlight Section */}
              <div className="col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-4">
                <div>
                  <span className="rounded-full bg-cyan-500/20 px-2.5 py-1 text-[10px] font-bold text-cyan-400">
                    FEATURED
                  </span>
                  <h5 className="mt-3 text-sm font-bold text-white">
                    Next-Gen Tech Architecture
                  </h5>
                  <p className="mt-1 text-xs text-slate-400">
                    Explore how our custom frameworks optimize scale.
                  </p>
                </div>

                <Link
                  to="#"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
                >
                  Read Whitepaper &rarr;
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;