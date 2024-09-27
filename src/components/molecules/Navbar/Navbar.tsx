import './Navbar.css'
import { Button } from '../../atoms/'
/* Importación de redux */
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/slices/userSlice'; // Importa las acciones
import { useLocation } from 'react-router-dom'; // Importa useLocation

export const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation(); // Obtiene la ubicación actual

    const openModalHandler = () => {
        dispatch(openModal()); // Cierra el modal usando Redux
    };

    // Lógica para determinar el texto que se mostrará en la navbar
    const isHome = location.pathname === '/';
    const requestorName = isHome ? 'Home' : location.pathname.split('/user/')[1]; // Extrae el nombre de la ruta

    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <span className='headline3'>Weather app / {requestorName}</span>
                <Button label='Ingresar usuario' onClick={openModalHandler}/>
            </nav>
        </div>
    )
}