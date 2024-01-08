import { Message } from "../../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <h1 className="mt-7 text-4xl capitalize">{name}</h1>
);

export default Component;
