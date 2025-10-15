import { createContext } from "react";

export interface BasketContextType {
  quantity: number;
  addToCart: (quantity: number) => void;
  removeToBasket: () => void;
}

export const BasketContext = createContext<BasketContextType>({
  quantity: 0,
  addToCart: () => {},
  removeToBasket: () => {},
});
