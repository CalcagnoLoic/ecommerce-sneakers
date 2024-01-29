import { Meta, StoryObj } from "@storybook/react";

import ProductThumbnails from "./index";
import PRODUCT_1_THUMBNAIL from "../../../../public/assets/img/product-1-thumbnail.jpg";
import PRODUCT_2_THUMBNAIL from "../../../../public/assets/img/product-2-thumbnail.jpg";
import PRODUCT_3_THUMBNAIL from "../../../../public/assets/img/product-3-thumbnail.jpg";
import PRODUCT_4_THUMBNAIL from "../../../../public/assets/img/product-4-thumbnail.jpg";

const meta = {
  title: "Components/ProductThumbnails",
  component: ProductThumbnails,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductThumbnails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Product1Thumbnails: Story = {
  name: "product-1-thumbnails",
  args: {
    src: PRODUCT_1_THUMBNAIL,
    additionnalClass: "opacity-50",
  },
};

export const Product2Thumbnails: Story = {
  name: "product-2-thumbnails",
  args: {
    src: PRODUCT_2_THUMBNAIL,
  },
};

export const Product3Thumbnails: Story = {
  name: "product-3-thumbnails",
  args: {
    src: PRODUCT_3_THUMBNAIL,
  },
};

export const Product4Thumbnails: Story = {
  name: "product-4-thumbnails",
  args: {
    src: PRODUCT_4_THUMBNAIL,
  },
};
