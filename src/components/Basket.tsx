import { useState } from "react";
import { BasketModal } from "../views/Modals/BasketModal/BasketModal";
import CART_ICON from "/assets/img/icon-cart.svg";

export const Basket: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick}>
        <img
          src={CART_ICON}
          alt="Cart"
          className="mr-5 h-[20px] w-[20px] cursor-pointer md:mr-11"
        />
      </div>

      {isOpen && <BasketModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
