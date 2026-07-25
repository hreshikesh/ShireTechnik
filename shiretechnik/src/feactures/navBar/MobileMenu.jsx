import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import navigation from "./navigationData";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Safely prevent background scroll with cleanup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // ⚠️ FIX: Extracted overlay to inject via React Portal to escape DOM parent trapping
  const mobileOverlay = (
    <AnimatePresence>
      {isOpen && (
        <div key="mobile-menu-wrapper" className="fixed inset-0 z-[99999]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-white/10 bg-[#070D18] p-6 shadow-2xl"
          >
            {/* Close Button inside Drawer */}
            <div className="flex justify-end pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto flex-1">
              {navigation.map((item, idx) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedIndex === idx;

                return (
                  <div key={item.label} className="border-b border-white/5 pb-2">
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-slate-200"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-cyan-400" : "text-slate-400"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden space-y-2 pl-4 pb-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path || "#"}
                                  onClick={() => setIsOpen(false)}
                                  className="block rounded-lg py-2 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path || "#"}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-base font-medium text-slate-200 hover:text-cyan-400"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 active:scale-95 transition-transform"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="block lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
        aria-label="Open Menu"
      >
        <Menu size={20} />
      </button>

      {/* Render the overlay into the document body */}
      {typeof document !== "undefined" && createPortal(mobileOverlay, document.body)}
    </div>
  );
};

export default MobileMenu;