import { createContext, Context, useState } from "react";

interface BasketContext {
  quantity: number;
  addToCart: (quantity: number) => void;
  removeToBasket: () => void;
}

export const BasketContext: Context<BasketContext> = createContext({
  quantity: 0,
  addToCart: (quantity) => {
    console.log(quantity);
  },
  removeToBasket: () => {},
});

export const BasketProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  const addToCart = (quantity: number) => {
    setQuantity(quantity);
  };

  const removeToBasket = () => {
    setQuantity(0);
  };

  const ContextValue: BasketContext = {
    quantity,
    addToCart,
    removeToBasket,
  };

  return (
    <BasketContext.Provider value={ContextValue}>
      {children}
    </BasketContext.Provider>
  );
};
