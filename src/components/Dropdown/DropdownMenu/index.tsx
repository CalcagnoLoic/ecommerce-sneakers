import { useState } from "react";
import { useBodyOverflow } from "../../../hooks/useBodyOverflow";

import DropdownMenuIcon from "../DropdownMenuIcon";
import DropdownMenuContent from "../DropdownMenuContent";

const Component: React.FC = () => {
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
