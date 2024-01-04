const Layout = ({
  children,
  ref,
}: {
  children: JSX.Element[];
  ref: React.LegacyRef<HTMLDivElement>;
}) => (
  <div className="basket-modal-wrapper" ref={ref}>
    {children}
  </div>
);

export default Layout;
