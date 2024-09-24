import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';
import '../src/styles/variables.css'; // Ajusta la ruta según donde esté tu archivo de estilos
import '../src/styles/reset.css';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
