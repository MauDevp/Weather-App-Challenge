import './Avatar.css';
import image from '@assets/images/avatars/profile-1.jpg';

// Tipado de las propiedades del componente Avatar
type Props = {
    imageUrl: string;  // URL de la imagen para el avatar
    altText?: string;  // Texto alternativo en caso de que falte la imagen
    size?: 'small' | 'large';  // Tamaños predefinidos
    shape?: 'circle' | 'square';  // Formas: circular o cuadrada
};

/**
 * Componente Avatar que muestra una imagen de avatar de usuario.

 * Este componente recibe una URL de imagen,
 * un texto alternativo opcional, 
 * un tamaño 
 * y una forma.
 * */
export const Avatar = ({ 
        imageUrl = image,
        altText = 'User Avatar',
        size = 'small',
        shape = 'circle',
    }: Props) => {

    return (
        <div className={`avatar-container ${size} ${shape}`}>
            <img 
                src={imageUrl} 
                alt={altText} 
                className={`avatar-image`}
            />
        </div>
    );
};
