import { useState } from "react";
import { useBodyOverflow } from "../../../hooks/useBodyOverflow";

import DropdownMenuContent from "../DropdownMenuContent";
import DropdownMenuIcon from "../DropdownMenuIcon";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useBodyOverflow(isOpen);

  return (
    <>
      <DropdownMenuContent isOpen={isOpen} setIsOpen={setIsOpen} />

      <DropdownMenuIcon isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};

export default Component;
