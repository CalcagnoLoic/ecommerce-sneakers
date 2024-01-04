import { useState, useEffect, useRef } from "react";
import { modalProps } from "../../types/types";
import ProductThumbnails from "../ProductThumbnailsContainer";
type CarrouselImage = {
  id: number;
  value: string;
};

const images: CarrouselImage[] = [
  { id: 1, value: "/assets/img/product-1.jpg" },
  { id: 2, value: "/assets/img/product-2.jpg" },
  { id: 3, value: "/assets/img/product-3.jpg" },
  { id: 4, value: "/assets/img/product-4.jpg" },
];
import CLOSE_MODAL from "/assets/img/icon-close-modal.svg";
import ARROW_LEFT from "/assets/img/icon-previous.svg";
import ARROW_RIGHT from "/assets/img/icon-next.svg";

export const CarrouselModal: React.FC<modalProps> = ({
  onClose,
  showModal,
  setShowModal,
}) => {
  const [index, setIndex] = useState(0);
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
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>
      <div className="absolute left-1/2 top-20 -translate-x-1/2" ref={modalRef}>
        <img
          src={CLOSE_MODAL}
          alt="Close modal"
          onClick={onClose}
          className="ml-[435px] cursor-pointer pb-6"
        />

        <div className="relative flex overflow-hidden md:w-[450px]">
          {images.map((image, i) => (
            <img
              src={image.value}
              alt="Product slider"
              className={`cursor-pointer md:h-[450px] md:rounded-xl ${
                i === index ? "" : "hidden"
              }`}
              key={image.id}
            />
          ))}
          <div
            className={`arrow-carrousel left-4 z-20 ${
              index === 0 ? "hidden" : ""
            }`}
            onClick={goToPreviousProduct}
          >
            <img
              src={ARROW_LEFT}
              alt="Arrow left for previous product"
              className="h-4 w-2"
            />
          </div>
          <div
            className={`arrow-carrousel right-4 ${
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

        <div>
          <ProductThumbnails />
        </div>
      </div>
    </>
  );
};
