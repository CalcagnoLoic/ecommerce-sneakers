import FooterWrapper from "../../Layout/FooterWrapper";
import UserName from "../UserName";

const Component: React.FC = () => (
  <FooterWrapper>
    <p className="mt-16 py-5 text-center md:mt-0">
      Coded with love by <UserName name="@CalcagnoLoic" />
    </p>
  </FooterWrapper>
);

export default Component;
