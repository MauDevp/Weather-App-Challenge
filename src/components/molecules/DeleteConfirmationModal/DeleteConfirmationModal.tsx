import { DeleteUserContainer, Button } from "../../atoms";
import { UserCard } from "../UserCard";
import './DeleteConfirmationModal.css';
import { useDispatch } from "react-redux";
import { removeUser  } from "../../../store/slices/userSlice"; // Asegúrate de tener esta acción en tu slice
import Image from '@assets/images/avatars/profile-1.jpg'; // Asegúrate de que esta importación sea una URL de imagen de tipo string

type DeleteConfirmationModalProps = {
    userId: string | null;
    image: string;
    userName: string;
    location: string;
    onClose: () => void; // Función para cerrar el modal
};

export const DeleteConfirmationModal = ({ userId, userName, location, image, onClose }: DeleteConfirmationModalProps) => {
    const dispatch = useDispatch();

    // Función para manejar la eliminación del usuario
    const handleDeleteUser = () => {
        if (userId) { // Solo intenta eliminar si userId no es null
            dispatch(removeUser (userId)); // Elimina el usuario con el userId
        }
        onClose(); // Cierra el modal después de intentar eliminar
    };

    return (
        <DeleteUserContainer>
            <div className="delete-confirmation-modal">
                <h1 className="headline3">Eliminar usuario</h1>
                <UserCard
                    userName={userName}
                    location={location}
                    showActions={false} // Muestra el UserCard sin los botones
                    image={image || Image} // Añadir la imagen del usuario aquí
                    onDelete={handleDeleteUser} // Añadir la función onDelete aquí
                />
                <div className="delete-confirmation-sectionButtons">
                    <h2 className="headline4">¿Deseas eliminar el usuario?</h2>
                    <div className="delete-confirmation-buttons">
                        <Button label="Eliminar usuario" variants="primary" onClick={handleDeleteUser} />
                        <Button label="Mantener usuario" variants="secondary" onClick={onClose} />
                    </div>
                </div>
            </div>
        </DeleteUserContainer>
    );
};
