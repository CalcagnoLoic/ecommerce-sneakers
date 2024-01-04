export type carrouselItem = {
  content: string;
  id: number;
  additionnalClass?: string;
};

export type carrouselImage = {
  id: number;
  value: string;
};

export type modalProps = {
  onClose: () => void;
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};

export type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

export type arrowLeftProps = {
  index: number;
  handleClick: () => void;
  arrowClass: string;
}

export type arrowRigthProps = {
  index: number;
  handleClick: () => void;
  images: carrouselImage[];
  arrowClass: string;
};

export type NavBar = {
  id: number;
  content: string;
  href: string;
};

export type dropdownProps = {
  isOpen: boolean;
  forwardedRef: React.RefObject<HTMLDivElement>;
};

export type dropdownPropsIcon = {
  isOpen: boolean;
  handleClick: () => void;
};

export type Icon = {
  img: string;
  classname?: string;
  handleClick?: () => void;
};

export type Message = {
  name: string;
};

export type Price = {
  isOnSale: boolean;
  price: string;
};

export type thumbnailsProps = {
  src: string;
  additionnalClass?: string;
};
