import { useState, useEffect, useRef } from "react";

import DropdownMenuIcon from "../DropdownMenuIcon";
import DropdownMenuContent from "../DropdownMenuContent";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickClose = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout | number = 0;

    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

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
      handleBodyOverflow(true);
      document.body.addEventListener("mousedown", handleClickOutside);
    } else {
      handleBodyOverflow(false);
      document.body.removeEventListener("mousedown", handleClickOutside);
    }

    return (): void => {
      handleBodyOverflow(false);
      document.body.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeOut);
    };
  }, [isOpen]);

  return (
    <>
      <DropdownMenuContent isOpen={isOpen} setIsOpen={setIsOpen} />

      <DropdownMenuIcon isOpen={isOpen} handleClick={handleClickClose} />
    </>
  );
};

export default Component;
