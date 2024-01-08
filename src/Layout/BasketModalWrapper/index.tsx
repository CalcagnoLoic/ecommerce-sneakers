import { wrapperRef } from "../../types/types";

const Layout: React.FC<wrapperRef> = ({ children, forwardedRef }) => (
  <div className="basket-modal-wrapper" ref={forwardedRef}>
    {children}
  </div>
);

export default Layout;
