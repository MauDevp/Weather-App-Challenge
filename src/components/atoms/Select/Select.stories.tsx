import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';  // Asegúrate de que el path sea correcto
import Image1 from '@assets/images/avatars/profile-1.jpg';  // Importa la imagen 1
import Image2 from '@assets/images/avatars/profile-2.jpg';  // Importa la imagen 2
import Image3 from '@assets/images/avatars/profile-3.jpg';  // Importa la imagen 3

// Definir las opciones como objetos con value y label
const optionsObj = [
    { value: Image1, label: 'Profile 1' },
    { value: Image2, label: 'Profile 2' },
    { value: Image3, label: 'Profile 3' },
];

// Metadata para Storybook
const meta: Meta<typeof Select> = {
    title: 'Components/Atoms/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Texto que se muestra como placeholder en el select',
        },
        options: {
            control: {
                type: 'object',
            },
            description: 'Lista de opciones para el select',
        },
        value: {
            control: 'text',
            description: 'Valor seleccionado actualmente',
        },
        onChange: {
            action: 'onChange',
            description: 'Función que se ejecuta cuando cambia la selección',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
    args: {
        placeholder: 'Selecciona una imagen',
        options: optionsObj,
        value: optionsObj[0].value,
    },
    render: (args) => {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Select {...args} />
            </div>
        );
    },
};