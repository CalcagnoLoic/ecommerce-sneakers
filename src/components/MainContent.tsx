import { ProductOverview } from "../views/Product/ProductOverview";
import { ProductDescription } from "./ProductDescriptionWrapper";

export const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center lg:flex-row lg:items-start">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  );
};
