import { useState, useEffect } from "react";

import DropdownMenuIcon from "../DropdownMenuIcon";
import DropdownMenuContent from "../DropdownMenuContent";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    isOpen ? handleBodyOverflow(true) : handleBodyOverflow(false);

    return (): void => {
      handleBodyOverflow(false);
    };
  }, [isOpen]);

  return (
    <>
      <DropdownMenuContent isOpen={isOpen} setIsOpen={setIsOpen} />

      <DropdownMenuIcon isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};

export default Component;
