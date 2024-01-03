import ProductOverview from "../ProductOverview";
import ProductDescription from "../ProductDescriptionWrapper";

const Component = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center lg:flex-row lg:items-start">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  );
};

export default Component