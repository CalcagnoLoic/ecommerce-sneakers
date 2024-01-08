import { useState } from "react";
import { createPortal } from "react-dom";
import { images } from "../../../data";

import CarrouselModal from "../../Carrousel/CarrouselModal";
import CarrouselItem from "../../Carrousel/CarrouselItem";
import ArrowLeft from "../../ButtonArrow/ButtonArrowLeft";
import ArrowRigth from "../../ButtonArrow/ButtonArrowRight";

const Component: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setShowModal(false);
  };

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
      <div
        className="relative flex overflow-hidden md:w-[450px]"
        onClick={openModal}
      >
        {images.map((image, i: number) => (
          <CarrouselItem
            content={image.value}
            id={image.id}
            additionnalClass={i === index ? "" : "hidden"}
            key={image.key}
          />
        ))}
        {showModal &&
          createPortal(
            <CarrouselModal
              onClose={closeModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />,
            document.body,
          )}

        <ArrowLeft
          index={index}
          handleClick={goToPreviousProduct}
          arrowClass="arrow"
        />

        <ArrowRigth
          index={index}
          handleClick={goToNextProduct}
          images={images}
          arrowClass="arrow"
        />
      </div>
    </>
  );
};

export default Component;
