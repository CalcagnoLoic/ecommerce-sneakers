import { Price } from "../../../types/types";

const Component: React.FC<Price> = ({ isOnSale, price }) => (
  <p className={`${isOnSale ? "soldout-price" : "price"}`}>{price}</p>
);

export default Component;
