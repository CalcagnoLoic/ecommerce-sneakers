export interface useClickOutsideType {
  ref: React.RefObject<HTMLDivElement>;
  callback: () => void;
}

export interface useModalType extends useClickOutsideType {
  state: boolean;
  callback: (newValue?: boolean) => void;
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
