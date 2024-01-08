import { Text } from "../../types/types";

const Component: React.FC<Text> = ({ tag, text, classname }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classname}>{text}</Tag>;
};

export default Component;
