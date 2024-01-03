const Component = ({
  isOnSale,
  price,
}: {
  isOnSale: boolean;
  price: string;
}) => <p className={`${isOnSale ? "soldout-price" : "price"}`}>{price}</p>;

export default Component;
