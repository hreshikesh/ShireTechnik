import { useState } from "react";
import navigation from "./navigationData";
import NavItem from "./NavItem";
import MegaMenu from "./MegaMenu";

const DesktopMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div 
      className="hidden items-center gap-2 lg:flex"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {navigation.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          activeMenu={activeMenu}
          onHover={setActiveMenu}
        />
      ))}

      <MegaMenu menu={activeMenu} />
    </div>
  );
};

export default DesktopMenu;