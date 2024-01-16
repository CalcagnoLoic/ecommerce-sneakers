import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children, forwardedRef }) => (
  <div className="basket-dropdown-wrapper" ref={forwardedRef} data-testid="dropdown-basket">
    {children}
  </div>
);

export default Layout;
