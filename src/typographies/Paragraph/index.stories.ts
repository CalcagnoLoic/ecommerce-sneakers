import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from ".";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P: Story = {
    args: {
        kind: "p",
        content: "un paragraphe",
        css: "text-paleSky"
    }
};

export const Span: Story = {
    args: {
        kind: "span",
        content: "un autre paragraphe",
        css: "text-paleSky"
    }
};
