import { wrapperUniqueChildren } from "../../types/types";

const Layout: React.FC<wrapperUniqueChildren> = ({ children }) => (
  <div className="price-reduction-wrapper">{children}</div>
);

export default Layout;
