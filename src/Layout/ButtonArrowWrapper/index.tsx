const Layout = ({
  additionnalClass,
  handleClick,
  children,
}: {
  additionnalClass: string;
  handleClick: () => void;
  children: JSX.Element;
}) => (
  <div className={`${additionnalClass}`} onClick={handleClick}>
    {children}
  </div>
);

export default Layout;
 