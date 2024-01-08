import { useState, useEffect, useRef } from "react";
import { modalProps } from "../../../types/types";
import { images } from "../../../data";

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

  useEffect(() => {
    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      handleBodyOverflow(true);
    } else {
      handleBodyOverflow(false);
    }

    if (showModal) {
      document.body.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.removeEventListener("mousedown", handleClickOutside);
    }

    return (): void => {
      handleBodyOverflow(false);
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  if (window.innerWidth < 1024) return null;

  return (
    <>
      <OpacityWrapper></OpacityWrapper>
      <CarrouselWrapper forwardedRef={modalRef}>
        <div className="absolute left-1/2 top-20 -mt-16 -translate-x-1/2">
          <CloseIcon
            img={CLOSE_MODAL}
            classname="icon-close"
            handleClick={() => {
              console.log("Fermeture de la modale en cours...");
              onClose();
            }}
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
