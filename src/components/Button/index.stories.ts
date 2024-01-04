import type { Meta, StoryObj } from "@storybook/react";

import ButtonAddToCart from "./index";

const meta = {
  title: "Components/ButtonAddToCart",
  component: ButtonAddToCart,
} satisfies Meta<typeof ButtonAddToCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
