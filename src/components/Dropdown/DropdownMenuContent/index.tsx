import { namesItems } from "../../../data";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

import NavItem from "../../Link";

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
      <ul
        className={`${
          isOpen ? "nav-item--dropdown" : "hidden flex-grow self-center lg:flex"
        }`}
        ref={sidebarRef}
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
      </ul>
    </div>
  );
};

export default Component;
