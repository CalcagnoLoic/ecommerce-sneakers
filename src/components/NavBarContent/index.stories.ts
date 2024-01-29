import type { Meta, StoryObj } from "@storybook/react";

import NavBarContent from "./index";

const meta = {
  title: "Components/NavBarContent",
  component: NavBarContent,
  tags: ["autodocs"],
} satisfies Meta<typeof NavBarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
