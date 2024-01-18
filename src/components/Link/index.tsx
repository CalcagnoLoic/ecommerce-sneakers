type Link = {
  content: string;
  classname?: string;
  href: string;
  id?: number;
};

const Component: React.FC<Link> = ({ content, classname, href, id }) => (
  <li className={classname} key={id}>
    <a href={href} target="_blank">
      {content}
    </a>
  </li>
);

export default Component;
