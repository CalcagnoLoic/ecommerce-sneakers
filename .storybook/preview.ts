import type { Preview } from "@storybook/react";
import "../public/assets/style/tailwind.css";
import autodocTemplate from "./autodocTemplate.mdx"

const preview: Preview = {
  parameters: {
    docs: {
      page: autodocTemplate,
    },
  },
};

export default preview;
