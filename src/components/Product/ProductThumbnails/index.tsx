import { thumbnailsProps } from "../../../types/types";

const Component: React.FC<thumbnailsProps> = ({
  src,
  additionnalClass,
}: {
  src: string;
  additionnalClass?: string;
}) => (
  <img
    src={src}
    alt="PRODUCT_THUMBNAIL"
    className={`thumbnail ${additionnalClass}`}
  />
);

export default Component;
