import { wrapperRefCarrousel } from "../../types/types";

const Layout: React.FC<wrapperRefCarrousel> = ({ forwardedRef, children }) => (
  <div className="carrousel-modal-wrapper" ref={forwardedRef}>
    {children}
  </div>
);

export default Layout;
