import { goToPreviousProduct } from "../../../utils/goToPreviousProduct";
import { goToNextProduct } from "../../../utils/goToNextProduct";
import { images } from "../../../data";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { useState, useRef } from "react";

import ButtonArrow from "../../Button/ButtonArrow";
import CarrouselItem from "../CarrouselItem";
import CloseIcon from "../../../Icons/CloseIcon";
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

  useCloseModal({
    ref: modalRef,
    state: showModal,
    callback: setShowModal,
  });

  if (window.innerWidth < 1024) return null;

  return (
    <>
      <div className="opacity-wrapper"></div>
      <div
        className="carrousel-modal-wrapper"
        ref={modalRef}
        data-testid="carrousel-element"
      >
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

            <ButtonArrow
              index={index}
              direction="left"
              handleClick={() =>
                goToPreviousProduct({ index, images, callback: setIndex })
              }
              css="arrow-carrousel"
            />
            <ButtonArrow
              index={index}
              direction="right"
              handleClick={() =>
                goToNextProduct({ index, images, callback: setIndex })
              }
              images={images}
              css="arrow-carrousel"
            />
          </div>

          <div>
            <ProductThumbnails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
