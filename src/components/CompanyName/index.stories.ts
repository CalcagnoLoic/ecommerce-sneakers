import type { Meta, StoryObj } from "@storybook/react";

import CompanyName from "./index";

const meta = {
  title: "Components/CompanyName",
  component: CompanyName
} satisfies Meta<typeof CompanyName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "sneaker company",
  },
};
