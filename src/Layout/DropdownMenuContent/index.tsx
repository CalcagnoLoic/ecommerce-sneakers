import { wrapperDropdownMenu } from "../../types/types";

const Layout: React.FC<wrapperDropdownMenu> = ({ isOpen, children }) => (
  <div className={`${isOpen ? "sidebar relative lg:hidden" : "hidden"}`}>
    {children}
  </div>
);

export default Layout;
