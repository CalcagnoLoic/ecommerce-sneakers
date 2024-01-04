import { useState } from "react";

import BasketModal from "../BasketModal";
import IconBasket from "../IconContent";

import CART_ICON from "/assets/img/icon-cart.svg";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick}>
        <IconBasket img={CART_ICON} classname="icon-basket" />
      </div>

      {isOpen && <BasketModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
