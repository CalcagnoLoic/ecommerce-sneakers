import ArrowIcon from "../IconContent";
import ButtonWrapper from "../../Layout/ButtonArrowWrapper";

import ARROW_RIGHT from "/assets/img/icon-next.svg";

type CarrouselImage = {
  id: number;
  value: string;
};

const Component = ({
  index,
  handleClick,
  images,
  arrowClass,
}: {
  index: number;
  handleClick: () => void;
  images: CarrouselImage[];
  arrowClass: string;
}) => {
  const nextConditionnal = index === images.length - 1 ? "hidden" : "";
  return (
    <ButtonWrapper
      additionnalClass={`right-4 ${arrowClass} ${nextConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcon img={ARROW_RIGHT} classname="h-4 w-2" />
    </ButtonWrapper>
  );
};

export default Component;
