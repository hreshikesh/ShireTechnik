import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../../shared/Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300">
      <Container>
        <nav
          className={`relative flex items-center justify-between rounded-2xl border px-6 transition-all duration-500 ${
            scrolled
              ? "h-16 border-white/15 bg-[#070D18]/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-2xl"
              : "h-20 border-white/5 bg-[#09131F]/40 backdrop-blur-md"
          }`}
        >
          {/* Brand Logo */}
          <a href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070D18]">
                <Sparkles className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wider text-white">
                SHIRE<span className="text-cyan-400">TECHNIK</span>
              </h2>
              <p className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                Engineering Solutions
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Header Action Button (Desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;