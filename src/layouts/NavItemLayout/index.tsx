type LayoutProps = {
  children: JSX.Element[];
  forwardedRef?: React.RefObject<HTMLUListElement>;
  css: string;
};

const Layout = ({ children, forwardedRef, css }: LayoutProps) => (
  <ul className={css} ref={forwardedRef}>
    {children}
  </ul>
);

export default Layout;
