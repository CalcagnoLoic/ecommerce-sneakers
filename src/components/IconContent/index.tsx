const Component = ({img, classname}: {img: string; classname: string}) => (
  <img
    src={img}
    alt="icon content"
    className={`${classname}`}
  />
);

export default Component