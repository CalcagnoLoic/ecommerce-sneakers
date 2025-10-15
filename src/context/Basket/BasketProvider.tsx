import { useState } from "react";
import { BasketContext, BasketContextType } from "./BasketContext";

export const BasketProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  const addToCart = (quantity: number) => setQuantity(quantity);
  const removeToBasket = () => setQuantity(0);

  const value: BasketContextType = {
    quantity,
    addToCart,
    removeToBasket,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
