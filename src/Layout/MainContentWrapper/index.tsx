import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="main-content-wrapper">{children}</div>
);

export default Layout;
