import { useState } from "react";
import { CarrouselProps } from "../../types/types";
import ARROW_LEFT from "/assets/img/icon-previous.svg";
import ARROW_RIGHT from "/assets/img/icon-next.svg";

export const ProductCarrousel: React.FC<CarrouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const goToNextProduct = (): void => {
    const newIndex = index + 1 < images.length ? index + 1 : 0;
    setIndex(newIndex);
  };

  const goToPreviousProduct = (): void => {
    const newIndex = index - 1 >= 0 ? index - 1 : images.length - 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div className="relative flex overflow-hidden md:w-[450px]">
        {images.map((image, i) => (
          <img
            src={image.value}
            alt="Product slider"
            className={`md:h-[450px] md:rounded-xl ${
              i === index ? "" : "hidden"
            }`}
            key={image.id}
          />
        ))}

        <div
          className={`arrow left-4 ${index === 0 ? "hidden" : ""}`}
          onClick={goToPreviousProduct}
        >
          <img
            src={ARROW_LEFT}
            alt="Arrow left for previous product"
            className="h-4 w-2"
          />
        </div>
        <div
          className={`arrow right-4 ${
            index === images.length - 1 ? "hidden" : ""
          }`}
          onClick={goToNextProduct}
        >
          <img
            src={ARROW_RIGHT}
            alt="Arrow right for next product"
            className="h-4 w-2"
          />
        </div>
      </div>
    </>
  );
};
