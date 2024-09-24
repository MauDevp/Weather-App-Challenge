import { Meta, StoryObj } from '@storybook/react';
import {UserCard} from './UserCard';  // Asegúrate de que el path sea correcto


// Metadata para Storybook
const meta: Meta<typeof UserCard> = {
    title: 'Components/Molecules/UserCard',
    component: UserCard,
    tags: ['autodocs'],
    argTypes: {
        // Aquí no se necesita especificar argTypes, ya que UserCard es un componente más complejo
        // y no acepta directamente props para Storybook.
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
    args: {
        // Puedes pasar props aquí si UserCard acepta alguno, de lo contrario, no es necesario.
    },
};