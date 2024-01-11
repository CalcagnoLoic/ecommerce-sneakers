import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="dropdown-icon-wrapper">{children}</div>
);

export default Layout;
