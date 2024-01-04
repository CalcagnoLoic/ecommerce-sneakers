import type { Meta, StoryObj } from "@storybook/react";

import ProductDescription from "./index";

const meta = {
  title: "Components/ProductDescription",
  component: ProductDescription,
} satisfies Meta<typeof ProductDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  },
};
