import type { Meta, StoryObj } from "@storybook/react";

import PriceReduction from "./index";

const meta = {
  title: "Components/PriceReduction",
  component: PriceReduction
} satisfies Meta<typeof PriceReduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "50%",
  },
};
