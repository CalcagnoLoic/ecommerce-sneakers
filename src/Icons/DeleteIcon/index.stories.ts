import type { Meta, StoryObj } from "@storybook/react";

import DeleteIcon from ".";

const meta = {
  title: "Icons/DeleteIcon",
  component: DeleteIcon,
} satisfies Meta<typeof DeleteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
