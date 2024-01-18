export type Arrow = {
  index: number;
  handleClick: () => void;
  images?: carrouselImage[];
  direction: string;
  css: string;
};

export type Message = {
  content: string;
};

export type carrouselImage = {
  id: number;
  value: string;
  key: string;
};
