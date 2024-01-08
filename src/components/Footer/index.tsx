import FooterWrapper from "../../Layout/FooterWrapper";

import FooterText from "../Text";
import Username from "../Link";

const Component: React.FC = () => (
  <FooterWrapper>
    <FooterText
      tag="p"
      text={`Coded with love by ${(
        <Username
          content="@CalcagnoLoic"
          href="https://github.com/CalcagnoLoic"
        />
      )}`}
      classname="mt-16 py-5 text-center md:mt-0"
    />
  </FooterWrapper>
);

export default Component;
