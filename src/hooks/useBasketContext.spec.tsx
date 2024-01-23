import { BasketProvider } from "../context/Basket/BasketContext.tsx";
import { renderHook, act, render, screen } from "@testing-library/react";
import { useBasketContext } from "./useBasketContext.ts";

import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("useBasketContext Suite Test", () => {
  it("should display initial value for counter", () => {
    const result = renderHook(() => useBasketContext());
    const { counter } = result.result.current;

    expect(counter).toBe(0);
  });

  it("should be added 3 items into counter", () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <BasketProvider>{children}</BasketProvider>
    );
    const result = renderHook(() => useBasketContext(), { wrapper });
    const { addItemToBasket } = result.result.current;

    act(() => {
      addItemToBasket();
      addItemToBasket();
      addItemToBasket();
    });
    expect(result.result.current.counter).toBe(3);
  });

  it("should not decrement if the counter is equal to 0", () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <BasketProvider>{children}</BasketProvider>
    );
    const result = renderHook(() => useBasketContext(), { wrapper });
    const { removeItemToBasket } = result.result.current;

    act(() => {
      removeItemToBasket();
    });
    expect(result.result.current.counter).toBe(0);
  });

  it("should be modify the counter value if user click on quantity button", async () => {
    const { getByTestId } = render(
      <BasketProvider>
        <Counter />
      </BasketProvider>,
    );
    const quantityIconsPlus = getByTestId("plus-icon");
    const quantityIconsMinus = getByTestId("minus-icon");

    //Ajout de 2 items au compteur
    userEvent.click(quantityIconsPlus);
    userEvent.click(quantityIconsPlus);
    const counterText = await screen.findByText("2");
    expect(counterText).toBeInTheDocument();

    //Suppression d'1 item au compteur
    userEvent.click(quantityIconsMinus);
    const counterTextMinus = await screen.findByText("1");
    expect(counterTextMinus).toBeInTheDocument();

    /* const result = renderHook(() => useBasketContext(), { wrapper });
    const { addItemToBasket, removeItemToBasket } = result.result.current;

    act(() => {
      addItemToBasket();
      addItemToBasket();
    });
    expect(result.result.current.counter).toBe(2);

    act(() => {
      removeItemToBasket();
    });
    expect(result.result.current.counter).toBe(1); */
  });


});
