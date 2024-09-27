import { useState, useEffect, useCallback } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface MapComponentProps {
    initialCoordinates: { lat: number; lng: number }; // Coordenadas iniciales
    onCoordinatesChange: (lat: number, lng: number) => void; // Prop para manejar cambios en las coordenadas
}

export const MapComponent = ({ initialCoordinates, onCoordinatesChange }: MapComponentProps) => {
    const [position, setPosition] = useState(initialCoordinates);

    // Efecto para centrar el mapa al cambiar las coordenadas iniciales
    useEffect(() => {
        setPosition(initialCoordinates);
    }, [initialCoordinates]);


    // Manejar el arrastre del marcador
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMarkerDragEnd = useCallback((event: any) => {
        const { latLng } = event;
        if (latLng) {
            const lat = latLng.lat();
            const lng = latLng.lng();

            // Actualizar la posición y pasar las nuevas coordenadas al componente padre
            setPosition({ lat, lng });
            onCoordinatesChange(lat, lng);
        }
    }, [onCoordinatesChange]);


    return (
        <APIProvider apiKey={apiKey}>
            <Map
                defaultCenter={position} // Coordenadas del centro del mapa
                defaultZoom={15} // Nivel de zoom
                gestureHandling={'greedy'} // Habilitar gestos de navegación
                disableDefaultUI={true} // Deshabilitar la interfaz de usuario predeterminada
            >
                <Marker 
                    position={position} 
                    draggable={true} // Habilitar arrastrar el marcador
                    onDragEnd={handleMarkerDragEnd} // Manejar el evento de arrastre finalizado
                />
            </Map>
        </APIProvider>
    );
};
