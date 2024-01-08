import { thumbnailsProps } from "../../../types/types";

const Component: React.FC<thumbnailsProps> = ({ src, additionnalClass }) => (
  <img
    src={src}
    alt="PRODUCT_THUMBNAIL"
    className={`thumbnail ${additionnalClass}`}
  />
);

export default Component;
