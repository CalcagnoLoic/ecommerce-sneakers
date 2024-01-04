import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./index";

const meta = {
  title: "Pages/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
