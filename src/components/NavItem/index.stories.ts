import type { Meta, StoryObj } from "@storybook/react";

import NavItem from "./index";

const meta = {
  title: "Components/NavItem",
  component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavItemCollection: Story = {
  name: "nav-item-collection",
  args: {
    content: "Collection",
    href: "#",
    id: 1,
  },
};
export const NavItemMen: Story = {
  name: "nav-item-men",
  args: {
    content: "Men",
    href: "#",
    id: 2,
  },
};

export const NavItemWomen: Story = {
  name: "nav-item-women",
  args: {
    content: "Women",
    href: "#",
    id: 3,
  },
};

export const NavItemAbout: Story = {
  name: "nav-item-about",
  args: {
    content: "About",
    href: "#",
    id: 4,
  },
};

export const NavItemContact: Story = {
  name: "nav-item-contact",
  args: {
    content: "Contact",
    href: "#",
    id: 5,
  },
};
