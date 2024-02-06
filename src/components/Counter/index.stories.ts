import type { Meta, StoryObj } from "@storybook/react";

import Counter from "./index";

const meta = {
  title: "Components/Counter",
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
    quantity: 0,
  },
};
