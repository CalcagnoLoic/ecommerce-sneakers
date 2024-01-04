import { useState } from "react";
import BasketModal from "../BasketModal";
import IconCart from "../IconContent";
import CART_ICON from "/assets/img/icon-cart.svg";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div onClick={handleClick}>
        <IconCart
          img={CART_ICON}
          classname="mr-5 h-[20px] w-[20px] cursor-pointer md:mr-11"
        />
      </div>

      {isOpen && <BasketModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
