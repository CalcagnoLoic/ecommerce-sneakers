import { Arrow } from "../../../types/types";

import ArrowIcons from "../../../Icons/ArrowIcons";
import ButtonWrapper from "../../../Layout/ButtonArrowWrapper";

const Component: React.FC<Arrow> = ({
  index,
  handleClick,
  images,
  arrowClass,
}) => {
  if (images) {
    const nextConditionnal: string =
      index === images.length - 1 ? "hidden" : "";

    return (
      <ButtonWrapper
        additionnalClass={`right-4 ${arrowClass} ${nextConditionnal}`}
        handleClick={handleClick}
      >
        <ArrowIcons kind={"right"} />
      </ButtonWrapper>
    );
  }

  return null;
};

export default Component;
