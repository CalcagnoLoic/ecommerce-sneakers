type NavItem = {
  content: string;
  classname?: string;
  href: string;
  id?: number;
};

const Component: React.FC<NavItem> = ({ content, classname, href, id }) => (
  <li className={classname} key={id}>
    <a href={href}>{content}</a>
  </li>
);

export default Component;
