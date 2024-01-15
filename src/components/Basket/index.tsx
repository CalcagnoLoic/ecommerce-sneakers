import { useState } from "react";

import BasketDropdown from "../Dropdown/BasketDropdown";
import BasketIcons from "../../Icons/BasketIcons";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick}>
        <BasketIcons color="dark" css="icon-basket" />
      </div>

      {isOpen && <BasketDropdown isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
