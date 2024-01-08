import { useRef, useEffect } from "react";
import { NavBar, stateProps } from "../../../types/types";
import { namesItems } from "../../../data";

import NavItemWrapper from "../../../Layout/NavItemWrapper";
import DropdownMenuContentWrapper from "../../../Layout/DropdownMenuContent";
import NavItem from "../../Link";

const Component: React.FC<stateProps> = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    isOpen
      ? document.body.addEventListener("click", handleClickOutside)
      : document.body.removeEventListener("click", handleClickOutside);

    return (): void => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <DropdownMenuContentWrapper isOpen={isOpen}>
      <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
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
