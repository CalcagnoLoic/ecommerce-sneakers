import { Meta, StoryObj } from "@storybook/react";

import ProductCarrousel from "./index";

const meta = {
  title: "Components/ProductCarrousel",
  component: ProductCarrousel,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductCarrousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
