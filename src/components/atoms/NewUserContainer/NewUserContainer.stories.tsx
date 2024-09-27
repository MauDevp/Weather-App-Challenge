import { Meta, StoryObj } from '@storybook/react';
import {NewUserContainer} from './NewUserContainer';

// Metadata
const meta: Meta<typeof NewUserContainer> = {
    component: NewUserContainer,
    title: 'Components/Atoms/NewUserContainer',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

// NewUserContainer
export const Default: Story = {
    args: {
        children: '',
    },
};

export default meta;