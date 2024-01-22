import { useBasketContext } from "../../../../hooks/useBasketContext";

import DeleteIcon from "../../../../Icons/DeleteIcon";
import Heading from "../../../../typographies/Heading";
import Paragraph from "../../../../typographies/Paragraph";
import PRODUCT_THUMBNAIL from "/assets/img/product-1-thumbnail.jpg";

const Component = () => {
  const { quantity, removeToBasket } = useBasketContext();
  const price: number = quantity * 125;

  return (
    <>
      <div className="flex justify-between">
        <img
          src={PRODUCT_THUMBNAIL}
          alt="PRODUCT_THUMBNAIL"
          className="h-12 w-12 rounded-md"
        />
        <section>
          <Heading
            kind="h2"
            css="text-paleSky capitalize"
            content="fall limited edition sneakers"
          />
          <Paragraph
            kind="span"
            css="text-paleSky"
            content={`$125.00 x ${quantity}`}
          />
          <Paragraph
            kind="span"
            css="font-bold ml-3"
            content={`$${price}.00`}
          />
        </section>
        <DeleteIcon handleClick={() => removeToBasket()} />
      </div>

      <button className="button-basket">Checkout</button>
    </>
  );
};

export default Component;
