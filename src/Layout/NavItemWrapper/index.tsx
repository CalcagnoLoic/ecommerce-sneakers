import { ReactNode } from "react";

const Layout = ({
  children,
  isDropdown,
  forwardedRef,
}: {
  children: ReactNode;
  isDropdown: boolean;
  forwardedRef?: React.RefObject<HTMLDivElement>;
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
