import { ProductCarrousel } from "./ProductCarrousel";
import { ProductThumbnails } from "./ProductThumbnails";

export const ProductOverview: React.FC = () => {
  return (
    <>
      <ProductCarrousel />

      <ProductThumbnails />
    </>
  );
};
