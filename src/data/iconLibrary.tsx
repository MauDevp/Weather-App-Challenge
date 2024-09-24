import { ArrowLeft, ChevronDown, Trash, MarkerPin } from "../components/atoms/Icons";

// Definimos el tipo para los íconos
interface IconDefinition {
    name: string;
    component: React.ComponentType;
    id: string;
}

// Exportamos un array de objetos ícono
export const iconLibrary: IconDefinition[] = [
    { name: 'arrow-left', component: ArrowLeft, id: 'icon-arrow_left' },
    { name: 'trash', component: Trash, id: 'icon_trash' },
    { name: 'chevron-down', component: ChevronDown, id: 'icon-chevron_down' },
    { name: 'marker-pin', component: MarkerPin, id: 'icon-marker_pin' },
];
