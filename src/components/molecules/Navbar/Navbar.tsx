import './Navbar.css'
import { Button } from '../../atoms/'

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <span className='headline3'>Weather app /  [Nombre de solicitante]</span>
                <Button label='Ingresar usuario' onClick={()=>console.log('hola')}/>
            </nav>
        </div>
    )
}