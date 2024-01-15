import BasketIcons from "../../Icons/BasketIcons";
import ButtonWrapper from "../../Layout/ButtonWrapper";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <ButtonWrapper>
    <BasketIcons color="light" css="icon-to-cart mr-5" />
    <Paragraph content="Add to cart" css="button-text" />
  </ButtonWrapper>
);

export default Component;
