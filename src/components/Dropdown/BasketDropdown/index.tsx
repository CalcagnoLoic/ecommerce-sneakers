import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

import BasketWrapper from "../../../Layout/BasketDropdownWrapper";
import Heading from "../../../typographies/Heading";
import Line from "../../Line";
import Paragraph from "../../../typographies/Paragraph";

type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};


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
      <Paragraph content="Cart" css="font-bold" />
      <Line />
      <Heading kind="h2" content="Your cart is empty." css="basket-message" />
    </BasketWrapper>
  );
};

export default Component;
