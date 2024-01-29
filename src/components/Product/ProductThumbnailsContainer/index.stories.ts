import { Meta, StoryObj } from "@storybook/react";

import ProductThumbnailsWrapper from "./index";

const meta = {
  title: "Components/ProductThumbnailsWrapper",
  component: ProductThumbnailsWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductThumbnailsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
