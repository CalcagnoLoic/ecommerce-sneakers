import { Link } from "../../types/types";

const Component: React.FC<Link> = ({
  content,
  classname,
  href,
  id,
}: {
  content: string;
  classname?: string;
  href: string;
  id?: number;
}) => (
  <a href={href} className={classname} key={id} target="_blank">
    {content}
  </a>
);

export default Component;
