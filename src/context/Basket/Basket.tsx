import { createContext, useContext, useState } from "react";
import { BasketItem } from "../../types/interface";

interface BasketContext {
  basketItems: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeToBasket: () => void
}

export const BasketContext = createContext<BasketContext>({
  basketItems: [],
  addToBasket: () => {},
  removeToBasket: () => {}
});

export const useBasket = () => {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error("must have a contextProvider!!");
  }
  return context;
};

export const BasketProvider = ({ children }: { children: JSX.Element }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const addToBasket = (item: BasketItem) => {
    const isItemInBasket = basketItems.find(
      (basketItem) => basketItem.id === item.id,
    );

    if (isItemInBasket) {
      setBasketItems(
        basketItems.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem,
        ),
      );
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]);
    }
  };

  const removeToBasket = () => {
    setBasketItems([])
  }

  const contextValue: BasketContext = {
    basketItems,
    addToBasket,
    removeToBasket
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
