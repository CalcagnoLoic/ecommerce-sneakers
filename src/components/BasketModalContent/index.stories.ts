import type { Meta, StoryObj } from "@storybook/react";

import BasketModalContent from "./index";

const meta = {
  title: "Components/BasketModalContent",
  component: BasketModalContent,
} satisfies Meta<typeof BasketModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "Your cart is empty."
    }
};
