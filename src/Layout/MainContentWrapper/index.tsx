import { wrapperUniqueChildren } from "../../types/types";

const Layout: React.FC<wrapperUniqueChildren> = ({ children }) => (
  <div className="main-content-wrapper">{children}</div>
);

export default Layout;
