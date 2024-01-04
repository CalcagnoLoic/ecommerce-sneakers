import { Message } from "../../types/types";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <a href="https://github.com/CalcagnoLoic" target="_blank">
    {name}
  </a>
);

export default Component;
