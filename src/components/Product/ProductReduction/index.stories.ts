import type { Meta, StoryObj } from "@storybook/react";

import PriceReduction from "./index";

const meta = {
  title: "Components/PriceReduction",
  component: PriceReduction,
  tags: ["autodocs"],
} satisfies Meta<typeof PriceReduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "50%",
  },
};
