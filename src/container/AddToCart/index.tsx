import { useBasketContext } from "../../hooks/useBasketContext";
import { useState } from "react";

import BasketIcons from "../../Icons/BasketIcons";
import Button from "../../components/Button";
import Counter from "../../components/Counter";

const Component = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const { addToCart } = useBasketContext();

  const handleCounter = (kind: string) => {
    if (kind === "add") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    if (quantity >= 0) {
      addToCart(quantity);
    }
  };

  return (
    <div className="mt-8 flex flex-col lg:flex-row">
      <Counter onClick={handleCounter} quantity={quantity} />
      <Button
        onClick={handleSubmit}
        content="Add To Cart"
        icon={<BasketIcons color="light" css="icon-to-cart mr-5" />}
        css="button-wrapper"
      />
    </div>
  );
};

export default Component;
