const Layout = ({
  forwardedRef,
  children,
}: {
  forwardedRef: React.RefObject<HTMLDivElement>;
  children: JSX.Element;
}) => (
  <div className="absolute left-1/2 top-20 -translate-x-1/2" ref={forwardedRef}>
    {children}
  </div>
);

export default Layout;
