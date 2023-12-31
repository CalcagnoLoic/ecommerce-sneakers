import { Icon } from "../../types/types";

const Component: React.FC<Icon> = ({ img, classname, handleClick }) => (
  <img src={img} alt={img} className={`${classname}`} onClick={handleClick} />
);

export default Component;
