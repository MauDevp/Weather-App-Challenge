import {Avatar} from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';
import image from '@assets/images/avatars/profile-1.jpg';

// Definir la metadata del componente
const meta: Meta<typeof Avatar> = {
    title: 'Components/Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        imageUrl: {
            control: 'text',  // Control de texto para probar diferentes URLs de imágenes
            description: 'URL de la imagen del avatar',
        },
        altText: {
            control: 'text',  // Control de texto para probar diferentes textos alternativos
            description: 'Texto alternativo de la imagen',
        },
        size: {
            control: 'select',  // Control de selección para elegir el tamaño
            options: ['small', 'large'],  // Opciones de tamaño
            description: 'Tamaño de avatar',
            defaultValue: 'small',  // Valor por defecto
        },
        shape: {
            control: 'select',  // Control de selección para elegir la forma
            options: ['circle', 'square'],  // Opciones de forma
            description: 'Forma de avatar',
            defaultValue: 'circle',  // Valor por defecto
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Componente por defecto en avatar
export const Default: Story = {
    args: {
        imageUrl: image,
        altText: 'Avatar de ejemplo',
        size: 'small',  // Tamaño por defecto
        shape: 'circle',  // Forma por defecto
    },
};

// Historia con tamaño pequeño y circular
export const SmallCircle: Story = {
    args: {
        imageUrl: image,
        altText: 'Avatar pequeño circular',
        size: 'small',  // Tamaño pequeño
        shape: 'circle',  // Forma circular
    },
};

// Historia con una imagen personalizada y forma cuadrada
export const LargeSquare: Story = {
    args: {
        imageUrl: image,
        altText: 'Avatar de usuario',
        size: 'large',  // Tamaño grande
        shape: 'square',  // Forma cuadrada
    },
};