import ProductThumbnails from "../ProductThumbnails";
import ProductThumbnailsWrapper from "../../../Layout/ProductThumbnailsWrapper";

import PRODUCT_1_THUMBNAIL from "/assets/img/product-1-thumbnail.jpg";
import PRODUCT_2_THUMBNAIL from "/assets/img/product-2-thumbnail.jpg";
import PRODUCT_3_THUMBNAIL from "/assets/img/product-3-thumbnail.jpg";
import PRODUCT_4_THUMBNAIL from "/assets/img/product-4-thumbnail.jpg";

const Component: React.FC = () => (
  <ProductThumbnailsWrapper>
    <div>
      <div className="frame"></div>
      <ProductThumbnails
        src={PRODUCT_1_THUMBNAIL}
        additionnalClass="opacity-50"
      />
    </div>

    <ProductThumbnails src={PRODUCT_2_THUMBNAIL} />
    <ProductThumbnails src={PRODUCT_3_THUMBNAIL} />
    <ProductThumbnails src={PRODUCT_4_THUMBNAIL} />
  </ProductThumbnailsWrapper>
);

export default Component;
