import type { Meta, StoryObj } from "@storybook/react";

import Icon from ".";

const meta = {
  title: "Icons/Basket",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "dark"
    }
};

export const Light: Story = {
    args: {
        color: "light"
    }
};
