import { Meta, StoryObj } from "@storybook/react";

import ProductOverview from "./index";

const meta = {
  title: "Pages/ProductOverview",
  component: ProductOverview,
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
