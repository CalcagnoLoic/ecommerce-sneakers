import { createPortal } from "react-dom";
import { goToPreviousProduct } from "../../../utils/goToPreviousProduct";
import { goToNextProduct } from "../../../utils/goToNextProduct";
import { images } from "../../../data";
import { useState } from "react";

import ButtonArrow from "../../Button/ButtonArrow";
import CarrouselItem from "../../Carrousel/CarrouselItem";
import CarrouselModal from "../../Carrousel/CarrouselModal";

const Component = () => {
  const [index, setIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const closeModal = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(false);
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

        <ButtonArrow
          index={index}
          direction="left"
          handleClick={() =>
            goToPreviousProduct({ index, images, callback: setIndex })
          }
          css="arrow"
        />
        <ButtonArrow
          index={index}
          direction="right"
          handleClick={() =>
            goToNextProduct({ index, images, callback: setIndex })
          }
          images={images}
          css="arrow"
        />
      </div>
    </>
  );
};

export default Component;
