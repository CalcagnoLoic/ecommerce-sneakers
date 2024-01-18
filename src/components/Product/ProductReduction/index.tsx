import { Message } from "../../../types/types";

import Paragraph from "../../../typographies/Paragraph";

const Component: React.FC<Message> = ({ content }) => (
  <div className="price-reduction-wrapper">
    <Paragraph kind="span" content={content} css={"text-pumpkin"} />
  </div>
);

export default Component;
