import { Meta, StoryObj } from '@storybook/react';
import {HomeUsers} from './HomeUsers';

const meta: Meta<typeof HomeUsers> = {
    title: 'Components/Organisms/HomeUsers',
    component: HomeUsers,
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        
    },
};

export default meta;