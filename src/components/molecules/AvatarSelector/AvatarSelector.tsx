import { useState } from 'react';
import { Avatar, Select } from '../../atoms';
import './AvatarSelector.css';  // Estilos específicos para esta molécula
import '@styles/typography.css';  // Estilos de tipografía
import Image from '@assets/images/avatars/profile-1.jpg';
import Image2 from '@assets/images/avatars/profile-2.jpg';

 // Definir las opciones como objetos con value y label
const imageOptions = [
    { value: Image, label: 'Profile 1' },
    { value: Image2, label: 'Profile 2' },
];

export const AvatarSelector = () => {
    // Inicializar con el primer valor de las opciones
    const [selectedImage, setSelectedImage] = useState(imageOptions[0].value);

    // Manejar el cambio del valor seleccionado en el selector
    const handleSelectChange = (value: string) => {
        setSelectedImage(value);
    };

    return (
        <div className="profile-form">
            <Avatar
                imageUrl={selectedImage}
                altText="Avatar del usuario seleccionado"
                size="small"
                shape="circle"
            />
            <div className='profile-select'>
                <label htmlFor="user-select" className="headline4 profileLabel">Selecciona tu avatar</label>
                <Select
                    placeholder="Selecciona una imagen"
                    options={imageOptions}  // Pasar las opciones como objetos { value, label }
                    value={selectedImage}
                    onChange={handleSelectChange}
                />
            </div>
        </div>
    );
};