import ButtonWrapper from "../../Layout/ButtonWrapper";
import IconCart from "../IconContent/index.tsx";
import ButtonText from "../Texts/index.tsx";

import CART_ICON from "/assets/img/icon-cart-button.svg";

const Component = () => (
  <ButtonWrapper>
    <IconCart img={CART_ICON} classname="icon-to-cart mr-5" />
    <ButtonText tag="p" text="Add to cart" classname="button-text" />
  </ButtonWrapper>
);

export default Component;
