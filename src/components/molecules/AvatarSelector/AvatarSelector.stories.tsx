import { Meta, StoryObj } from '@storybook/react';
import AvatarSelector from './AvatarSelector';  // Asegúrate de que el path sea correcto


// Metadata para Storybook
const meta: Meta<typeof AvatarSelector> = {
    title: 'Components/Molecules/AvatarSelector',
    component: AvatarSelector,
    tags: ['autodocs'],
    argTypes: {
        // Aquí no se necesita especificar argTypes, ya que AvatarSelector es un componente más complejo
        // y no acepta directamente props para Storybook.
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
    args: {
        // Puedes pasar props aquí si AvatarSelector acepta alguno, de lo contrario, no es necesario.
    },
};

// Historia con opciones personalizadas para el selector
export const CustomOptions: Story = {
    args: {
        // Puedes personalizar las opciones si AvatarSelector acepta alguna forma de pasarlas.
    },
};
