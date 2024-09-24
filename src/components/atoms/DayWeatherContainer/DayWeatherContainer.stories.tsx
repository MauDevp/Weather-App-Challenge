import { DayWeatherContainer } from './DayWeatherContainer';
import { Meta, StoryObj } from '@storybook/react';

// Metadata
const meta: Meta<typeof DayWeatherContainer> = {
    component: DayWeatherContainer,
    title: 'Components/Atoms/DayWeatherContainer',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

// DayWeatherContainer
export const Default: Story = {
    render: () => (
        <DayWeatherContainer>
            <div style={{background:'gray', borderRadius:'12px', padding:'12px'}}>contenido</div>
        </DayWeatherContainer>
    )
};

export default meta;