import { ProductCarrousel } from "./ProductCarrousel";
import { CarrouselImage } from "../../types/types";
import PRODUCT_1_THUMBNAIL from "/assets/img/product-1-thumbnail.jpg";
import PRODUCT_2_THUMBNAIL from "/assets/img/product-2-thumbnail.jpg";
import PRODUCT_3_THUMBNAIL from "/assets/img/product-3-thumbnail.jpg";
import PRODUCT_4_THUMBNAIL from "/assets/img/product-4-thumbnail.jpg";

export const ProductOverview: React.FC = () => {
  const images: CarrouselImage[] = [
    {id: 1, value: "/assets/img/product-1.jpg"}, 
    {id: 2, value: "/assets/img/product-2.jpg"}, 
    {id: 3, value: "/assets/img/product-3.jpg"}, 
    {id: 4, value: "/assets/img/product-4.jpg"}, 
  ];

  return (
    <>
      <ProductCarrousel images={images} />

      <div className="relative hidden lg:mt-8 lg:flex lg:w-[450px] lg:justify-between">
        <img
          src={PRODUCT_1_THUMBNAIL}
          alt="PRODUCT_1_THUMBNAIL"
          className="thumbnail border-2 border-pumpkin opacity-50"
        />
        <img
          src={PRODUCT_2_THUMBNAIL}
          alt="PRODUCT_2_THUMBNAIL"
          className="thumbnail"
        />
        <img
          src={PRODUCT_3_THUMBNAIL}
          alt="PRODUCT_3_THUMBNAIL"
          className="thumbnail"
        />
        <img
          src={PRODUCT_4_THUMBNAIL}
          alt="PRODUCT_4_THUMBNAIL"
          className="thumbnail"
        />
      </div>
    </>
  );
};
