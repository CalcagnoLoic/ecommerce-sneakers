import MainContentWrapper from "../../Layout/MainContentWrapper";
import ProductOverview from "../ProductOverview";
import ProductDescription from "../ProductDescriptionContainer";

const Component: React.FC = () => (
  <MainContentWrapper>
    <div className="wrapper-product">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  </MainContentWrapper>
);

export default Component;
