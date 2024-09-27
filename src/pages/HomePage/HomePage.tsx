import ReactDOM from 'react-dom';
import { HomeUsers } from '../../components/organisms';
import { Navbar, NewUserForm } from '../../components/molecules';
import './HomePage.css';


export const HomePage = () => {
    const mostrarForm = true;
    return (
        <>
            {mostrarForm && ReactDOM.createPortal(<NewUserForm />, document.querySelector('#modal') as Element)}
            <Navbar />
            <section className='section-users'>
                <HomeUsers />
            </section>
        </>
    );
};
