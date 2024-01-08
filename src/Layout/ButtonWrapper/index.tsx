import { Wrapper } from "../../types/types";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="button-wrapper">{children}</div>
);

export default Layout;
