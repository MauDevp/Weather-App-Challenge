import React from 'react'; // Importa la librería de React
import './CardContainer.css'; // Importa los estilos específicos para el contenedor de la tarjeta
import '@styles/typography.css'; // Importa los estilos de tipografía globales

// Define el tipo de las propiedades que acepta el componente
type Props = {
    // Propiedad que acepta cualquier tipo de contenido como hijos
    children: React.ReactNode;

    // Propiedad opcional que acepta una cadena de texto como clase
    className?: string;
}

// Componente Wrapper que envuelve a los hijos en un contenedor de cards
export const CardContainer = ({children, className} : Props) => {
    return (
        // Renderiza un div con la clase "cardContainer" que envuelve a los hijos pasados como props
        <div className={`cardContainer ${className || ''}`}>{children}</div>
    )
}