import { Message } from "../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <p className="absolute left-1/2 top-36 translate-x-[-50%] text-center font-bold text-paleSky">
    {name}
  </p>
);

export default Component;
