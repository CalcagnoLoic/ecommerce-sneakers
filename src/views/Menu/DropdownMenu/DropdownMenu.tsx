import { useState, useEffect, useRef } from "react";
import { names_navbar, NavBar } from "../../../data/data.js";

import MENU_ICON from "/assets/img/icon-menu.svg";
import MENU_ICON_CLOSE from "/assets/img/icon-close.svg";
import LOGO from "/assets/img/logo.svg";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickClose = (): void => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    isOpen ? handleBodyOverflow(true) : handleBodyOverflow(false);
    isOpen
      ? document.body.addEventListener("mousedown", handleClickOutside)
      : document.body.removeEventListener("mousedown", handleClickOutside);

    return (): void => {
      handleBodyOverflow(false);
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${isOpen ? "sidebar relative lg:hidden" : "hidden"}`}>
        <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
        <div
          className="wrapper-navbar ml-[-24px] flex flex-col gap-5 bg-white pl-7 pr-24 pt-28"
          ref={sidebarRef}
        >
          {names_navbar.map((elem: NavBar) => (
            <a href="#" className="link-nav" key={elem.id}>
              {elem.value}
            </a>
          ))}
        </div>
      </div>

      <div className="z-30 flex flex-grow items-center justify-start">
        <button onClick={handleClickClose}>
          <img
            src={isOpen ? MENU_ICON_CLOSE : MENU_ICON}
            alt="Menu"
            className="mr-4 cursor-pointer md:mr-6 lg:hidden"
          />
        </button>

        <img src={LOGO} alt="E-commerce sneakers" />
      </div>
    </>
  );
};
