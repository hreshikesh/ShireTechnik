import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, LogOut, LogIn } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/images/logo/logoModel.webp";

const Navbar = () => {
  const { user, logout, openLogin } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
      <nav
        className={`relative mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "h-16 border-white/[0.08] bg-[#071019]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:h-[70px]"
            : "h-16 border-white/[0.04] bg-[#05080d]/50 backdrop-blur-md sm:h-20"
        }`}
      >
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          {/* Logo icon (globe only) */}
          <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
            <img
              src={Logo}
              alt="Shiretechnik"
              className="h-10 w-auto object-contain sm:h-11 lg:h-12"
            />
          </div>

          {/* Brand text */}
          <div className="hidden flex-col leading-none sm:flex">
            <span
              className="text-[19px] font-bold tracking-wide text-[#2AB5C0] sm:text-[21px]"
              style={{
                fontFamily: "'Kalam', cursive",
                textShadow: "0 0 22px rgba(42,181,192,0.28)",
                letterSpacing: "0.03em",
              }}
            >
              SHIRETECHNIK
            </span>
            <span
              className="mt-0.5 text-[10px] font-semibold tracking-wide text-[#F5A02B] sm:text-[11px]"
              style={{
                fontFamily: "'Kalam', cursive",
                textShadow: "0 0 12px rgba(245,160,43,0.25)",
              }}
            >
              SHape Your Idea To Reality
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <DesktopMenu />

        {/* Desktop auth + CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {user ? (
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#05080d] p-1.5 pl-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                  <User size={14} />
                </div>
                <span className="max-w-[100px] truncate text-xs font-medium text-white">
                  {user.name}
                </span>
              </div>
              <button
                onClick={logout}
                title="Logout"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.06] text-red-400 transition hover:bg-red-500/[0.12]"
              >
                <LogOut size={13} />
              </button>
            </div>
          ) : (
            <button
              onClick={openLogin}
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#05080d] px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-cyan-400/20 hover:text-white"
            >
              <LogIn size={15} className="text-cyan-400" />
              Login
            </button>
          )}

          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
          >
            Get Quote
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;