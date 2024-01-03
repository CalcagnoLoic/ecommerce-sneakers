import type { Meta, StoryObj } from "@storybook/react";

import IconContent from "./index";
import MINUS_ICON from "/assets/img/icon-minus.svg";
import PLUS_ICON from "/assets/img/icon-plus.svg";
import CART_ICON from "/assets/img/icon-cart-button.svg";

const meta = {
  title: "Components/IconContent",
  component: IconContent,
} satisfies Meta<typeof IconContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlusIcon: Story = {
  name: "plus-icon",
  args: {
    img: PLUS_ICON,
    classname: "icon-to-cart",
  },
};

export const MinusIcon: Story = {
  name: "minus-icon",
  args: {
    img: MINUS_ICON,
    classname: "icon-to-cart",
  },
};

export const CartIcon: Story = {
  name: "cart-icon",
  args: {
    img: CART_ICON,
    classname: "icon-to-cart mr-5",
  },
};
