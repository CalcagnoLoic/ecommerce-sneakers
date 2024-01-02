import { Meta, StoryObj } from '@storybook/react'

import CompanyName from './index'

const meta = {
    title: "Components/CompanyName",
    component: CompanyName
} satisfies Meta<typeof CompanyName>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
    name: "small",
    args: {
        name: "sneaker company",
        size: "xs"
    }
}

export const Large: Story = {
    name: "large",
    args: {
        name: "sneaker company",
        size: "lg"
    }
}
