import { Wrapper } from "../../types/types";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="product-thumbnails-wrapper">{children}</div>
);

export default Layout;
