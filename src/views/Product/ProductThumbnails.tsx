import PRODUCT_1_THUMBNAIL from "/assets/img/product-1-thumbnail.jpg";
import PRODUCT_2_THUMBNAIL from "/assets/img/product-2-thumbnail.jpg";
import PRODUCT_3_THUMBNAIL from "/assets/img/product-3-thumbnail.jpg";
import PRODUCT_4_THUMBNAIL from "/assets/img/product-4-thumbnail.jpg";

export const ProductThumbnails: React.FC = () => {
  return (
    <div className="relative hidden lg:mt-8 lg:flex lg:w-[450px] lg:justify-between">
      <div>
        <div className="absolute h-20 w-20 rounded-xl border-2 border-pumpkin"></div>
        <img
          src={PRODUCT_1_THUMBNAIL}
          alt="PRODUCT_1_THUMBNAIL"
          className="thumbnail opacity-50"
        />
      </div>
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
  );
};
