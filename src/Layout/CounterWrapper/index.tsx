const Layout = ({ children }: { children: JSX.Element[] }) => (
  <div className="flex justify-between rounded-xl bg-linkWater p-3 px-5 lg:w-[200px]">
    {children}
  </div>
);

export default Layout;
