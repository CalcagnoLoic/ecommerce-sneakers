import { carrouselImage, Arrow } from "../../../types/types";

import ButtonWrapper from "../../../Layout/ButtonArrowWrapper";
import ArrowIcon from "../../IconContent";

import ARROW_RIGHT from "/assets/img/icon-next.svg";

const Component: React.FC<Arrow> = ({
  index,
  handleClick,
  images,
  arrowClass,
}: {
  index: number;
  handleClick: () => void;
  images?: carrouselImage[];
  arrowClass: string;
}) => {
  if (images) {
    const nextConditionnal: string =
      index === images.length - 1 ? "hidden" : "";

    return (
      <ButtonWrapper
        additionnalClass={`right-4 ${arrowClass} ${nextConditionnal}`}
        handleClick={handleClick}
      >
        <ArrowIcon img={ARROW_RIGHT} classname="arrow-position " />
      </ButtonWrapper>
    );
  }

  return null;
};

export default Component;
