import { useState, useContext } from "react";
import { BasketContext } from "../../context/Basket/BasketContext";

import BasketDropdown from "../Dropdown/BasketDropdown";
import BasketIcons from "../../Icons/BasketIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { quantity } = useContext(BasketContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick} className="relative">
        <div className={quantity === 0 ? "" : "quantity-message-wrapper"}>
          <Paragraph
            kind="span"
            content={quantity === 0 ? "" : quantity}
            css="self-center text-center"
          />
        </div>
        <BasketIcons color="dark" css="icon-basket" alt="Basket icon" />
      </div>

      {isOpen && <BasketDropdown setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
