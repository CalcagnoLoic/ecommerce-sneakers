import { Message } from "../../../types/types";

import PriceReductionWrapper from "../../../Layout/PriceReductionWrapper";
import Heading from "../../../typographies/Heading";

const Component: React.FC<Message> = ({ content }) => (
  <PriceReductionWrapper>
    <Heading kind="span" content={content} css={"text-pumpkin"} />
  </PriceReductionWrapper>
);

export default Component;
