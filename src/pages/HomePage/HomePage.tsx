import { Link } from 'react-router-dom';
import { HomeUsers } from '../../components/organisms';
import { Navbar } from '../../components/molecules';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <section className='section-users'>
                <HomeUsers />
                <Link to="/users">Ver usuarios</Link>
            </section>
        </>
    );
};
