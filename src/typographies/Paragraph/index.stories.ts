import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from ".";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: "un paragraphe",
        css: "text-paleSky"
    }
};
