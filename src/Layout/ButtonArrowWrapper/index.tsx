import { wrapperBtn } from "../../types/types";

const Layout: React.FC<wrapperBtn> = ({
  additionnalClass,
  handleClick,
  children,
}) => (
  <div className={`${additionnalClass}`} onClick={handleClick}>
    {children}
  </div>
);

export default Layout;
