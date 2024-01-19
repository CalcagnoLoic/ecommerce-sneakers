export interface Wrapper {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Wrapper) => (
  <section className="product-wrapper">{children}</section>
);

export default Layout;
