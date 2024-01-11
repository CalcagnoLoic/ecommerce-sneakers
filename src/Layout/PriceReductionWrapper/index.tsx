import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="price-reduction-wrapper">{children}</div>
);

export default Layout;
