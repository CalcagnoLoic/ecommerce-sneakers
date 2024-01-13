import type { Meta, StoryObj } from "@storybook/react";

import ProductPage from ".";

const meta = {
  title: "Pages/ProductPage",
  component: ProductPage,
} satisfies Meta<typeof ProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
