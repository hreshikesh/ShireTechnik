import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NavItem = ({ item, activeMenu, onHover }) => {
  const hasChildren = Boolean(item.children?.length);
  const isOpen = activeMenu?.label === item.label;

  return (
    <div
      className="relative"
      onMouseEnter={() => onHover(item)}
    >
      {item.path ? (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-cyan-500/10 text-cyan-400"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ) : (
        <button
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
            isOpen
              ? "bg-white/10 text-white"
              : "text-slate-300 hover:bg-white/5 hover:text-white"
          }`}
        >
          {item.label}
          {hasChildren && (
            <ChevronDown
              size={15}
              className={`text-slate-400 transition-transform duration-300 ${
                isOpen ? "rotate-180 text-cyan-400" : ""
              }`}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default NavItem;