const Layout = ({
  children,
  forwardedRef,
}: {
  children: JSX.Element[];
  forwardedRef: React.LegacyRef<HTMLDivElement>;
}) => (
  <div className="basket-modal-wrapper" ref={forwardedRef}>
    {children}
  </div>
);

export default Layout;
