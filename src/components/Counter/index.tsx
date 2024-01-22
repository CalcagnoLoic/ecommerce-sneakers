import { useBasketContext } from "../../hooks/useBasketContext";

import Paragraph from "../../typographies/Paragraph";
import QuantityIcons from "../../Icons/QuantityIcons";

const Component = () => {
  const { counter, addItemToBasket, removeItemToBasket } = useBasketContext();

  return (
    <div className="counter-wrapper">
      <button
        onClick={() => {
          removeItemToBasket();
        }}
      >
        <QuantityIcons kind="minus" />
      </button>

      <Paragraph kind="span" content={counter} css="px-3" />

      <button
        onClick={() => {
          addItemToBasket();
        }}
      >
        <QuantityIcons kind="plus" />
      </button>
    </div>
  );
};

export default Component;
