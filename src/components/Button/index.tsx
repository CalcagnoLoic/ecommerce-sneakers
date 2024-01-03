import ButtonWrapper from "../../Layout/ButtonWrapper";
import CART_ICON from "/assets/img/icon-cart-button.svg";
import IconCart from "../IconContent/index.tsx";

const Component = () => (
  <ButtonWrapper>
    <IconCart img={CART_ICON} classname="icon-to-cart mr-5" />
    <p className="self-center text-white ">Add to cart</p>
  </ButtonWrapper>
);

export default Component;
