import { Meta, StoryObj } from '@storybook/react';
import { NewUserForm } from './NewUserForm';

const meta: Meta<typeof NewUserForm> = {
    component: NewUserForm,
    title: 'Components/molecules/NewUserForm',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

export default meta;

export const Default: Story = {
    args: {},
};