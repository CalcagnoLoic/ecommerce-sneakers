import { wrapperUniqueChildren } from "../../types/types";

const Layout: React.FC<wrapperUniqueChildren> = ({ children }) => (
  <div className="mx-6 md:border-b-2">{children}</div>
);

export default Layout;
