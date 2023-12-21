import ARROW_LEFT from "../../public/assets/img/icon-previous.svg";
import ARROW_RIGHT from "../../public/assets/img/icon-next.svg";
import MAIN_PRODUCT from "../../public/assets/img/product-1.jpg";
import PRODUCT_1_THUMBNAIL from "../../public/assets/img/product-1-thumbnail.jpg";
import PRODUCT_2_THUMBNAIL from "../../public/assets/img/product-2-thumbnail.jpg";
import PRODUCT_3_THUMBNAIL from "../../public/assets/img/product-3-thumbnail.jpg";
import PRODUCT_4_THUMBNAIL from "../../public/assets/img/product-4-thumbnail.jpg";

export const LeftSide: React.FC = () => {
  return (
    <>
      <div className="relative md:w-[450px]">
        <img src={MAIN_PRODUCT} alt="" className="md:h-[450px] md:rounded-xl" />
        <div className=" arrow left-4">
          <img
            src={ARROW_LEFT}
            alt="Arrow left for previous product"
            className="h-4 w-2"
          />
        </div>
        <div className="arrow right-4">
          <img
            src={ARROW_RIGHT}
            alt="Arrow right for next product"
            className="h-4 w-2"
          />
        </div>
      </div>
      <div className="relative hidden md:mt-8 md:flex md:w-[450px] md:justify-between">
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
