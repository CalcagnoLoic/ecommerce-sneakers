import { useRef, useEffect } from "react";
import { stateProps } from "../../types/types";

import BasketWrapper from "../../Layout/BasketModalWrapper";
import Line from "../Line";
import BasketContent from "../Text";
import Text from "../Text";

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
