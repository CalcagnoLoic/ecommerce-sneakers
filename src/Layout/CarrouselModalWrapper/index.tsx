import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ forwardedRef, children }) => (
  <div
    className="carrousel-modal-wrapper"
    ref={forwardedRef}
    data-testid="carrousel-element"
  >
    {children}
  </div>
);

export default Layout;
