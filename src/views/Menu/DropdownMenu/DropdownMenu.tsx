import { useState, useEffect } from "react";
import { names_navbar, NavBar } from "../../../data/data.js";

import MENU_ICON from "/assets/img/icon-menu.svg";
import MENU_ICON_CLOSE from "/assets/img/icon-close.svg";
import LOGO from "/assets/img/logo.svg";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const sidebar = document.querySelector(".sidebar");

      if (!isOpen && sidebar && !sidebar.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "visible";
      document.removeEventListener("click", handleClickOutside);
    }
    return (): void => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <>
      <div className={`${isOpen ? "sidebar relative lg:hidden" : "hidden"}`}>
        <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
        <div className="wrapper-navbar ml-[-24px] flex flex-col gap-5 bg-white pl-7 pr-24 pt-28">
          {names_navbar.map((elem: NavBar) => (
            <a href="#" className="link-nav" key={elem.id}>
              {elem.value}
            </a>
          ))}
        </div>
      </div>

      <div className="z-30 flex flex-grow items-center justify-start">
        <div onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? MENU_ICON_CLOSE : MENU_ICON}
            alt="Menu"
            className="mr-4 cursor-pointer md:mr-6 lg:hidden"
          />
        </div>

        <img src={LOGO} alt="E-commerce sneakers" />
      </div>
    </>
  );
};
