import type { Meta, StoryObj } from "@storybook/react";

import ProductTitle from "./index";

const meta = {
  title: "Component/ProductTitle",
  component: ProductTitle
} satisfies Meta<typeof ProductTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "fall limited edition sneakers",
  },
};
