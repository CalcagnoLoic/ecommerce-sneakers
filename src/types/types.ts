export type Arrow = {
  index: number;
  handleClick: () => void;
  images?: carrouselImage[];
  arrowClass: string;
};

export type NavBar = {
  key: string;
  id: number;
  content: string;
  href: string;
};

export type Icon = {
  img: string;
  classname?: string;
  handleClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

export type Message = {
  name: string;
};

export type Price = {
  isOnSale: boolean;
  price: string;
};

export type Text = {
  tag?: string;
  text: string | number | React.ReactNode;
  classname: string;
};

export type Link = {
  content: string;
  classname?: string;
  href: string;
  id?: number;
};

export type thumbnailsProps = {
  src: string;
  additionnalClass?: string;
};

export type dropdownProps = {
  isOpen: boolean;
  forwardedRef: React.RefObject<HTMLDivElement>;
};

export type dropdownPropsIcon = {
  isOpen: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type carrouselItem = {
  content: string;
  id: number;
  additionnalClass?: string;
};

export type carrouselImage = {
  id: number;
  value: string;
  key: string;
};

export type modalProps = {
  onClose: (e: React.MouseEvent<HTMLImageElement>) => void;
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};

export type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

export type wrapperUniqueChildren = {
  children: JSX.Element;
};

export type Wrapper = {
  children: JSX.Element[];
};

export type wrapperRef = {
  children: JSX.Element[];
  forwardedRef: React.LegacyRef<HTMLDivElement>;
};

export type wrapperRefCarrousel = {
  forwardedRef: React.RefObject<HTMLDivElement>;
  children: JSX.Element;
};

export type wrapperBtn = {
  additionnalClass: string;
  handleClick: () => void;
  children: JSX.Element;
};

export type wrapperDropdownMenu = {
  isOpen: boolean;
  children: JSX.Element[];
};

export type wrapperNavItem = {
  children: React.ReactNode;
  isDropdown: boolean;
  forwardedRef?: React.RefObject<HTMLDivElement>;
};
