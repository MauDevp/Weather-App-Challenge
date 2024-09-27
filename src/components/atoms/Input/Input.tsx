import React from 'react';
import './Input.css'; // Estilos específicos para el componente
import '@styles/typography.css'; // Estilos de tipografía

// Tipado de las propiedades del componente Input
type Props = {
    /** Valor del input */
    value?: string;
    /** Función que se ejecuta cuando el valor del input cambia */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Texto que se muestra como placeholder en el input */
    placeholder?: string;
    /** Indica si el input es obligatorio */
    required?: boolean;
    /** Id del input */
    id?: string;
    /** Tipo del input */
    type?: string;
}

/** Componente Input que renderiza un input de texto */
export const Input = ({
    /** === Props === */
        value='',
        onChange,
        placeholder='Placeholder',
        required=false,
        id='input',
        type='text'
    }: Props) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="input"
        />
    );
};
