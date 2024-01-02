import { Meta, StoryObj } from '@storybook/react'

import NavItem from './index'

const meta = {
    title: "Components/NavItem",
    component: NavItem
} satisfies Meta<typeof NavItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "default",
    args: {
        content: "Collection",
        href: "#",
        isActive: false
    }
}

export const ActiveLink: Story = {
    name: "active link",
    args: {
        content: "Collection",
        href: "#",
        isActive: true
    }
}
