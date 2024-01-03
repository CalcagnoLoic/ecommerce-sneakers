export type CarrouselImage = {
  id: number;
  value: string;
};

export type stateProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

export type modalProps = {
  onClose: () => void;
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};
