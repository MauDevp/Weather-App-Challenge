import { Avatar, Button } from '../../atoms';
import '@styles/typography.css';  // Estilos de tipografía
import './UserCard.css'
import Image from '@assets/images/avatars/profile-1.jpg';
import { MarkerPin } from '../../atoms/Icons';
import { CardContainer } from '../../atoms/CardContainer';

import { useNavigate } from 'react-router-dom';


// Definición de las propiedades del componente UserCard
type UserCardProps = {
    /** ID del usuario */
    key?: string;
    /** Nombre del usuario */
    userName: string;
    /** Ubicación del usuario */
    location: string;
    /** Imagen del usuario */
    image: string;
    /** Mostrar botones de acciones (detalles, eliminar) */
    showActions?: boolean;
    /** Función para manejar la eliminación */
    onDelete?: () => void;
}

/** Componente UserCard que muestra la información de un usuario */
export const UserCard = 
    ({
        image=Image,
        userName='User name', 
        location='20.6637808, -103.4315425',
        showActions = true, // Por defecto, se muestran los botones
        onDelete
    }: UserCardProps) => {
    
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/user/${userName}`); // Navega a la ruta dinámica
    };

    return (
        <CardContainer>
            <Avatar
                imageUrl={image}
                altText="Avatar del usuario seleccionado"
                size="large"
                shape="square"
            />
            <div className='footer-container'>
                <label htmlFor="user-select" className="label-name headline3">{userName}</label>
                <div className='location-container'>
                    <MarkerPin className='MakerPin'/>
                    <p className='location-text body'>
                        {location}
                    </p>
                </div>
                {showActions && (
                    <div className='buttons-container'>
                        <Button
                            label='Detalles'
                            variants='secondary'
                            onClick={handleDetailsClick} // Maneja la acción de detalles aquí
                        />
                        <Button
                            iconIdentifier="trash"
                            iconPosition="alone"
                            variants="tertiary"
                            onClick={onDelete} // Maneja la acción de eliminación aquí
                        />
                    </div>
                )}
            </div>
        </CardContainer>
    );
};