import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="mx-6 md:border-b-2">{children}</div>
);

export default Layout;
