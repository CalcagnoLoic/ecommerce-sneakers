import { Arrow } from "../../../types/types";

import ArrowIcons from "../../../Icons/ArrowIcons";
import ButtonWrapper from "../../../Layout/ButtonArrowWrapper";

const Component: React.FC<Arrow> = ({ index, handleClick, arrowClass }) => {
  const previousConditionnal: string = index === 0 ? "hidden" : "";

  return (
    <ButtonWrapper
      additionnalClass={`left-4 ${arrowClass} ${previousConditionnal}`}
      handleClick={handleClick}
    >
      <ArrowIcons kind="left" />
    </ButtonWrapper>
  );
};

export default Component;
