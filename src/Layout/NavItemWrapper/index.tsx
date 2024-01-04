import { ReactNode } from "react";

const Layout = ({
  children,
  isDropdown,
  ref,
}: {
  children: ReactNode;
  isDropdown: boolean;
  ref?: React.LegacyRef<HTMLDivElement>;
}) => (
  <div
    className={`${
      isDropdown ? "nav-item--dropdown" : "hidden flex-grow self-center lg:flex"
    }`}
    ref={ref}
  >
    {children}
  </div>
);

export default Layout;
