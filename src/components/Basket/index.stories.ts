import type { Meta, StoryObj } from "@storybook/react";

import Basket from "./index";

const meta = {
  title: "Components/Basket",
  component: Basket,
} satisfies Meta<typeof Basket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
