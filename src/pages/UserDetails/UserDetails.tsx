import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store'; // Importa el tipo correcto
import { fetchWeather } from '../../store/slices/weatherSlice'; // Asegúrate de usar la acción correcta
import { UserCard, Weather, Navbar, DayWeather, NewUserForm } from '../../components/molecules';
import { Button, MapComponent, CardContainer } from '../../components/atoms';
import Image from '@assets/images/avatars/profile-1.jpg'; // Asegúrate de que esta importación sea una URL de imagen de tipo string
import './UserDetails.css';
import ReactDOM from 'react-dom';


export const UserDetails = () => {
    const { username } = useParams<{ username: string }>(); // Obtiene el parámetro de la URL
    const dispatch = useDispatch<AppDispatch>(); // Usa AppDispatch para tipar correctamente

    // Accede a la lista de usuarios en Redux
    const user = useSelector((state: RootState) =>
        state.user.users.find((user) => user.username === username)
    );

    // Accede al estado del clima desde Redux
    const { data: weather, loading, error } = useSelector((state: RootState) => state.weather);

    useEffect(() => {
        if (user) {
            // Si el usuario es encontrado, solicita la información del clima
            dispatch(fetchWeather({ lat: user.coordinates.lat, lng: user.coordinates.lng }));
        }
    }, [dispatch, user]);

    if (!user) {
        return <h2>Usuario no encontrado</h2>;
    }

    const mostrarForm = true;
    return (
        <>
            {mostrarForm && ReactDOM.createPortal(<NewUserForm />, document.querySelector('#modal') as Element)}
            <Navbar />
            <div className='section-weather'>
                {/* Muestra el nombre del usuario y una descripción */}
                <section className="prognosticUser-TextContainer">
                    <Button
                        iconIdentifier="arrow-left"
                        iconPosition="left"
                        label="Regresar"
                        variants="secondary"
                        onClick={() => window.history.back()} // Volver a la página anterior
                    />
                    <h1 className="headline1">Pronostico del tiempo</h1>
                    <span className="body">Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend at.</span>
                </section>
                <section className='weatherPrognostic-container'>
                    <div>
                        {/* Mostrar el estado de carga, error o los datos del clima */}
                        {loading && <p>Cargando clima...</p>}
                        {error && <p>Error al obtener el clima: {error}</p>}
                        {weather && (
                            <Weather
                                temperature={weather.main.temp}
                                date="Hoy"
                                location={weather.name}
                                caracteristics={{
                                    humidity: weather.main.humidity,
                                    wind: weather.wind.speed,
                                    uvIndex: 5, // Ejemplo, necesitarás consultar el índice UV desde otro endpoint si lo deseas
                                    visibility: weather.visibility
                                }}
                            />
                        )}
                    </div>
                    <div className='weatherPrognostic-widgets-container'>
                        <DayWeather
                            day="11-10-2021"
                            temperature='25°'
                            icon='https://www.weatherbit.io/static/img/icons/c01d.png'
                        />
                        <DayWeather
                            day="11-10-2021"
                            temperature='25°'
                            icon='https://www.weatherbit.io/static/img/icons/c01d.png'
                        />
                        {/* Muestra el componente UserCard con la información del usuario */}
                        <UserCard
                            userName={user.username}
                            location={`Lat: ${user.coordinates.lat}, Lng: ${user.coordinates.lng}`}
                            image={user.photo || Image} // Foto del perfil
                            showActions={false} // No mostrar acciones
                        />
                        <div className='cardMaps-container'>
                            <CardContainer className='dimensionContainerMap'>
                                <MapComponent
                                    initialCoordinates={{ lat: user.coordinates.lat, lng: user.coordinates.lng }}
                                    onCoordinatesChange={() => {}} // No se necesita manejar cambios en las coordenadas
                                />
                            </CardContainer>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
