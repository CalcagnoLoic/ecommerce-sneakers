import { ProductOverview } from "./Product/ProductOverview";
import { ProductDescription } from "./Product/ProductDescription";

export const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center lg:items-start md:justify-center lg:flex-row">
      <div className="flex-col">
        <ProductOverview />
      </div>

      <ProductDescription />
    </div>
  );
};
