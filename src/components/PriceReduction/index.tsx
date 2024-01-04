import { Message } from "../../types/types";

import PriceReductionWrapper from "../../Layout/PriceReductionWrapper";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <PriceReductionWrapper>
    <span className=" text-pumpkin">{name}</span>
  </PriceReductionWrapper>
);

export default Component;
