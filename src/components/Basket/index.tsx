import { useState } from "react";

import BasketDropdown from "../Dropdown/BasketDropdown";
import BasketIcons from "../../Icons/BasketIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick} className="relative">
        <div className="absolute -top-1 left-2 flex h-3 w-5 rounded-xl bg-pumpkin text-[10px] text-white justify-center">
          <Paragraph kind="span" content="0" css="self-center text-center" />
        </div>
        <BasketIcons color="dark" css="icon-basket" alt="Basket icon" />
      </div>

      {isOpen && <BasketDropdown isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
