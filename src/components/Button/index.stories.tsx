import type { Meta, StoryObj } from "@storybook/react";

import BasketIcons from "../../Icons/BasketIcons";
import Button from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddToCart: Story = {
  args: {
    onClick: () => {},
    content: "Add To Cart",
    icon: <BasketIcons color="light" css="icon-to-cart mr-5" />,
    css: "button-wrapper",
  },
};

export const Checkout: Story = {
  args: {
    content: "Checkout",
    css: "button-basket",
  },
};
