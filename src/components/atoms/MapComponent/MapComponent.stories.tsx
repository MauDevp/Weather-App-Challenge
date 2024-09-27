import { Meta, StoryObj } from '@storybook/react';
import { MapComponent } from './MapComponent';

const meta: Meta<typeof MapComponent> = {
    component: MapComponent,
    title: 'Components/atoms/MapComponent',
    tags: ['autodocs'],

}

type Story = StoryObj<typeof meta>

export default meta;

export const Default: Story = {
    args: {},
};

export const Prueba: Story = {
    render: () => {
        return(
            <div style={{display:'flex', height:'80vh', width:'80vw'}}>
                <MapComponent 
                        initialCoordinates={{ lat: 40.7128, lng: -74.0060 }} // Coordenadas iniciales (por ejemplo, Nueva York
                        onCoordinatesChange={(lat, lng) => console.log(`Nuevas coordenadas: ${lat}, ${lng}`)} // Manejar cambios en las coordenadas
                />
            </div>
        )
    }
};