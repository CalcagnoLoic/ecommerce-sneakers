import { Message } from "../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <p className="basket-message">{name}</p>
);

export default Component;
