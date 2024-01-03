const Component = ({
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
