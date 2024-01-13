import type { Meta, StoryObj } from "@storybook/react";

import Title from ".";

const meta = {
  title: "Typography/Title",
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        content: "Mon titre principal",
        kind: "h1"
    }
};

export const H2: Story = {
    args: {
        content: "Mon titre de niveau 2",
        kind: "h2"
    }
};

