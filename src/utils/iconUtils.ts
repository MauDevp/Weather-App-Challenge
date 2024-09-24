import { iconLibrary } from '../data/iconLibrary';
import React from 'react';

/**
 * Función para obtener un ícono basado en el nombre o el id.
 * @param identifier string - Puede ser el nombre o el id del ícono.
 * @returns Componente React del ícono o null si no existe.
 */

export const getIconComponent = (identifier: string): React.FC<React.SVGProps<SVGSVGElement>> | null => {
    // Buscar en el archivo de íconos el que coincida con el `name` o `id`
    const icon = iconLibrary.find((icon) => icon.name === identifier || icon.id === identifier);

    // Si encontramos el ícono, devolvemos el componente
    if (icon) {
        return icon.component as React.FC<React.SVGProps<SVGSVGElement>>;
    }

    return null; // Si no no,se encuentra el íco devolvemos null
};
