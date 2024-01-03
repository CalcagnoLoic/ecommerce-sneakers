import FooterWrapper from "../../Layout/FooterWrapper";
import UserName from "../UserName";

const Component = () => (
  <FooterWrapper>
    <p className="mt-16 py-5 text-center md:mt-0">
      Coded with love by <UserName username="@CalcagnoLoic" />
    </p>
  </FooterWrapper>
);

export default Component;
