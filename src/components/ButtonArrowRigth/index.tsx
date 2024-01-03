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
}: {
  index: number;
  handleClick: () => void;
  images: CarrouselImage[];
}) => {
  const nextConditionnal = index === images.length - 1 ? "hidden" : "";
  return (
    <ButtonWrapper
      additionnalClass={`right-4 ${nextConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcon img={ARROW_RIGHT} classname="h-4 w-2" />
    </ButtonWrapper>
  );
};

export default Component
