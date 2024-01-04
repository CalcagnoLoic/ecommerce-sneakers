import { Message } from "../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <p className="mt-8 break-words text-base text-paleSky md:w-[445px]">
    {name}
  </p>
);

export default Component;
