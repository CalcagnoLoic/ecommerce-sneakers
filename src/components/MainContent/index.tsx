import MainContentWrapper from "../../Layout/MainContentWrapper";
import ProductOverview from "../Product/ProductOverview";
import ProductDescription from "../Product/ProductDescriptionContainer";

const Component: React.FC = () => (
  <MainContentWrapper>
    <div className="product-wrapper">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  </MainContentWrapper>
);

export default Component;
