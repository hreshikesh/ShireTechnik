import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  Mail,
  LogOut,
  Download,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/logo/logoModel.webp";

const navItems = [
  { to: "/admin", icon: Home, label: "Dashboard", end: true },
  { to: "/admin/users", icon: Users, label: "Users" },
  { to: "/admin/meetings", icon: Calendar, label: "Meetings" },
  { to: "/admin/contacts", icon: Mail, label: "Contacts" },
  { to: "/admin/downloads", icon: Download, label: "Downloads" },
];

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-white/[0.06] bg-[#071019]">
      {/* Top area */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-5">
          <img
            src={logo}
            alt="Shiretechnik"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-[15px] font-bold tracking-wide text-[#2AB5C0]"
              style={{
                fontFamily: "'Kalam', cursive",
                letterSpacing: "0.02em",
              }}
            >
              SHIRETECHNIK
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-3 py-5">
          <p className="mb-3 px-3 text-[10px] tracking-[0.25em] text-slate-600">
            MENU
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 overflow-hidden rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Liquid fill */}
                    <span
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400/[0.12] via-cyan-400/[0.05] to-transparent transition-all duration-500 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    {/* Left bar */}
                    <span
                      className={`absolute left-0 top-1/2 w-[2px] -translate-y-1/2 rounded-r bg-cyan-400 transition-all duration-500 ease-out ${
                        isActive ? "h-[60%]" : "h-0 group-hover:h-[50%]"
                      }`}
                    />

                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="relative z-10 shrink-0"
                    />
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-white/[0.06] p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/[0.12] hover:text-red-300"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;