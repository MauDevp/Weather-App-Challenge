import React, { useState, useRef } from 'react';
import './Select.css'; // Estilos específicos para el componente
import '@styles/typography.css'; // Estilos de tipografía
import { ChevronDown } from '../Icons'; // Importa el componente ChevronDown

interface Option {
    value: string;
    label: string;
}

// Tipado de las propiedades del componente Select
type Props = {
    /** Texto que se muestra como placeholder en el select */
    placeholder?: string;
    /** Lista de opciones para el select */
    options: Option[];
    /** Valor seleccionado actualmente */
    value: string;
    /** Función que se ejecuta cuando cambia la selección */
    onChange: (value: string) => void;
}

/** Componente Select que renderiza un menú desplegable */
export const Select = ({
    /** === Props === */
    options = [ {value: 'profile-1', label: 'Profile 1'} ],
    value,
    onChange,
    placeholder = 'Profile 1',
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
        setIsFocused(false); // Cerrar el select al seleccionar una opción
        selectRef.current?.blur(); // Forzar la pérdida de foco
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="select-container">
            <select
                ref={selectRef}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="select"
            >
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <ChevronDown className={`select-icon ${isFocused ? 'open' : ''}`} color="currentColor" />
        </div>
    );
};