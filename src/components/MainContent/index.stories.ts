import { Meta, StoryObj } from "@storybook/react";

import MainContent from ".";

const meta = {
  title: "Pages/MainContent",
  component: MainContent,
} satisfies Meta<typeof MainContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
