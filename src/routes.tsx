import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import { UserDetails } from './pages/UserDetails';
import {NotFoundPage} from './pages/NotFoundPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:username" element={<UserDetails />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Manejo de rutas no encontradas */}
            </Routes>
        </Router>
    );
};
