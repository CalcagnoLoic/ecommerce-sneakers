import { carrouselImage } from "../../types/types";

type argumentType = {
  index: number;
  images: carrouselImage[];
  callback: (newValue: number) => void;
};

export const goToNextProduct = ({
  index,
  images,
  callback
}: argumentType) => {
  const newIndex = index + 1 < images.length ? index + 1 : 0;
  callback(newIndex);
};
