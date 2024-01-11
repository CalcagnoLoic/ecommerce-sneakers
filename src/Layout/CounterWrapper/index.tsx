import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="counter-wrapper">{children}</div>
);

export default Layout;
