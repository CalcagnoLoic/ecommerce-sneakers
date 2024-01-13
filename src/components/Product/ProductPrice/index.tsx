type Price = {
  isOnSale?: boolean;
  price: string;
};

const Component: React.FC<Price> = ({ isOnSale = false, price }) => (
  <p className={`${isOnSale ? "soldout-price" : "price"}`}>{price}</p>
);

export default Component;
