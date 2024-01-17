import Paragraph from "../../../../typographies/Paragraph";
import PRODUCT_THUMBNAIL from "/assets/img/product-1-thumbnail.jpg";
import Heading from "../../../../typographies/Heading";
import DeleteIcon from "../../../../Icons/DeleteIcon";

const Component = () => (
  <>
    <div className="flex justify-between">
      <img
        src={PRODUCT_THUMBNAIL}
        alt="PRODUCT_THUMBNAIL"
        className="h-12 w-12 rounded-md"
      />
      <section>
        <Heading
          kind="h2"
          css="text-paleSky"
          content="fall limited edition sneakers"
        />
        <Paragraph kind="span" css="text-paleSky" content="$125.00 x 3" />
        <Paragraph kind="span" css="font-bold ml-3" content="$375.00" />
      </section>
      <DeleteIcon />
    </div>

    <button className="button-basket">
      Checkout
    </button>
  </>
);

export default Component;
