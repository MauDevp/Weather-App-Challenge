// src/components/atoms/Button.tsx
import './Button.css'; // Archivo de estilos específico del botón
import '@styles/typography.css'; // Archivo de estilos de tipografía
// Función para obtener el componente de ícono
import { getIconComponent } from '../../../utils/iconUtils';


// Tipado de las propiedades del botón
type Props = {
    /** Función que se ejecuta al hacer click en el botón */
    onClick?: () => void,

    /** Texto del boton */
    label?: string,

    /** Variantes del botón */
    variants?: 'primary' | 'secondary' | 'tertiary',

    /** Posición del icono */
    iconPosition?: 'none' | 'left' | 'right' | 'alone',

    /** Icono del botón */
    iconIdentifier?: string,
};

/** Button personalizado con props */
export const Button = ({
        /* === props === */
        label,
        variants = 'primary',
        iconPosition='none',
        iconIdentifier='arrow-left',
        onClick
    }: Props) => {

    // Clases predefinidas para el ícono
    const iconClasses = `icon sizeIcon ${variants === 'primary' ? 'icon-white' : 'icon-color'}`;

    // Función para renderizar el ícono
    const renderIcon = () => {
        if (!iconIdentifier || iconPosition === 'none') return null;
        // Obtener el componente del ícono basado en el identificador (nombre o id)
        const IconComponent = getIconComponent(iconIdentifier);
        if (!IconComponent) return null;
        // Aplica las clases predefinidas al componente del ícono
        return <IconComponent className={iconClasses} />;
    };

    return (
        // Botón con clase predefinida
        <button onClick={onClick} className={`button ${variants} sizeButton ${iconPosition === 'alone' ? 'icon-alone' : ''}`}>
            {/* Lógica para renderizar el ícono en la posición correcta */}
            {iconPosition === 'left' && renderIcon()}
            {iconPosition !== 'alone' && <span className="label buttonText">{label}</span>}
            {iconPosition === 'right' && renderIcon()}
            {iconPosition === 'alone' && renderIcon()}
        </button>
    );
};

