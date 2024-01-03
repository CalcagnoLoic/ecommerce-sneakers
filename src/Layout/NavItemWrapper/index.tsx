import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="hidden flex-grow self-center lg:flex">{children}</div>
);

export default Layout;
