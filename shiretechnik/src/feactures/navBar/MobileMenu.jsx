import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
import navigation from "./navigationData";
import Logo from "../../assets/images/logo/logoModel.webp";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const { user, logout, openLogin } = useAuth();

  const close = () => {
    setOpen(false);
    setExpandedItem(null);
  };

  const toggleExpand = (label) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Slide-in panel — use 100dvh for mobile browser bars */}
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col border-l border-white/[0.06] bg-[#05080d]"
              style={{ height: "100dvh" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Ambient bg glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

              {/* ========== HEADER ========== */}
              <div className="relative flex shrink-0 items-center justify-between border-b border-white/[0.06] px-4 py-3.5">
                <Link
                  to="/"
                  onClick={close}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src={Logo}
                    alt="Shiretechnik"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col leading-none">
                    <span
                      className="text-[14px] font-bold tracking-wide text-[#2AB5C0]"
                      style={{
                        fontFamily: "'Kalam', cursive",
                        letterSpacing: "0.02em",
                      }}
                    >
                      SHIRETECHNIK
                    </span>
                    <span
                      className="mt-0.5 text-[9px] font-semibold text-[#F5A02B]"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      SHape Your Idea To Reality
                    </span>
                  </div>
                </Link>

                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  <X size={18} />
                </button>
              </div>

              {/* ========== AUTH + CTA (top now, more visible) ========== */}
              <div className="relative shrink-0 border-b border-white/[0.06] bg-[#071019] px-4 py-3">
                {user ? (
                  <div className="mb-2.5 flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#05080d] px-3 py-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                        <User size={13} />
                      </div>
                      <span className="max-w-[140px] truncate text-xs font-medium text-white">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        close();
                      }}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.06] text-red-400 transition hover:bg-red-500/[0.12]"
                    >
                      <LogOut size={13} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      openLogin();
                      close();
                    }}
                    className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#05080d] py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                  >
                    <LogIn size={15} className="text-cyan-400" />
                    Login
                  </button>
                )}

                <Link
                  to="/contact"
                  onClick={close}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-2.5 text-sm font-semibold text-[#05080d] transition hover:bg-cyan-300"
                >
                  Get Quote
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* ========== NAV ITEMS (scrollable) ========== */}
              <nav
                className="relative min-h-0 flex-1 overflow-y-auto px-3 py-4"
                style={{ scrollbarWidth: "none" }}
              >
                <p className="mb-3 px-3 text-[10px] tracking-[0.25em] text-slate-600">
                  MENU
                </p>

                <div className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isExpanded = expandedItem === item.label;

                    return (
                      <Fragment key={item.label}>
                        {hasChildren ? (
                          <button
                            onClick={() => toggleExpand(item.label)}
                            className={`group relative flex w-full items-center justify-between overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                              isExpanded
                                ? "text-cyan-400"
                                : "text-slate-300 hover:text-white"
                            }`}
                          >
                            <span
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400/[0.12] via-cyan-400/[0.05] to-transparent transition-all duration-500 ease-out ${
                                isExpanded
                                  ? "w-full"
                                  : "w-0 group-hover:w-full"
                              }`}
                            />
                            <span
                              className={`absolute left-0 top-1/2 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 ease-out ${
                                isExpanded
                                  ? "h-[60%]"
                                  : "h-0 group-hover:h-[50%]"
                              }`}
                            />

                            <span className="relative z-10">{item.label}</span>
                            <ChevronDown
                              size={15}
                              className={`relative z-10 transition-transform duration-300 ${
                                isExpanded
                                  ? "rotate-180 text-cyan-400"
                                  : "text-slate-500"
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            to={item.path || "#"}
                            onClick={close}
                            className="group relative flex items-center justify-between overflow-hidden rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                          >
                            <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-cyan-400/[0.12] via-cyan-400/[0.05] to-transparent transition-all duration-500 ease-out group-hover:w-full" />
                            <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 ease-out group-hover:h-[50%]" />

                            <span className="relative z-10">{item.label}</span>
                            <ArrowRight
                              size={14}
                              className="relative z-10 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                            />
                          </Link>
                        )}

                        <AnimatePresence initial={false}>
                          {hasChildren && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 flex flex-col gap-0.5 border-l border-white/[0.06] pl-3 py-1">
                                {item.children.map((child, i) => (
                                  <Link
                                    key={child.label}
                                    to={child.path || "#"}
                                    onClick={close}
                                    className="group relative flex items-start gap-3 overflow-hidden rounded-lg px-3 py-2.5 transition-colors duration-300"
                                  >
                                    <span className="absolute inset-y-0 left-0 w-0 bg-cyan-400/[0.06] transition-all duration-500 ease-out group-hover:w-full" />

                                    <span className="relative z-10 mt-0.5 font-mono text-[10px] font-semibold text-slate-600 transition-colors duration-300 group-hover:text-cyan-400">
                                      0{i + 1}
                                    </span>

                                    <div className="relative z-10 flex-1">
                                      <div className="flex items-center gap-1">
                                        <p className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                                          {child.label}
                                        </p>
                                        <ArrowUpRight
                                          size={11}
                                          className="text-slate-600 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-cyan-400"
                                        />
                                      </div>
                                      {child.description && (
                                        <p className="mt-0.5 text-[11px] leading-5 text-slate-600">
                                          {child.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Fragment>
                    );
                  })}
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;