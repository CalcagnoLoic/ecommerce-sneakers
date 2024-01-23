import { useBasketContext } from "../../../hooks/useBasketContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

import BasketContent from "./BasketContent";
import Heading from "../../../typographies/Heading";
import Line from "../../Line";
import Paragraph from "../../../typographies/Paragraph";

type stateProps = {
  setIsOpen: (newValue: boolean) => void;
};

const Component: React.FC<stateProps> = ({ setIsOpen }) => {
  const { quantity } = useBasketContext();
  const basketRef = useRef<HTMLDivElement>(null);
  
  useClickOutside({
    ref: basketRef,
    callback: () => {
      setIsOpen(false);
    },
  });

  return (
    <div
      className="basket-dropdown-wrapper"
      ref={basketRef}
      data-testid="dropdown-basket"
    >
      <Paragraph kind="p" content="Cart" css="font-bold" />
      <Line />
      <div className="mt-12">
        {quantity === 0 ? (
          <Heading
            kind="h2"
            content="Your cart is empty."
            css="basket-message"
          />
        ) : (
          <BasketContent />
        )}
      </div>
    </div>
  );
};

export default Component;
