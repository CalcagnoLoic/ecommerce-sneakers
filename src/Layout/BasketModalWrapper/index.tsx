const Layout = ({
  children,
  ref,
}: {
  children: JSX.Element[];
  ref: React.LegacyRef<HTMLDivElement>;
}) => (
  <div
    className="absolute left-1/2 top-28 z-20 h-64 w-[360px] translate-x-[-50%] rounded-lg bg-white p-6 shadow-2xl md:left-auto md:top-20 md:translate-x-0"
    ref={ref}
  >
    {children}
  </div>
);

export default Layout;
