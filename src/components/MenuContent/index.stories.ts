import type { Meta, StoryObj } from "@storybook/react";

import MenuContent from "./index";

const meta = {
  title: "Components/MenuContent",
  component: MenuContent,
} satisfies Meta<typeof MenuContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
