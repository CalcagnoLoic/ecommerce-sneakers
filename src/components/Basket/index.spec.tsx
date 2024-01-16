import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Basket from "./index";

describe("Basket Suite Test", () => {
  it("should be display icon basket", () => {
    const { getByTitle } = render(<Basket />);

    const basketElement = getByTitle("Basket icon");
    expect(basketElement).toBeTruthy();
  });

  it("should be open the dropdown basket", () => {
    const { getByTitle, getByTestId } = render(<Basket />);

    fireEvent.click(getByTitle("Basket icon"));
    expect(getByTestId("dropdown-basket")).toBeInTheDocument();
  });
});
