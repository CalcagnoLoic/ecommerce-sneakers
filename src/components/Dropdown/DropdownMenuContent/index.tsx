import { useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { NavBar, stateProps } from "../../../types/types";
import { namesItems } from "../../../data";

import NavItemWrapper from "../../../Layout/NavItemWrapper";
import DropdownMenuContentWrapper from "../../../Layout/DropdownMenuContent";
import NavItem from "../../Link";

const Component: React.FC<stateProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: sidebarRef,
    callback: () => setIsOpen(false),
  });

  return (
    <DropdownMenuContentWrapper isOpen={isOpen}>
      <div className="navbar-wrapper w-screen bg-black opacity-80"></div>
      <NavItemWrapper isDropdown={true} forwardedRef={sidebarRef}>
        {namesItems.map((item: NavBar) => (
          <NavItem
            content={item.content}
            classname="link-nav"
            href={item.href}
            id={item.id}
            key={item.key}
          />
        ))}
      </NavItemWrapper>
    </DropdownMenuContentWrapper>
  );
};

export default Component;
