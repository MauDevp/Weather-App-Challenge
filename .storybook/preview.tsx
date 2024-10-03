import type { Preview } from "@storybook/react";
import { Provider } from 'react-redux';
import store from '../src/store/store'; // Ajusta la ruta según donde esté tu archivo de store
import '../src/styles/globals.css';
import '../src/styles/variables.css';
import '../src/styles/reset.css';
import React from "react";

const withReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withReduxProvider],
};

export default preview;