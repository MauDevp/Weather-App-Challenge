import { DayWeather } from './DayWeather';
import { Meta, StoryObj } from '@storybook/react';

// Metadata
const meta: Meta<typeof DayWeather> = {
    component: DayWeather,
    title: 'Components/molecules/DayWeather',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

// DayWeather
export const Default: Story = {
    args: {
        day: '2024-09-04',
        temperature: '27.7°C',
        icon: 'https://www.weatherbit.io/static/img/icons/c01d.png',
    },
};

export default meta;