import { Arrow } from "../../../types/types";

import ButtonWrapper from "../../../Layout/ButtonArrowWrapper";
import ArrowIcon from "../../IconContent";

import ARROW_LEFT from "/assets/img/icon-previous.svg";

const Component: React.FC<Arrow> = ({
  index,
  handleClick,
  arrowClass,
}: {
  index: number;
  handleClick: () => void;
  arrowClass: string;
}) => {
  const previousConditionnal: string = index === 0 ? "hidden" : "";

  return (
    <ButtonWrapper
      additionnalClass={`left-4 ${arrowClass} ${previousConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcon img={ARROW_LEFT} classname="arrow-position " />
    </ButtonWrapper>
  );
};

export default Component;
