import type { Meta, StoryObj } from "@storybook/react";

import LogoIcon from ".";

const meta = {
  title: "Icons/LogoIcon",
  component: LogoIcon,
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
