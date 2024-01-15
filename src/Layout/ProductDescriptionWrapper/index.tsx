import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="product-description-wrapper">{children}</div>
);

export default Layout;
