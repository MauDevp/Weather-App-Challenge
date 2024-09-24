import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'Components/molecules/Navbar',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

export default meta;

export const Default: Story = {
    args: {},
};