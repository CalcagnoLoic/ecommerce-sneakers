import { useContext } from "react";
import { BasketContext } from "../context/Basket/BasketContext";

export const useBasketContext = () => {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error("useBasketContext must be have a BasketProvider");
  }

  return context;
};
