const Layout = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element[];
}) => (
  <div className={`${isOpen ? "sidebar relative lg:hidden" : "hidden"}`}>
    {children}
  </div>
);

export default Layout;
