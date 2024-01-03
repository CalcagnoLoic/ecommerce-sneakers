export type CarrouselImage = {
  id: number;
  value: string;
};



export type modalProps = {
  onClose: () => void;
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};
