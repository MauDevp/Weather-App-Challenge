import ReactDOM from "react-dom";
import { UserCard, DeleteConfirmationModal } from "../../molecules";
import "./HomeUsers.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../store/store';
import { openDeleteModal, closeDeleteModal } from '../../../store/slices/userSlice';
import Image from '@assets/images/avatars/profile-1.jpg'; // Asegúrate de que esta importación sea una URL de imagen de tipo string


export const HomeUsers = () => {
    const dispatch = useDispatch();
    const { users, isModalDeleteOpen, userToDelete } = useSelector((state: RootState) => state.user);

    const handleOpenModal = (userId: string) => {
        dispatch(openDeleteModal(userId)); // Abre el modal y guarda el ID del usuario a eliminar
    };

    const handleCloseModal = () => {
        dispatch(closeDeleteModal()); // Cierra el modal
    };


    return (
        <div className="homeUsers-container">
            <section className="homeUsers-TextContainer">
                <h1 className="headline1">Usuarios registrados</h1>
                <span className="body">Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend at.</span>
            </section>
            <section className="homeUsers-CarsContainer">
                {users.map(user => (
                    <UserCard
                        key={user.id} // Usa un key único para cada UserCard
                        userName={user.username}
                        location={`${user.coordinates.lat}, ${user.coordinates.lng}`}
                        image={user.photo || Image} // Pasar la imagen del avatar
                        onDelete={() => handleOpenModal(user.id)} // Maneja la eliminación
                    />
                ))}
            </section>
            {/* Renderizar el modal con React Portal si está abierto */}
            {isModalDeleteOpen && ReactDOM.createPortal(
                <DeleteConfirmationModal
                    userId={userToDelete}  // ID del usuario a eliminar
                    image={users.find(user => user.id === userToDelete)?.photo || ""} // Imagen del usuario`        
                    userName={users.find(user => user.id === userToDelete)?.username || ""} // Nombre del usuario
                    location={`${users.find(user => user.id === userToDelete)?.coordinates.lat || 0}, ${users.find(user => user.id === userToDelete)?.coordinates.lng || 0}`} // Ubicación
                    onClose={handleCloseModal} // Función para cerrar el modal
                />,
                document.querySelector('#modal') as Element  // Aquí montamos el modal
            )}
        </div>
    );
};
