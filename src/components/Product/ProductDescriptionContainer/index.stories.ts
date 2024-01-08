import type { Meta, StoryObj } from "@storybook/react";

import ProductDescription from "./index";

const meta = {
  title: "Pages/ProductDescription",
  component: ProductDescription,
} satisfies Meta<typeof ProductDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
