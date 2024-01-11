import { useState, useRef } from "react";
import { modalProps } from "../../../types/types";
import { images } from "../../../data";
import { useModal } from "../../../hooks/useCloseModal";
import { useModalType } from "../../../types/interface";

import OpacityWrapper from "../../../Layout/OpacityWrapper";
import CarrouselWrapper from "../../../Layout/CarrouselModalWrapper";

import ArrowLeft from "../../ButtonArrow/ButtonArrowLeft";
import ArrowRight from "../../ButtonArrow/ButtonArrowRight";
import CarrouselItem from "../CarrouselItem";
import CloseIcon from "../../IconContent";
import ProductThumbnails from "../../Product/ProductThumbnailsContainer";

import CLOSE_MODAL from "/assets/img/icon-close-modal.svg";

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

  const modalParameters: useModalType = {
    ref: modalRef,
    state: showModal,
    callback: setShowModal,
  };

  useModal(modalParameters);

  if (window.innerWidth < 1024) return null;

  return (
    <>
      <OpacityWrapper></OpacityWrapper>
      <CarrouselWrapper forwardedRef={modalRef}>
        <div className="absolute left-1/2 top-20 -mt-16 -translate-x-1/2">
          <CloseIcon
            img={CLOSE_MODAL}
            classname="icon-close"
            handleClick={onClose}
          />

          <div className="relative flex overflow-hidden md:w-[450px]">
            {images.map((image, i: number) => (
              <CarrouselItem
                content={image.value}
                id={image.id}
                additionnalClass={i === index ? "" : "hidden"}
                key={image.key}
              />
            ))}

            <ArrowLeft
              index={index}
              handleClick={goToPreviousProduct}
              arrowClass="arrow-carrousel"
            />

            <ArrowRight
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
