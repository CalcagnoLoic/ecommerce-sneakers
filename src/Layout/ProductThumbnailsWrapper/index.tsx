import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="product-thumbnails-wrapper">{children}</div>
);

export default Layout;
