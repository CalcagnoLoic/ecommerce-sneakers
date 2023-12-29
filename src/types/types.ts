export type CarrouselImage = {
  id: number;
  value: string;
};

export type CarrouselProps = {
  images: CarrouselImage[];
};

export type NavBar = {
  id: number;
  value: string;
};

export type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};
