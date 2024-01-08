import type { Meta, StoryObj } from "@storybook/react";

import Text from "./index";

const meta = {
  title: "Components/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextCart: Story = {
  name: "text-cart",
  args: {
    tag: "p",
    text: "Cart",
    classname: "font-bold",
  },
};

export const TextBasket: Story = {
  name: "text-basket",
  args: {
    tag: "h2",
    text: "Your cart is empty.",
    classname: "basket-message",
  },
};

export const TextButton: Story = {
  name: "text-button",
  args: {
    tag: "p",
    text: "Add to cart",
    classname: "self-center text-white",
  },
};

export const TextCompanyName: Story = {
  name: "text-company-name",
  args: {
    tag: "h2",
    text: "snearkers company",
    classname: "company-name-text",
  },
};
