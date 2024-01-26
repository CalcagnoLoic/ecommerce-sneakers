import { render, screen } from "@testing-library/react";
import Counter from ".";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { BasketProvider } from "../../context/Basket/BasketContext";

describe("Counter Component Suite Test", () => {
  it("should be modify the counter value if user click on quantity button", async () => {
    const setOnClicMock = vi.fn();

    render(
      <BasketProvider>
        <Counter onClick={setOnClicMock} quantity={0} />
      </BasketProvider>,
    );

    expect(setOnClicMock()).toHaveBeenCalledWith("add");

    const counterText = await screen.findByRole("paragraph", { name: "1" });
    expect(counterText).toBeInTheDocument();
  });
});
