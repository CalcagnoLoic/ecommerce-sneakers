import type { Meta, StoryObj } from "@storybook/react";

import QuantityIcons from ".";

const meta = {
  title: "Icons/QuantityIcons",
  component: QuantityIcons,
} satisfies Meta<typeof QuantityIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MinusSymbol: Story = {
    args: {
        kind: "minus"
    }
};

export const PlusSymbol: Story = {
    args: {
        kind: "plus"
    }
};
