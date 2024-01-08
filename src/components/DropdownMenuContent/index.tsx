import { v4 as uuidv4 } from "uuid";
import { NavBar, stateProps } from "../../types/types";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import DropdownMenuContentWrapper from "../../Layout/DropdownMenuContent";
import NavItem from "../Link";
import { useRef, useEffect } from "react";

const namesItems: NavBar[] = [
  { content: "Collection", href: "#", id: 1, key: uuidv4() },
  { content: "Men", href: "#", id: 2, key: uuidv4() },
  { content: "Women", href: "#", id: 3, key: uuidv4() },
  { content: "About", href: "#", id: 4, key: uuidv4() },
  { content: "Contact", href: "#", id: 5, key: uuidv4() },
];

const Component: React.FC<stateProps> = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeOut: NodeJS.Timeout | number = 0;

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        timeOut = setTimeout(() => {
          setIsOpen(false);
        }, 500);
      }
    };

    if (isOpen) {
      document.body.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.removeEventListener("mousedown", handleClickOutside);
    }

    return (): void => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeOut);
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
