import { BasketProvider } from "../../../context/Basket/BasketContext";
import { render } from "@testing-library/react";
import { vi } from "vitest";

import BasketDropdown from "./index";
import "@testing-library/jest-dom";
//import Counter from "../../../components/Counter";
import userEvent from "@testing-library/user-event";

describe("Basket Dropdown Suite Test", () => {
  it("should be display the basket content with none", () => {
    const { getByText } = render(<BasketDropdown setIsOpen={() => {}} />);

    expect(getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("should close the dropdown basket if user clicks outside", () => {
    const setIsOpenMock = vi.fn();

    setIsOpenMock();

    render(
      <BasketProvider>
        <BasketDropdown setIsOpen={setIsOpenMock} />
      </BasketProvider>,
    );

    expect(setIsOpenMock).toHaveBeenCalledWith();
    userEvent.click(document.body);
    expect(setIsOpenMock).toHaveBeenCalledWith();
  });
});
