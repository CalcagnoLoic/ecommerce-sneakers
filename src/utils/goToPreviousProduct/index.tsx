import { carrouselImage } from "../../types/types";

type argumentType = {
  index: number;
  images: carrouselImage[];
  callback: (newValue: number) => void;
};

export const goToPreviousProduct = ({
  index,
  images,
  callback,
}: argumentType): void => {
  const newIndex = index - 1 >= 0 ? index - 1 : images.length - 1;
  callback(newIndex);
};
