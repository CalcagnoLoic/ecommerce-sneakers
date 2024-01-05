import { useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { carrouselImage } from "../../types/types";

import CarrouselModal from "../CarrouselModal";
import CarrouselItem from "../CarrouselItem";
import ArrowLeft from "../ButtonArrowLeft";
import ArrowRigth from "../ButtonArrowRigth";

const images: carrouselImage[] = [
  { id: 1, value: "/assets/img/product-1.jpg", key: uuidv4() },
  { id: 2, value: "/assets/img/product-2.jpg", key: uuidv4() },
  { id: 3, value: "/assets/img/product-3.jpg", key: uuidv4() },
  { id: 4, value: "/assets/img/product-4.jpg", key: uuidv4() },
];

const Component: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
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
        {images.map((image, i) => (
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
