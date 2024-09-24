import {CardContainer} from './CardContainer';
import type { Meta, StoryObj } from '@storybook/react';

// Definir la metadata del componente
const meta: Meta<typeof CardContainer> = {
    title: 'Components/Atoms/CardContainer',
    component: CardContainer,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Componente por defecto en avatar
export const Default: Story = {
    render: () => (
        <CardContainer>
            <div style={{background:'gray', borderRadius:'12px'}}>
                <p style={{margin:'10px'}}>Contenido</p>
            </div>
        </CardContainer>
    )
};