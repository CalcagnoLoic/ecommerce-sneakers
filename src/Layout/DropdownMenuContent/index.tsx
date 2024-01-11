import { wrapperDropdownMenu } from "../../types/interface";

const Layout: React.FC<wrapperDropdownMenu> = ({ isOpen, children }) => (
  <div className={`${isOpen ? "relative lg:hidden" : "hidden"}`}>
    {children}
  </div>
);

export default Layout;
