import { carrouselImage, arrowRigthProps } from "../../types/types";

import ButtonWrapper from "../../Layout/ButtonArrowWrapper";
import ArrowIcon from "../IconContent";

import ARROW_RIGHT from "/assets/img/icon-next.svg";


const Component: React.FC<arrowRigthProps> = ({
  index,
  handleClick,
  images,
  arrowClass,
}: {
  index: number;
  handleClick: () => void;
  images: carrouselImage[];
  arrowClass: string;
}) => {
  const nextConditionnal: string = index === images.length - 1 ? "hidden" : "";

  return (
    <ButtonWrapper
      additionnalClass={`right-4 ${arrowClass} ${nextConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcon img={ARROW_RIGHT} classname="arrow-position " />
    </ButtonWrapper>
  );
};

export default Component;
