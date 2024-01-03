const Layout = ({
  additionnalClass,
  handleClick,
  children,
}: {
  additionnalClass: string;
  handleClick: () => void;
  children: JSX.Element;
}) => (
  <div className={`arrow ${additionnalClass}`} onClick={handleClick}>
    {children}
  </div>
);

export default Layout;
 