import { useState, useRef, useCallback } from "react";
import navigation from "./navigationData";
import NavItem from "./NavItem";
import MegaMenu from "./MegaMenu";

const DesktopMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimerRef = useRef(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const startCloseTimer = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, [clearCloseTimer]);

  const handleNavHover = useCallback(
    (item) => {
      clearCloseTimer();
      setActiveMenu(item);
    },
    [clearCloseTimer]
  );

  const handleNavLeave = useCallback(() => {
    startCloseTimer();
  }, [startCloseTimer]);

  const handleMegaEnter = useCallback(() => {
    clearCloseTimer();
  }, [clearCloseTimer]);

  const handleMegaLeave = useCallback(() => {
    startCloseTimer();
  }, [startCloseTimer]);

  return (
    <div className="hidden lg:block">
      <div
        className="flex items-center gap-0.5"
        onMouseLeave={handleNavLeave}
      >
        {navigation.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            isActive={activeMenu?.label === item.label}
            onHover={handleNavHover}
          />
        ))}
      </div>

      <MegaMenu
        menu={activeMenu}
        onEnter={handleMegaEnter}
        onLeave={handleMegaLeave}
      />
    </div>
  );
};

export default DesktopMenu;