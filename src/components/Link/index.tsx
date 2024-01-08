import { Link } from "../../types/types";

const Component: React.FC<Link> = ({ content, classname, href, id }) => (
  <a href={href} className={classname} key={id} target="_blank">
    {content}
  </a>
);

export default Component;
