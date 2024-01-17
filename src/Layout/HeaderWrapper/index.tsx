import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="mx-6 mb-5 mt-5 md:border-b-[1px] lg:mt-0">{children}</div>
);

export default Layout;
