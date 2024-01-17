import BasketIcons from "../../Icons/BasketIcons";
import ButtonWrapper from "../../Layout/ButtonWrapper";

import { BasketContext } from "../../context/Basket/Basket";
import { useContext } from "react";
import { productItems } from "../../data";

const Component = () => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <ButtonWrapper>
      <BasketIcons color="light" css="icon-to-cart mr-5" />
      <button onClick={addToBasket(productItems)} className="button-text">
        Add to Cart
      </button>
    </ButtonWrapper>
  );
};
export default Component;
