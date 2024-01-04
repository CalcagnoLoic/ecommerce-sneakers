const Component = ({ img, classname }: { img: string; classname?: string }) => (
  <img src={img} alt={img} className={`${classname}`} />
);

export default Component;
