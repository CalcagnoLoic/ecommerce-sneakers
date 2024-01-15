import type { Meta, StoryObj } from "@storybook/react";

import CloseIcons from "."

const meta = {
  title: "Icons/CloseIcons",
  component: CloseIcons,
} satisfies Meta<typeof CloseIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconeSidebar: Story = {
    name: "close-icon-sidebar",
    args: {
        css:"icon-basket",
        handleClick: onclose
    }
}

export const CloseIconModal: Story = {
    name: "close-icon-modal",
    args: {
        css:"icon-basket",
        handleClick: onclose
    }
};
