import { images } from "../../../data";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { useState, useRef } from "react";

import ButtonArrowLeft from "../../ButtonArrow/ButtonArrowLeft";
import ButtonArrowRight from "../../ButtonArrow/ButtonArrowRight";
import CarrouselItem from "../CarrouselItem";
import CarrouselWrapper from "../../../Layout/CarrouselModalWrapper";
import CloseIcon from "../../../Icons/CloseIcon";
import OpacityWrapper from "../../../Layout/OpacityWrapper";
import ProductThumbnails from "../../Product/ProductThumbnailsContainer";

type modalProps = {
  onClose: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};

const Component: React.FC<modalProps> = ({
  onClose,
  showModal,
  setShowModal,
}) => {
  const [index, setIndex] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const goToNextProduct = (): void => {
    const newIndex = index + 1 < images.length ? index + 1 : 0;
    setIndex(newIndex);
  };

  const goToPreviousProduct = (): void => {
    const newIndex = index - 1 >= 0 ? index - 1 : images.length - 1;
    setIndex(newIndex);
  };

  useCloseModal({
    ref: modalRef,
    state: showModal,
    callback: setShowModal,
  });

  if (window.innerWidth < 1024) return null;

  return (
    <>
      <OpacityWrapper></OpacityWrapper>
      <CarrouselWrapper forwardedRef={modalRef}>
        <div className="absolute left-1/2 top-12 -mt-16 -translate-x-1/2">
          <CloseIcon css="icon-close" handleClick={onClose} />

          <div className="relative flex overflow-hidden md:w-[450px]">
            {images.map((image, i: number) => (
              <CarrouselItem
                content={image.value}
                id={image.id}
                additionnalClass={i === index ? "" : "hidden"}
                key={image.key}
              />
            ))}

            <ButtonArrowLeft
              index={index}
              handleClick={goToPreviousProduct}
              arrowClass="arrow-carrousel"
            />

            <ButtonArrowRight
              index={index}
              handleClick={goToNextProduct}
              images={images}
              arrowClass="arrow-carrousel"
            />
          </div>

          <div>
            <ProductThumbnails />
          </div>
        </div>
      </CarrouselWrapper>
    </>
  );
};

export default Component;
