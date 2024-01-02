import { Meta, StoryObj } from '@storybook/react'

import ProductName from './index'

const meta = {
    title: "Components/ProductName",
    component: ProductName
} satisfies Meta<typeof ProductName>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "default",
    args: {
        name: "fall limited edition sneakers"
    }
}
