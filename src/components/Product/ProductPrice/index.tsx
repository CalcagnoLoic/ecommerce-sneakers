import Paragraph from "../../../typographies/Paragraph";

type Price = {
  isOnSale?: boolean;
  price: string;
};

const Component: React.FC<Price> = ({ isOnSale = false, price }) => (
  <Paragraph
    kind="span"
    css={`
      ${isOnSale ? "soldout-price" : "price"}
    `}
    content={price}
  />
);

export default Component;
