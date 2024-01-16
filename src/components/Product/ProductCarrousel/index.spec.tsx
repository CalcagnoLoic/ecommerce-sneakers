import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCarrousel from "./index";

describe("Product Carrousel Suite Test", () => {
  it("should be display the image product", () => {
    const { getByAltText } = render(<ProductCarrousel />);

    const productElement = getByAltText("Product slider 1");
    expect(productElement).toBeTruthy();
  });

  it("should be open the carrousel", () => {
    const { getByAltText, getByTestId } = render(<ProductCarrousel />);

    fireEvent.click(getByAltText("Product slider 1"));
    expect(getByTestId('carrousel-element')).toBeInTheDocument()
  });
});
