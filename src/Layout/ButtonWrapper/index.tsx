const Layout = ({ children }: { children: JSX.Element[] }) => (
    <div className="mt-4 flex cursor-pointer justify-center rounded-xl bg-pumpkin p-3 px-5 shadow-2xl shadow-pumpkin hover:bg-atomicTangerine md:shadow-none lg:ml-2 lg:mt-0 lg:w-full">
      {children}
    </div>
  );
  
  export default Layout;
  