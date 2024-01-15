import FooterWrapper from "../../Layout/FooterWrapper";
import Paragraph from "../../typographies/Paragraph";
import Username from "../Link";

const Component = () => (
  <FooterWrapper>
    <Paragraph
      css="mt-16 py-5 text-center md:mt-0"
      content={
        <>
          Coded with love by{" "}
          <Username
            content="@CalcagnoLoic"
            href="https://github.com/CalcagnoLoic"
          />
        </>
      }
    />
  </FooterWrapper>
);

export default Component;
