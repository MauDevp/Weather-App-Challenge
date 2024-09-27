import './NewUserForm.css';
import { NewUserContainer } from '../../atoms/NewUserContainer';
import { AvatarSelector } from '../AvatarSelector';
import { Input, MapComponent, Button } from '../../atoms';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, setUsername, setCoordinates, addUser, setSelectedAvatar } from '../../../store/slices/userSlice';
import { RootState } from '../../../store/store';
import { v4 as uuidv4 } from 'uuid';

export const NewUserForm = () => {
    const dispatch = useDispatch();
    const { coordinates, username, isModalOpen, selectedAvatar } = useSelector((state: RootState) => state.user);

    const formatCoordinate = (value: number) => {
        return parseFloat(value.toFixed(8)); // Limita a 8 decimales
    };

    const handleCoordinatesChange = (lat: number, lng: number) => {
        dispatch(setCoordinates({ lat: formatCoordinate(lat), lng: formatCoordinate(lng) }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(event.target.value));
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newUser = {
            id: uuidv4(),
            username,
            coordinates,
            photo: selectedAvatar, // Usa el avatar del estado de Redux
        };

        dispatch(addUser(newUser));

        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        dispatch(setUsername(''));
        dispatch(setCoordinates({ lat: 20.6866131, lng: -103.3526079 }));
        dispatch(setSelectedAvatar('')); // Reinicia el avatar seleccionado al cerrar el modal

        closeModalHandler();
    };

    return (
        <>
            {isModalOpen && (
                <NewUserContainer onClose={closeModalHandler}>
                    <form className="new-user-form-container" onSubmit={handleSubmit}>
                        <div className='new-user-form'>
                            <fieldset className='new-user-form-avatar'>
                                <legend className='headline3 legend-selectUser'>Añadir un nuevo usuario</legend>
                                <AvatarSelector /> {/* El selector de avatar ahora usa Redux */}
                            </fieldset>
                            <fieldset className='new-user-form-user'>
                                <div className='inputField'>
                                    <label className='headline4' htmlFor="usuario">Usuario</label>
                                    <Input
                                        id="usuario"
                                        value={username}
                                        type='text'
                                        required={true}
                                        placeholder="Nombre de usuario"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='new-user-form-coordinates'>
                                    <div className='inputField'>
                                        <label className='headline4' htmlFor="latitud">Latitud</label>
                                        <Input
                                            id="latitud"
                                            type='text'
                                            required={true}
                                            placeholder="Ingresa tu latitud"
                                            value={coordinates.lat.toString()}
                                            onChange={(e) => dispatch(setCoordinates({ ...coordinates, lat: parseFloat(e.target.value) }))}
                                        />
                                    </div>
                                    <div className='inputField'>
                                        <label className='headline4' htmlFor="longitud">Longitud</label>
                                        <Input
                                            id="longitud"
                                            type='text'
                                            required={true}
                                            placeholder="Ingresa tu longitud"
                                            value={coordinates.lng.toString()}
                                            onChange={(e) => dispatch(setCoordinates({ ...coordinates, lng: parseFloat(e.target.value) }))}
                                        />
                                    </div>
                                </div>
                                <div className='new-user-form-Button'>
                                    <Button
                                        iconPosition="none"
                                        label="Añadir usuario"
                                        variants="primary"
                                        type="submit"
                                    />
                                </div>
                            </fieldset>
                        </div>
                        <div className='maps-container'>
                            <MapComponent
                                initialCoordinates={coordinates}
                                onCoordinatesChange={handleCoordinatesChange}
                            />
                        </div>
                    </form>
                </NewUserContainer>
            )}
        </>
    );
};
