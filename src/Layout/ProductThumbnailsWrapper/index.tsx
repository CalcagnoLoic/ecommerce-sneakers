const Layout = ({ children }: { children: JSX.Element[] }) => (
  <div className="relative hidden lg:mt-8 lg:flex lg:w-[450px] lg:justify-between">
    {children}
  </div>
);

export default Layout;
