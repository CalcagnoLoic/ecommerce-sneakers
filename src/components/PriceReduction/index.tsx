import { Message } from "../../types/types";

import PriceReductionWrapper from "../../Layout/PriceReductionWrapper";
import PriceReductionText from "../Text";

const Component: React.FC<Message> = ({ name }: { name: string }) => (
  <PriceReductionWrapper>
    <PriceReductionText tag="span" text={name} classname="text-pumpkin" />
  </PriceReductionWrapper>
);

export default Component;
