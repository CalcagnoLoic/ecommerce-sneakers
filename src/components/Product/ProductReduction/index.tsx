import { Message } from "../../../types/types";

import PriceReductionWrapper from "../../../Layout/PriceReductionWrapper";
import Paragraph from "../../../typographies/Paragraph";

const Component: React.FC<Message> = ({ content }) => (
  <PriceReductionWrapper>
    <Paragraph kind="span" content={content} css={"text-pumpkin"} />
  </PriceReductionWrapper>
);

export default Component;
