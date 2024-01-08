import { wrapperNavItem } from "../../types/types";

const Layout: React.FC<wrapperNavItem> = ({
  children,
  isDropdown,
  forwardedRef,
}) => (
  <div
    className={`${
      isDropdown ? "nav-item--dropdown" : "hidden flex-grow self-center lg:flex"
    }`}
    ref={forwardedRef}
  >
    {children}
  </div>
);

export default Layout;
