import { Arrow } from "../../../types/types";

import ArrowIcons from "../../../Icons/ArrowIcons";

const Component: React.FC<Arrow> = ({
  index,
  handleClick,
  images,
  direction,
  css,
}) => {
  if (direction === "right" && images) {
    return (
      <div
        className={`${css} right-4 ${
          index === images.length - 1 ? "hidden" : ""
        }`}
        onClick={handleClick}
      >
        <ArrowIcons kind={"right"} />
      </div>
    );
  }
  return (
    <div
      className={`${css} left-4 ${index === 0 ? "hidden" : ""}`}
      onClick={handleClick}
    >
      <ArrowIcons kind="left" />
    </div>
  );
};

export default Component;
