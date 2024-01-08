import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { stateProps } from "../../types/types";

import BasketWrapper from "../../Layout/BasketModalWrapper";
import Line from "../Line";
import BasketContent from "../Texts";
import Text from "../Texts";

const Component: React.FC<stateProps> = ({ setIsOpen }) => {
  const basketRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: basketRef,
    callback: () => {
      setIsOpen(false);
    },
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
