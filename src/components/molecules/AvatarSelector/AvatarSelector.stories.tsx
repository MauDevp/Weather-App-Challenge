import { Meta, StoryObj } from '@storybook/react';
import {AvatarSelector} from './AvatarSelector';  // Asegúrate de que el path sea correcto


// Metadata
const meta: Meta<typeof AvatarSelector> = {
    title: 'Components/Molecules/AvatarSelector',
    component: AvatarSelector,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
    args: {
    },
};
