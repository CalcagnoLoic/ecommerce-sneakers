import { Price } from "../../types/types";

const Component: React.FC<Price> = ({
  isOnSale,
  price,
}: {
  isOnSale: boolean;
  price: string;
}) => <p className={`${isOnSale ? "soldout-price" : "price"}`}>{price}</p>;

export default Component;
