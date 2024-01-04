import ArrowIcon from "../IconContent";
import ButtonWrapper from "../../Layout/ButtonArrowWrapper";

import ARROW_LEFT from "/assets/img/icon-previous.svg";

const Component = ({
  index,
  handleClick,
  arrowClass,
}: {
  index: number;
  handleClick: () => void;
  arrowClass: string;
}) => {
  const previousConditionnal = index === 0 ? "hidden" : "";

  return (
    <ButtonWrapper
      additionnalClass={`left-4 ${arrowClass} ${previousConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcon img={ARROW_LEFT} classname="h-4 w-2" />
    </ButtonWrapper>
  );
};

export default Component;
