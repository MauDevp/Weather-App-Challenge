import { Meta, StoryObj } from '@storybook/react';
import { Weather }  from './Weather';

const meta: Meta<typeof Weather> = {
    title: 'Components/Molecules/Weather',
    component: Weather,
    tags: ['autodocs'],
    argTypes: {
        date: {
            control: {
                type: 'text',
            },
        },
        temperature: {
            control: {
                type: 'number',
            },
        },
        location: {
            control: {
                type: 'text',
            },
        }
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        date: '2024-09-03',
        temperature: 33.2,
        location: 'Bogotá, Colombia'
    }
};