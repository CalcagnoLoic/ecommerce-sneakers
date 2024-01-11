import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="mt-3">{children}</div>
);

export default Layout;
