import ProductOverview from "../ProductOverview";
import ProductDescription from "../ProductDescriptionWrapper";
import MainContentWrapper from "../../Layout/MainContentWrapper";

const Component = () => (
  <MainContentWrapper>
    <div className="flex flex-col md:items-center md:justify-center lg:flex-row lg:items-start">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  </MainContentWrapper>
);

export default Component;
