import { wrapperUniqueChildren } from "../../types/types";

const Layout: React.FC<wrapperUniqueChildren> = ({ children }) => (
  <div className="mt-3">{children}</div>
);

export default Layout;
