import type { Meta, StoryObj } from "@storybook/react";

import BasketIcon from "."

const meta = {
  title: "Icons/BasketIcon",
  component: BasketIcon,
} satisfies Meta<typeof BasketIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        color: "dark",
        css:"icon-basket",
    }
}

export const Light: Story = {
    args: {
        color: "light",
        css:"icon-basket"
    }
};
