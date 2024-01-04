import { Message } from "../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-widest text-pumpkin">
    {name}
  </h2>
);

export default Component;
