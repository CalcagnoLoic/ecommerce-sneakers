import { namesItems } from "../../../data";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

import NavItem from "../../NavItem";
import NavItemLayout from "../../../layouts/NavItemLayout";

type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

type NavBar = {
  key: string;
  id: number;
  content: string;
  href: string;
};

const Component: React.FC<stateProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLUListElement>(null);

  useClickOutside({
    ref: sidebarRef,
    callback: () => setIsOpen(false),
  });

  return (
    <div className={`${isOpen ? "relative lg:hidden" : "hidden"}`}>
      <div className="navbar-wrapper w-screen bg-black opacity-80"></div>
      <NavItemLayout
        css={`
          ${isOpen ? "nav-item-dropdown" : "nav-item-content"}
        `}
        forwardedRef={sidebarRef}
      >
        {namesItems.map((item: NavBar) => (
          <NavItem
            content={item.content}
            classname="link-nav"
            href={item.href}
            id={item.id}
            key={item.key}
          />
        ))}
      </NavItemLayout>
    </div>
  );
};

export default Component;
