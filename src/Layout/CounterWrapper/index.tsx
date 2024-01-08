import { Wrapper } from "../../types/types";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="counter-wrapper">{children}</div>
);

export default Layout;
