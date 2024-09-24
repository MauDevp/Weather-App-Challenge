import {Input} from "./Input"
import type { Meta, StoryObj } from '@storybook/react';

// Metadata
const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Atoms/Input',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'Valor para el input'
        },
        onChange: {
            action: 'onChange',
            description: 'Function para manejar el el cambio del input'
        },
    }
}

type Story = StoryObj<typeof meta>

export const input: Story = {
    args: {
        value: '',
        onChange: () => {},
        placeholder: 'Ingresa tu latitud',
        required: true
    },
};


export default meta;