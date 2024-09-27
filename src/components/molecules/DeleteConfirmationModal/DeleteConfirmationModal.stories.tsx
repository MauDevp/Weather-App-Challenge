import { Meta, StoryObj } from '@storybook/react';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';

const meta: Meta<typeof DeleteConfirmationModal> = {
    title: 'Components/molecules/DeleteConfirmationModal',
    component: DeleteConfirmationModal,
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

export default meta;

export const Default: Story = {
    args: {
        userId: '123',
        userName: 'John Doe',
        location: '30.2673, -97.7431',
    },
};