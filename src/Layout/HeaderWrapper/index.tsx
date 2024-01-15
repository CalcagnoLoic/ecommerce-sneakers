import { Wrapper } from "../../types/interface";

const Layout: React.FC<Wrapper> = ({ children }) => (
  <div className="mx-6 my-5 md:border-b-[1px]">{children}</div>
);

export default Layout;
