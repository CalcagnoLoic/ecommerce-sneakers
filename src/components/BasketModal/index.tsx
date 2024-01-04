import { useRef, useEffect } from "react";
import { stateProps } from "../../types/types";

import BasketWrapper from "../../Layout/BasketModalWrapper";
import BasketContent from "../BasketModalContent";
import Line from "../Line";

const Component: React.FC<stateProps> = ({ isOpen, setIsOpen }) => {
  const basketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeOut: NodeJS.Timeout | number = 0;
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        basketRef.current &&
        !basketRef.current.contains(event.target as Node)
      ) {
        timeOut = setTimeout(() => {
          setIsOpen(false);
        }, 100);
      }
    };

    isOpen
      ? document.body.addEventListener("mousedown", handleClickOutside)
      : document.body.removeEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeOut);
    };
  });

  return (
    <BasketWrapper ref={basketRef}>
      <p className="font-bold">Cart</p>
      <Line />
      <BasketContent name="Your cart is empty." />
    </BasketWrapper>
  );
};

export default Component;
