export interface useClickOutsideInterface {
  ref: React.RefObject<HTMLDivElement>;
  callback?: (newValue: boolean) => void;
}

export interface useModalInterface extends useClickOutsideInterface {
  state: boolean;
}

export interface Wrapper {
  children: JSX.Element[] | JSX.Element;
  forwardedRef?: React.RefObject<HTMLDivElement>;
}

export interface wrapperBtn extends Wrapper {
  additionnalClass: string;
  handleClick: () => void;
}

export interface wrapperDropdownMenu extends Wrapper {
  isOpen: boolean;
}

export interface wrapperNavItem extends Wrapper {
  isDropdown: boolean;
}

export interface BasketItem {
  id: string;
  name: string
  quantity: number;
}