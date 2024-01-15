import type { Meta, StoryObj } from "@storybook/react";

import DropdownIcons from ".";

const meta = {
  title: "Icons/DropdownIcons",
  component: DropdownIcons,
} satisfies Meta<typeof DropdownIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "close-icon-sidebar",
  args: {
    isOpen: true,
  },
};

export const CloseDropdown: Story = {
  args: {
    isOpen: false,
  },
};
