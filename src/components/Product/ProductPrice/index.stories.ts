import { Meta, StoryObj } from "@storybook/react";

import ProductPrice from "./index";

const meta = {
  title: "Components/ProductPrice",
  component: ProductPrice,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    isOnSale: false,
    price: "$125.00",
  },
};

export const SoldOut: Story = {
  name: "sold-out price",
  args: {
    isOnSale: true,
    price: "$250.00",
  },
};
