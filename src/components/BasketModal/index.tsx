import { useRef, useEffect } from "react";
import { stateProps } from "../../types/types";

import BasketWrapper from "../../Layout/BasketModalWrapper";
import Line from "../Line";
import BasketContent from "../Texts";
import Text from "../Texts";

const Component: React.FC<stateProps> = ({ isOpen, setIsOpen }) => {
  const basketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        basketRef.current &&
        !basketRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    isOpen
      ? document.body.addEventListener("click", handleClickOutside)
      : document.body.removeEventListener("click", handleClickOutside);

    return (): void => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <BasketWrapper forwardedRef={basketRef}>
      <Text tag="p" text="Cart" classname="font-bold" />
      <Line />
      <BasketContent
        tag="h2"
        text="Your cart is empty."
        classname="basket-message"
      />
    </BasketWrapper>
  );
};

export default Component;
