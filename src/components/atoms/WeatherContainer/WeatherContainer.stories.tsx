import { WeatherContainer } from './WeatherContainer';
import { Meta, StoryObj } from '@storybook/react';

// Metadata
const meta: Meta<typeof WeatherContainer> = {
    component: WeatherContainer,
    title: 'Components/Atoms/WeatherContainer',
    tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>

// WeatherContainer
export const Default: Story = {
    render: () => (
        <WeatherContainer>
            <div style={{background:'gray', borderRadius:'12px', padding:'12px'}}>
                <h1 className='title'>Title</h1>
                <p className='body'>Body</p>
            </div>
        </WeatherContainer>
    )
};

export default meta;