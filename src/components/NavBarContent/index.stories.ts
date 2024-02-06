import type { Meta, StoryObj } from "@storybook/react";

import NavBarContent from "./index";

const meta = {
  title: "Components/NavBarContent",
  component: NavBarContent,
} satisfies Meta<typeof NavBarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
