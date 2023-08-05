import type { Preview } from "@storybook/react";
import "../src/TableComponent/style.css";
import {MINIMAL_VIEWPORTS} from "@storybook/addon-viewport";

const customViewports = {
  iphone14pro: {
    name: 'iPhone 14 pro',
    styles: {
      width: '393px',
      height: '660px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
