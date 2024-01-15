import type { Meta, StoryObj } from "@storybook/react";

import ArrowIcons from ".";

const meta = {
  title: "Icons/ArrowIcons",
  component: ArrowIcons,
} satisfies Meta<typeof ArrowIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowLeft: Story = {
  args: {
    kind: "left",
  },
};

export const ArrowRigth: Story = {
  args: {
    kind: "right",
  },
};
