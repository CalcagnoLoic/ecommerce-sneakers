import { createContext, Context, useState } from "react";

interface BasketContext {
  quantity: number;
  counter: number;
  addItemToBasket: () => void;
  removeItemToBasket: () => void;
  copyQuantity: () => void
  removeToBasket: () => void;
}

export const BasketContext: Context<BasketContext> = createContext({
  quantity: 0,
  counter: 0,
  addItemToBasket: () => {},
  removeItemToBasket: () => {},
  copyQuantity: () => {},
  removeToBasket: () => {},
});

export const BasketProvider = ({ children }: { children: JSX.Element }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  const addItemToBasket = () => {
    setCounter(counter + 1);
  };

  const removeItemToBasket = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const copyQuantity = () => {
    setQuantity(counter)
    setCounter(0)
  }

  const removeToBasket = () => {
    setQuantity(0);
  };

  const ContextValue: BasketContext = {
    quantity,
    counter,
    addItemToBasket,
    removeItemToBasket,
    copyQuantity,
    removeToBasket,
  };

  return (
    <BasketContext.Provider value={ContextValue}>
      {children}
    </BasketContext.Provider>
  );
};
