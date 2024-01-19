export interface useClickOutsideInterface {
  ref: React.RefObject<HTMLUListElement | HTMLDivElement>;
  callback?: (newValue: boolean) => void;
}

export interface useModalInterface extends useClickOutsideInterface {
  state: boolean;
}
export interface BasketItem {
  id: string;
  name: string;
  quantity: number;
}
