import { Text } from "../../types/types";

const Component: React.FC<Text> = ({
  tag,
  text,
  classname,
}: {
  tag?: string;
  text: string | number | React.ReactNode;
  classname: string;
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classname}>{text}</Tag>;
};

export default Component;
