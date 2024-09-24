import { Meta, StoryObj } from '@storybook/react';
import UserInputField  from './UserInputField';

const meta: Meta<typeof UserInputField> = {
    title: 'Components/Molecules/UserInputField',
    component: UserInputField,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Texto que se muestra como placeholder en el input',
        },
        ValueLabel: {
            control: 'text',
            description: 'Valor del Label',

        },
        onUserNameChange: {
            action: 'onChange',
            description: 'Función que se ejecuta cuando cambia el valor del input',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your input',
        ValueLabel: '',
        onUserNameChange: () => {},
    }
};

export const Modificable: Story = {
    args: {
        placeholder: 'Enter your input',
        ValueLabel: 'Hello World',
        onUserNameChange: () => {},
    }
};