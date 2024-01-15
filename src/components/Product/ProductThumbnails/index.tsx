type thumbnailsProps = {
  src: string;
  additionnalClass?: string;
};

const Component: React.FC<thumbnailsProps> = ({ src, additionnalClass }) => (
  <img
    src={src}
    alt="PRODUCT_THUMBNAIL"
    className={`thumbnail ${additionnalClass}`}
  />
);

export default Component;
