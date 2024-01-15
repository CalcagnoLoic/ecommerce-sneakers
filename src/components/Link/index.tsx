type Link = {
  content: string;
  classname?: string;
  href: string;
  id?: number;
};

const Component: React.FC<Link> = ({ content, classname, href, id }) => (
  <a href={href} className={classname} key={id} target="_blank">
    {content}
  </a>
);

export default Component;
