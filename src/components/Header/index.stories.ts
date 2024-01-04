import type { Meta, StoryObj } from "@storybook/react";

import Header from "./index";

const meta = {
  title: "Pages/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
