import { ProductCarrousel } from "./ProductCarrousel";
import ProductThumbnails from "../../components/ProductThumbnailsWrapper";

export const ProductOverview: React.FC = () => {
  return (
    <>
      <ProductCarrousel />

      <ProductThumbnails />
    </>
  );
};
