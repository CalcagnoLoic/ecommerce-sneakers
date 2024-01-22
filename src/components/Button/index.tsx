import { useBasketContext } from "../../hooks/useBasketContext";

import BasketIcons from "../../Icons/BasketIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { copyQuantity } = useBasketContext();

  return (
    <div className="button-wrapper" onClick={() => copyQuantity()}>
      <BasketIcons color="light" css="icon-to-cart mr-5" />
      <Paragraph kind="span" content="Add to Cart" css="button-text" />
    </div>
  );
};
export default Component;
