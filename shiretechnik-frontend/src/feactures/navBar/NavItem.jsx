import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NavItem = ({ item, isActive, onHover }) => {
  const hasChildren = item.children && item.children.length > 0;

  const baseClasses =
    "group relative flex items-center gap-1 overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-500";

  if (!hasChildren) {
    return (
      <Link
        to={item.path || "#"}
        onMouseEnter={() => onHover(null)}
        className={`${baseClasses} text-slate-300 hover:text-white`}
      >
        {/* Liquid fill — bottom to top */}
        <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-cyan-400/25 via-cyan-400/10 to-transparent transition-all duration-500 ease-out group-hover:h-full" />
        <span className="absolute inset-x-0 bottom-0 h-[1px] w-0 bg-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />

        <span className="relative z-10">{item.label}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onMouseEnter={() => onHover(item)}
      className={`${baseClasses} ${
        isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
      }`}
    >
      {/* Liquid fill */}
      <span
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-cyan-400/25 via-cyan-400/10 to-transparent transition-all duration-500 ease-out ${
          isActive ? "h-full" : "h-0 group-hover:h-full"
        }`}
      />
      <span
        className={`absolute inset-x-0 bottom-0 bg-cyan-400 transition-all duration-500 ease-out ${
          isActive ? "h-[1.5px] w-full" : "h-[1px] w-0 group-hover:w-full"
        }`}
      />

      <span className="relative z-10">{item.label}</span>
      <ChevronDown
        size={13}
        className={`relative z-10 transition-transform duration-300 ${
          isActive ? "rotate-180 text-cyan-400" : "text-slate-500"
        }`}
      />
    </button>
  );
};

export default NavItem;