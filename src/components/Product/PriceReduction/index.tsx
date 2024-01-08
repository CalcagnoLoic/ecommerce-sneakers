import { Message } from "../../../types/types";

import PriceReductionWrapper from "../../../Layout/PriceReductionWrapper";
import PriceReductionText from "../../CustomText";

const Component: React.FC<Message> = ({ name }) => (
  <PriceReductionWrapper>
    <PriceReductionText tag="span" text={name} classname="text-pumpkin" />
  </PriceReductionWrapper>
);

export default Component;
